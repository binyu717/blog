### 使用Mockito和SpringTest进行单元测试
#### mockito基本用法
##### 数据打桩
- Mockito最基本的用法就是调用 when以及thenReturn方法了。他们的作用就是指定当我们调用被代理的对象的某一个方法以及参数的时候，返回什么值。
```java
    @Before
    public void setUp(){
        CouponDO couponDO = new CouponDO();
        // 数据准备
        prepareData(couponDO);
        // 数据打桩
        // 当调用couponDOMapper.insert(couponDO)时，返回一个1
        Mockito.when(couponDOMapper.insert(couponDO)).thenReturn(1);
        Mockito.when(couponDOMapper.updateByPrimaryKey(couponDO)).thenReturn(1);
        // 当调用couponDOMapper.deleteByPrimaryKey()时，any()表示任意参数，返回一个1
        Mockito.when(couponDOMapper.deleteByPrimaryKey(any())).thenReturn(1);
        // 当调用couponDOMapper.selectByPrimaryKey(1L)时，eq(1L)表示参数指定1时，返回一个couponDO对象
        Mockito.when(couponDOMapper.selectByPrimaryKey(eq(1L))).thenReturn(couponDO);
        //当调用couponDOMapper.updateByPrimaryKey()时，如果传入的id为null，那么就直接抛出异常
        Mockito.when(couponDOMapper.updateByPrimaryKey(Mockito.argThat(argument -> argument.getId()==null))).
                thenThrow(NullPointerException.class);
    }
```
- 参数匹配器：org.mockito.ArgumentMatchers 该类提供了更多的类似any()、eq()、anyLong()、matches(String regex)、endsWith(String suffix)静态方法
- Mockito还提供了另外表示行为的方法，thenAnswer(Answer<?> answer);、thenCallRealMethod();分别表示自定义处理调用后的行为，以及调用真实的方法。
##### 数据校验
- andExpect：添加ResultMatcher验证规则，验证控制器执行完成后结果是否正确（对返回的数据进行的判断） 
    - .andExpectstatus().isOk())
    - .andExpect(jsonPath(String expression, Matcher<T> matcher)) 使用andExpect方法对返回的数据进行判断，用“$.属性”获取里面的数据
    ```json
    {
        "success":true,
        "data":{"id":"1","name":"优惠券"}
    }
    ```
    - .andExpect(jsonPath("$.data.name", is("优惠券"))))  
    - .andExpect(jsonPath("$.data.id", notNullValue()))
    
#### 创建单元测试基类
```java
@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = NrosPromotionApplication.class)
@WebAppConfiguration
@Transactional
@Rollback()
public class BaseTest {

    protected static final Logger logger = LoggerFactory.getLogger(CouponControllerTest.class);

    @Autowired
    private WebApplicationContext wac;

    protected MockMvc mockMvc;

    @Before
    protected void init() {
        mockMvc = MockMvcBuilders.webAppContextSetup(wac).
                alwaysDo(print()).
                addFilter(new CharacterEncodingFilter(),"/*").
                alwaysExpect(status().isOk()).
                build();
        System.out.println("开始测试-----------------");
    }

    @After
    protected void after() {
        System.out.println("测试结束-----------------");
    }

    /**
     * @param method 请求方式
     * @param contentType 内容类型
     * @param contentObject 发送json数据格式时的请求参数对象
     * @param urlTemplate 请求路由
     * @param urlVariables 请求参数
     * @return
     */
    protected ResultActions getResultAction(RequestMethod method, MediaType contentType, Object contentObject, String urlTemplate, Object... urlVariables) {
        MockHttpServletRequestBuilder builder;
        switch (method) {
            case GET:
                builder = MockMvcRequestBuilders.get(urlTemplate, urlVariables);
                break;
            case POST:
                builder = MockMvcRequestBuilders.post(urlTemplate, urlVariables);
                break;
            case PUT:
                builder = MockMvcRequestBuilders.put(urlTemplate, urlVariables);
                break;
            case DELETE:
                builder = MockMvcRequestBuilders.delete(urlTemplate, urlVariables);
                break;
            default:
                throw new UnsupportedOperationException(method.name());
        }
        if (contentObject != null) {
            builder.contentType(contentType).content(JSONObject.toJSONString(contentObject));
        }
        try {
            return mockMvc.perform(builder).andExpect(status().isOk());
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
}
```

