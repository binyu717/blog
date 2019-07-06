
### getResourceAsStream()了解一下
- this.getClass().getResourceAsStream()   
path 不以’/'开头时默认是从此类所在的包下取资源，以’/'开头则是从ClassPath根下获取。其只是通过path构造一个绝对路径，最终还是由ClassLoader获取资源。 
-  this.getClass().getClassLoader().getResourceAsStream()   
默认则是从ClassPath根下获取，path不能以’/'开头，最终是由ClassLoader获取资源。 

```java
    InputStream is = this.getClass().getResourceAsStream()
    Properties prop = new Properties(is);
    prop.load()
    // 这样就可以获取文件中的数据了
    prop.getProperty("key);

```
ClassPath根路径：war包下WEB-INF/目录；不过存放在resources目录下的文件都会打包到WEB-INF下的目录


### SimplePropertyPreFilter
```java
    // 构造过滤器 定义需要的字段类型
    SimplePropertyPreFilter filter = new SimplePropertyPreFilter(RoleModel.class,"id");
    // 对象转jsonString
    JSONObject.toJSONString(roleModel,filter);
```

### @Column 注解 

### 跨域
跨域：指的是浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对javascript施加的安全限制。
同源策略：是指协议，域名，端口都要相同，其中有一个不同都会产生跨域；

### @Transactional 踩坑
- 默认的事务规则是遇到运行异常（RuntimeException）和程序错误（Error）才会回滚，（手动抛出的Exception异常默认不会回滚），切记在 @Transactional 注解中使用 rollbackFor 属性来指定异常。
- tycatch掉异常，不会回滚
- AOP默认采用Java JDK的proxy方式，即JdkDynamicAopProxy方法，所以只能对于继承自接口的方法实现代理。
-  @Transactional注解只有外部方法调用才会起作用，同一个类内的方法调用是不起作用的，属于self=invocation。因此，@Transactional只能作用于public方法上面

### 多线程sleep和wait的区别
- 使用上,sleep是Thread线程类的方法，而wait是Object顶级类的方法。sleep可以在任何地方使用，wait只能在同步方法   者同步块中使用。
- CPU及资源锁释放上，sleep,wait调用后都会暂停当前线程并让出cpu的执行时间，但不同的是sleep不会放当前持有的对   的锁资源，到时间后会继续执行，而wait会放弃所有锁并需要notify/notifyAll后重新取到对象锁资源后才能继续执行。
- 异常捕获上，sleep需要捕获或者抛出异常，而wait/notify/notifyAll不需要。

### /etc/crontab 及 /var/spool/cron/$USER 
- 定时任务：在linux中主要有2个地方体现，一个是/etc/crontab ,另一个就是定义了任务计划的用户/var/spool/cron/$USER
- /etc/crontab 只有root用户可以使用，使用时需root权限，而且必须指定运行用户，才会执行
- /var/spool/cron/$USER 所有用户都可以使用，可以使用crontab -u username -e命令来直接编辑这个文件。
-  /var/log/cron.log  cron运行日志位置
- 格式：m h dom mon dow command   
    - m:分钟，0-59   
    - h:小时，0-23    
    - dom:日期，1-31   
    - mon:月份，1-12   
    - dow:星期，0-6，0为星期天   
    - command:命令   
    
### JAVA序列化
 - [Java 序列化的高级认识](https://www.ibm.com/developerworks/cn/java/j-lo-serial/)

 ### 数据库时间正常，接口返回时间慢8小时问题
 - bin/catalina.sh 文件首行加上 JAVA_OPTS="-Duser.timezone=GMT+08"
 
 ### Java反射获取对象成员属性，getFields()与getDeclaredFields()方法的区别
 - getFields()  获取某个类的所有的public字段，其中是包括父类的public字段的。
 - getDeclaredFields()：获取某个类的自身的所有字段，不包括父类的字段。对于私有的成员变量来说，要操作其属性值的话，就需要设置setAccessible(true);
 - so，若要获取父类的所有字段，则通过this.getClass().getSupperClass().getDeclaredFields()

 ### SpringBoot使用EnableWebMvc无法加载静态页面的问题解决
 - 事情缘由：项目新增一个解决Long类型数据json序列化时丢失精度config，类上注解@EnableWebMvc、@Configuration，启动发现swagger的页面无法访问了。
 - 那加EnableWebMvc与不加的区别到底在哪？
    - 当使用EnableWebMvc时，加载的是WebMvcConfigurationSupport中的配置项。
    - 当不使用EnableWebMvc时，使用的是WebMvcAutoConfiguration引入的配置项。
- 注意说明
    - Spring Boot 默认提供Spring MVC 自动配置，不需要使用@EnableWebMvc注解
    - 如果需要配置MVC（拦截器、格式化、视图等） 请使用添加@Configuration并实现WebMvcConfigurer接口，或是继承WebMvcConfigurationSupport类，不要添加@EnableWebMvc注解。
    - @EnableWebMvc 只能添加到一个@Configuration配置类上，用于导入Spring Web MVC configuration
- 解决方法
    - 继承WebMvcConfigurationSupport类，添加@Configuration，重写configureMessageConverters解决Long精度问题

### mapstruct编译报 Ambiguous mapping methods found for mapping collection element
- 业务需求需要自定义转化方法，代码如下：
```java
@Mapper(componentModel = "spring")
public abstract class MyConvertor {

    public abstract MyVO dtoToVO(MyDTO myDTO);

    public abstract List<MyVO> dtosToVOS(List<MyDTO> myDTOList);

    public MyVO dtoToDetailVO(MyDTO myDTO) {
        MyVO myVO = dtoToVO(myDTO);
        ···自定义逻辑···
        return myVO;
    }
}
```
- 在编译时，会重写dtoToVO、dtosToVOS方法；dtoToDetailVO已在抽象类实现；而mapstruct在重写集合之间转化时，实际是循环调用一对一转化方法；而此时通过入参和出参会发现存在两个方法；因此会报"Ambiguous mapping methods"；   
- 解决方法：自己去实现集合转化方法
```java
    public List<MyVO> dtosToVOS(List<MyDTO> myDTOList){
        if ( myDTOList == null ) {
            return null;
        }
        List<MyVO> list = new ArrayList<>( myDTOList.size() );
        for ( MyDTO myDTO : myDTOList ) {
            list.add( dtoToVO( myDTO ) );
        }
        return list;
    }
```
### springBoot 时间格式转换问题
- @RequestBody 修饰，DATE类型会json序列转化，jackson默认 yyyy-MM-ddTHH:mm:ss格式 前端需要以该格式传参，
    @DateTimeFormat注解不起作用，可以使用@JsonFormat来指定格式，也可配置统一的序列转换器
- @RequertParam 修饰，可以加@DateTimeFormat注解指定DATE接收格式