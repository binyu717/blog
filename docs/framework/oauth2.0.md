## Spring Security OAuth2 框架
- Spring Security OAuth2 是建立在 Spring Security 的基础之上 OAuth2.0 协议实现的一个类库，它提供了构建 Authorization Server、Resource Server 和 Client 三种 Spring 应用程序角色所需要的功能，能够更好的集成到 Spring Cloud 体系中。

##源码解析
### 1.核心类
 #### 1.1 Authentication: spring security中是最高级别的身份/认证的抽象
 ```java
public interface Authentication extends Principal, Serializable {

    // 权限信息列表，默认是GrantedAuthority接口的一些实现类，通常是代表权限信息的一系列字符串。
    Collection<? extends GrantedAuthority> getAuthorities();
    // 密码信息，用户输入的密码字符串，在认证过后通常会被移除，用于保障安全
    Object getCredentials();
    // 细节信息，web应用中的实现接口通常为 WebAuthenticationDetails，它记录了访问者的ip地址和sessionId的值。
    Object getDetails();
    // 大部分情况下返回的是UserDetails接口的实现类
    Object getPrincipal();

    boolean isAuthenticated();

    void setAuthenticated(boolean var1) throws IllegalArgumentException;
}

 ```

#### 1.2 AuthenticationManager, ProviderManager 和 AuthenticationProvider 认证的起点
- 关系：通过AuthenticationManager的实现类ProviderManager，去维护一个List<AuthenticationProvider>列表

#### 1.3 AuthenticationProvider 认证的关键
- 自定义provider,一般采用继承AbstractUserDetailsAuthenticationProvider,重写retrieveUser（根据用户名加载用户）、additionalAuthenticationChecks（UsernamePasswordAuthenticationToken和UserDetails密码的比对），关键的authenticate()方法在抽象类已实现。

#### 1.4 WebSecurityConfigurerAdapter 
 - 继承WebSecurityConfigurerAdapter，加@EnableWebSecurity、@Configuration注解，使得SpringMVC集成了Spring Security的web安全支持
 - configure(HttpSecurity)    
    - authorizeRequests()配置路径拦截，表明路径访问所对应的权限，角色，认证信息。
    - formLogin()对应表单认证相关的配置。    
    - logout()对应了注销相关的配置
 - configureGlobal(AuthenticationManagerBuilder) 配置用户、provider,
 -  configure(WebSecurity web) 


 ####   Spring Security是如何完成身份认证的？
- 用户名和密码被过滤器获取到，封装成Authentication,通常情况下是UsernamePasswordAuthenticationToken这个实现类。
- AuthenticationManager 身份管理器负责验证这个Authentication
- 认证成功后，AuthenticationManager身份管理器返回一个被填充满了信息的（包括上面提到的权限信息，身份信息，细节信息，但密码通常会被移除）Authentication实例。
- SecurityContextHolder安全上下文容器将上一步填充了信息的Authentication，通过SecurityContextHolder.getContext().setAuthentication(…)方法，设置到其中。






















### Authorization Server 
- AuthorizationServerConfigurerAdapter 配置类   
``` java
public class AuthorizationServerConfigurerAdapter implements AuthorizationServerConfigurer {
    public AuthorizationServerConfigurerAdapter() {
    }

    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
    }

    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
    }

    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
    }
}

```
- ClientDetailsServiceConfigurer：用来配置客户端详情信息，一般使用数据库来存储或读取应用配置的详情信息（client_id ，client_secret，redirect_uri 等配置信息）。   
- AuthorizationServerSecurityConfigurer：用来配置令牌端点(Token Endpoint)的安全与权限访问。   
- AuthorizationServerEndpointsConfigurer：用来配置授权以及令牌（Token）的访问端点和令牌服务（比如：配置令牌的签名与存储方式）

### Resource Server
- ResourceServerConfigurerAdapter 配置类   
  - 用于保护 OAuth2 要开放的资源，同时主要作用于client端以及token的认证(Bearer Auth)，由于后面 OAuth2 服务端后续还需要提供用户信息，所以也是一个 Resource Server，默认拦截了所有的请求，也可以通过重新方法方式自定义自己想要拦截的资源 URL 地址。
``` java
public class ResourceServerConfigurerAdapter implements ResourceServerConfigurer {
    public ResourceServerConfigurerAdapter() {
    }

    public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
    }

    public void configure(HttpSecurity http) throws Exception {
        ((AuthorizedUrl)http.authorizeRequests().anyRequest()).authenticated();
    }
}

```
