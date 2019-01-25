# Spring学习笔记
## 《Spring实战》
### 二、 装配Bean
#### 2.2 自动化装配Bean
Spring从两个角度来实现自动化装配：
- 组件扫描（component scanning）：Spring会自动发现应用上下文中所创建的bean。
- 自动装配（autowiring）：Spring自动满足bean之间的依赖。   

@ContextConfiguration，spring整合JUnit4测试时，使用注解引入多个配置文件  
- 单个文件  
    @ContextConfiguration(locations="../applicationContext.xml")
    @ContextConfiguration(classes = SimpleConfiguration.class)

@RunWith 运行器
- @RunWith(JUnit4.class)就是指用JUnit4来运行
- @RunWith(SpringJUnit4ClassRunner.class),让测试运行于Spring测试环境
- @RunWith(Suite.class)的话就是一套测试集合

@ComponentScan 按照默认规则，它会以配置类所在的包作为基础包（base package）来扫描组件
- 通过@ComponentScan的value属性指明包的名称 eg:@ComponentScan("com.base")
- 通过basePackages属性进行配置,可以指定多个 eg:@ComponentScan(basePackages = "com.base")、@ComponentScan(basePackages = {"com.base","com.biz"})
- 指定为包中所包含的类或接口,这些类所在的包将会作为组件扫描的基础包，一样可以指定多个 eg:@ComponentScan(basePackageClasses = Demo.class)

#### 2.3 通过Java代码装配bean
- @Configuration注解表明这个类是一个配置类
- 声明简单的bean
- 借助JavaConfig实现注入

#### 2.4　通过XML装配bean
- bean元素,类似于JavaConfig中的@Bean注解
- 借助构造器注入初始化bean
    - <constructor-arg 元素
    - 使用Spring 3.0所引入的c-命名空间
### 三、高级装配
#### 3.1 环境与profile
##### 3.1.1配置profile bean
- 在Java配置中，可以使用@Profile注解指定某个bean属于哪一个profile，它会告诉Spring这个配置类中的
bean只有在dev profile激活时才会创建。
- 在XML中配置profile：通过<beans>元素的profile属性，在XML中配置profile bean。
##### 3.1.2激活profile
Spring在确定哪个profile处于激活状态时，需要依赖两个独立的属
性：spring.profiles.active和spring.profiles.default。如果设置了
spring.profiles.active属性的话，那么它的值就会用来确定哪个profile是激活的。但
如果没有设置spring.profiles.active属性的话，那Spring将会查
找spring.profiles.default的值。如果spring.profiles.active和
spring.profiles.default均没有设置的话，那就没有激活的profile，因此只会创建那
些没有定义在profile中的bean。
- 有多种方式来设置这两个属性：
    - 作为DispatcherServlet的初始化参数；
    - 作为Web应用的上下文参数；
    - 作为JNDI条目；
    - 作为环境变量；
    - 作为JVM的系统属性；
    - 在集成测试类上，使用@ActiveProfiles注解设置。
- Spring提供了@ActiveProfiles注解，我们可以使用它来指定运行测试时要激活哪个profile
#### 3.2　条件化的bean
#### 3.3　处理自动装配的歧义性
- 标示首选的bean:通过@Primary来表达最喜欢的方案，@Primary能够与@Component组合用在组件扫描的bean上，
- 限定自动装配的bean，@Qualifier注解是使用限定符的主要方式，@Qualifier("iceCream")