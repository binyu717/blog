
## 项目中使用的一个websocket demo

### 第一步 
- WebSocketHandler用于处理websocket的消息
- HandshakeInterceptor用于处理握手前后的预处理工作。
```java
public class WebsocketSystemNoticeHandler extends TextWebSocketHandler {

    private static final Logger logger = LoggerFactory.getLogger(HandshakeInterceptor.class);
    private static Cache<String,WebSocketSession> cache;
    // 利用缓存存储连接对象，避免异常断开的对象无法回收，消耗内存
    public WebsocketSystemNoticeHandler() {
        super();
        cache = CacheBuilder.newBuilder()
                //允许同时最多10个线程并发修改
                .concurrencyLevel(10)
                //最大缓存10000个对象
                .maximumSize(10000L)
                //使用SoftReference对象封装value, 使得内存不足时，自动回收
                .softValues()
                .expireAfterWrite(6L, TimeUnit.MINUTES).removalListener(new RemovalListener<String,WebSocketSession>() {
                    @Override
                    public void onRemoval(RemovalNotification<String,WebSocketSession> notification) {
                        if ("EXPIRED".equals(notification.getCause())) {
                            logger.debug("缓存超时过期："+notification.getValue());
                        } else if ("COLLECTED".equals(notification.getCause())) {
                            logger.debug("缓存被垃圾回收："+notification.getValue());
                        }
                    }
                }).build();
    } 
    .
    .
    .
}
```

``` java
public class HandshakeInterceptor extends HttpSessionHandshakeInterceptor {
    private static final Logger logger = LoggerFactory.getLogger(HandshakeInterceptor.class);

    @Override
    public boolean beforeHandshake(ServerHttpRequest request,
                                   ServerHttpResponse response, WebSocketHandler wsHandler,
                                   Map<String, Object> attributes) throws Exception {
        HttpServletRequest servletRequest = ((ServletServerHttpRequest) request).getServletRequest();
        String sessionId = servletRequest.getSession().getId();
        logger.info("beforeHandshake 握手链接：sessionId="+sessionId);
        attributes.put("sessionId", sessionId);
        return true;
    }

    @Override
    public void afterHandshake(ServerHttpRequest request,
                               ServerHttpResponse response, WebSocketHandler wsHandler,
                               Exception ex) {
        super.afterHandshake(request, response, wsHandler, ex);
    }

}
```
### 第二步 
- xml配置
    - 如果web.xml是分开加载spring-context和spring-servlet的，则要把该配置放到spring-servlet上加载，否则报404。
    - 但是在spring-context加载的时候，messageHandler是还没有初始化的，不能自动注入到类中，否则服务启动失败。
 __WebSocket 实质上借用 HTTP 请求进行握手，启用 Spring WebSocket 需要在 org.springframework.web.servlet.DispatcherServlet 里配置拦截此请求__
```xml
 <!--websocket配置-->
    <bean id="websocketHandler" class="cn.yu.services.impl.websocket.WebsocketSystemNoticeHandler"/>
    <!-- 握手接口/拦截器 -->
    <bean id="websocketInterceptor" class="cn.yu.services.impl.websocket.HandshakeInterceptor"/>
    <websocket:handlers allowed-origins="*">
        <websocket:mapping path="/websocket" handler="websocketHandler" />
        <websocket:handshake-interceptors>
            <ref bean="websocketInterceptor"/>
        </websocket:handshake-interceptors>
    </websocket:handlers>

    <!--  注册 sockJS -->
    <websocket:handlers>
        <websocket:mapping path="/sockjs/websocket" handler="websocketHandler"/>
        <websocket:handshake-interceptors>
            <ref bean="websocketInterceptor"/>
        </websocket:handshake-interceptors>
        <websocket:sockjs />
    </websocket:handlers>
```

- java配置
```java
    @Configuration
    @EnableWebMvc
    @EnableWebSocket
    public class WebsocketConfig implements WebSocketConfigurer {

        // 这里也可以用自动注入的方式，在handler上加注解就行了
            // @Autowired
            // private WebsocketSystemNoticeHandler websocketSystemNoticeHandler;
        @Bean
        public WebsocketSystemNoticeHandler websocketSystemNoticeHandler() {
            return new WebsocketSystemNoticeHandler();
        }

        @Override
        public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
            registry.addHandler(websocketSystemNoticeHandler(), "/websocket")
                    .setAllowedOrigins("*")
            .addInterceptors(new HandshakeInterceptor());

        }
    }
```

## 当中遇到的问题
- 根据浏览器的保护规则，跨域的时候我们创建的sessionId是不会被浏览器保存下来的,因此在开发时前后联调的时候，因为sessionId的不同，会导致发送到其他client，我们可以构建一个拦截器，对需要跨域访问的request头部重写。   
服务端：
``` java
public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        HttpServletRequest request=(HttpServletRequest)servletRequest;
        response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
        response.setHeader("Access-Control-Max-Age", "0");
        response.setHeader("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With,userId,token");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setHeader("XDomainRequestAllowed","1");
        }
```
客户端也要相应地在请求中增加参数withcredentials=true,crossDomain=true