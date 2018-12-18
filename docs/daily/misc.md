
### getResourceAsStream()了解一下
#### this.getClass().getResourceAsStream()
        path 不以’/'开头时默认是从此类所在的包下取资源，以’/'开头则是从ClassPath根下获取。其只是通过path构造一个绝对路径，最终还是由ClassLoader获取资源。 
#### this.getClass().getClassLoader().getResourceAsStream()
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
    ```JAVA
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

### MYSQL之排序查询
- 按编码排序：convert('column' USING 'gbk)   
>     数据库编码              排序   
>     utf8/utf8mb4           按英文字母规则排序 "a,b,c..... "
>     gbk                    按汉字首字母排序 效果如上图   

- 按照指定字段的指定数据进行排序     
    - FILED(coulmn,str1,str2,str3…)   
    字段coulmn按照字符串str1，str2，str3的顺序返回查询到的结果集。如果表中str字段值不存在于str1， str2，str3中的记录，放在结果集最前面返回。     
    eg： SELECT audit_status FROM product order by FIELD(audit_status ,'auditing','enabled','not_enabled','rejected')
    - FIND_IN_SET(str,strlist)   
    str 要查询的字符串   
    strlist 字段名 参数以英文”,”分隔 如 (1,2,6,8)   
    查询字段(strlist)中包含(str)的结果，返回结果为null或记录   
    eg: SELECT audit_status FROM product  ORDER BY FIND_IN_SET(audit_status,'enabled,not_enabled,rejected,auditing')  

### MYSQL之FIND_IN_SET函数   
- 排序（s上述已介绍，不再赘述）
- 当做查询条件,类似LIKE,Find_IN_SET 是精确匹配,like是广泛的模糊匹配。Find_IN_SET查询的结果要小于like查询的结果      
        props存放的是产品的属性,可以为多个，下面sql查询包含2属性的产品    
        eg:SELECT props FROM product WHERE FIND_IN_SET('2', props)
 
      