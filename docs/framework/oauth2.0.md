## Spring Security OAuth2 框架
- Spring Security OAuth2 是建立在 Spring Security 的基础之上 OAuth2.0 协议实现的一个类库，它提供了构建 Authorization Server、Resource Server 和 Client 三种 Spring 应用程序角色所需要的功能，能够更好的集成到 Spring Cloud 体系中。

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
