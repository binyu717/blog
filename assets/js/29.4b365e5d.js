(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{414:function(t,s,a){"use strict";a.r(s);var n=a(54),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"getresourceasstream-了解一下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getresourceasstream-了解一下"}},[t._v("#")]),t._v(" getResourceAsStream()了解一下")]),t._v(" "),a("ul",[a("li",[t._v("this.getClass().getResourceAsStream()"),a("br"),t._v("\npath 不以’/'开头时默认是从此类所在的包下取资源，以’/'开头则是从ClassPath根下获取。其只是通过path构造一个绝对路径，最终还是由ClassLoader获取资源。")]),t._v(" "),a("li",[t._v("this.getClass().getClassLoader().getResourceAsStream()"),a("br"),t._v("\n默认则是从ClassPath根下获取，path不能以’/'开头，最终是由ClassLoader获取资源。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InputStream")]),t._v(" is "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResourceAsStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Properties")]),t._v(" prop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Properties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("is"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这样就可以获取文件中的数据了")]),t._v("\n    prop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v('"key'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("ClassPath根路径：war包下WEB-INF/目录；不过存放在resources目录下的文件都会打包到WEB-INF下的目录")]),t._v(" "),a("h3",{attrs:{id:"simplepropertyprefilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simplepropertyprefilter"}},[t._v("#")]),t._v(" SimplePropertyPreFilter")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构造过滤器 定义需要的字段类型")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimplePropertyPreFilter")]),t._v(" filter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SimplePropertyPreFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RoleModel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象转jsonString")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JSONObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toJSONString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("roleModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("filter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"column-注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#column-注解"}},[t._v("#")]),t._v(" @Column 注解")]),t._v(" "),a("h3",{attrs:{id:"跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[t._v("#")]),t._v(" 跨域")]),t._v(" "),a("p",[t._v("跨域：指的是浏览器不能执行其他网站的脚本。它是由浏览器的同源策略造成的，是浏览器对javascript施加的安全限制。\n同源策略：是指协议，域名，端口都要相同，其中有一个不同都会产生跨域；")]),t._v(" "),a("h3",{attrs:{id:"transactional-踩坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactional-踩坑"}},[t._v("#")]),t._v(" @Transactional 踩坑")]),t._v(" "),a("ul",[a("li",[t._v("默认的事务规则是遇到运行异常（RuntimeException）和程序错误（Error）才会回滚，（手动抛出的Exception异常默认不会回滚），切记在 @Transactional 注解中使用 rollbackFor 属性来指定异常。")]),t._v(" "),a("li",[t._v("tycatch掉异常，不会回滚")]),t._v(" "),a("li",[t._v("AOP默认采用Java JDK的proxy方式，即JdkDynamicAopProxy方法，所以只能对于继承自接口的方法实现代理。")]),t._v(" "),a("li",[t._v("@Transactional注解只有外部方法调用才会起作用，同一个类内的方法调用是不起作用的，属于self=invocation。因此，@Transactional只能作用于public方法上面")])]),t._v(" "),a("h3",{attrs:{id:"多线程sleep和wait的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多线程sleep和wait的区别"}},[t._v("#")]),t._v(" 多线程sleep和wait的区别")]),t._v(" "),a("ul",[a("li",[t._v("使用上,sleep是Thread线程类的方法，而wait是Object顶级类的方法。sleep可以在任何地方使用，wait只能在同步方法   者同步块中使用。")]),t._v(" "),a("li",[t._v("CPU及资源锁释放上，sleep,wait调用后都会暂停当前线程并让出cpu的执行时间，但不同的是sleep不会放当前持有的对   的锁资源，到时间后会继续执行，而wait会放弃所有锁并需要notify/notifyAll后重新取到对象锁资源后才能继续执行。")]),t._v(" "),a("li",[t._v("异常捕获上，sleep需要捕获或者抛出异常，而wait/notify/notifyAll不需要。")])]),t._v(" "),a("h3",{attrs:{id:"etc-crontab-及-var-spool-cron-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#etc-crontab-及-var-spool-cron-user"}},[t._v("#")]),t._v(" /etc/crontab 及 /var/spool/cron/$USER")]),t._v(" "),a("ul",[a("li",[t._v("定时任务：在linux中主要有2个地方体现，一个是/etc/crontab ,另一个就是定义了任务计划的用户/var/spool/cron/$USER")]),t._v(" "),a("li",[t._v("/etc/crontab 只有root用户可以使用，使用时需root权限，而且必须指定运行用户，才会执行")]),t._v(" "),a("li",[t._v("/var/spool/cron/$USER 所有用户都可以使用，可以使用crontab -u username -e命令来直接编辑这个文件。")]),t._v(" "),a("li",[t._v("/var/log/cron.log  cron运行日志位置")]),t._v(" "),a("li",[t._v("格式：m h dom mon dow command\n"),a("ul",[a("li",[t._v("m:分钟，0-59")]),t._v(" "),a("li",[t._v("h:小时，0-23")]),t._v(" "),a("li",[t._v("dom:日期，1-31")]),t._v(" "),a("li",[t._v("mon:月份，1-12")]),t._v(" "),a("li",[t._v("dow:星期，0-6，0为星期天")]),t._v(" "),a("li",[t._v("command:命令")])])])]),t._v(" "),a("h3",{attrs:{id:"java序列化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java序列化"}},[t._v("#")]),t._v(" JAVA序列化")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.ibm.com/developerworks/cn/java/j-lo-serial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 序列化的高级认识"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"数据库时间正常-接口返回时间慢8小时问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库时间正常-接口返回时间慢8小时问题"}},[t._v("#")]),t._v(" 数据库时间正常，接口返回时间慢8小时问题")]),t._v(" "),a("ul",[a("li",[t._v('bin/catalina.sh 文件首行加上 JAVA_OPTS="-Duser.timezone=GMT+08"')])]),t._v(" "),a("h3",{attrs:{id:"java反射获取对象成员属性-getfields-与getdeclaredfields-方法的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java反射获取对象成员属性-getfields-与getdeclaredfields-方法的区别"}},[t._v("#")]),t._v(" Java反射获取对象成员属性，getFields()与getDeclaredFields()方法的区别")]),t._v(" "),a("ul",[a("li",[t._v("getFields()  获取某个类的所有的public字段，其中是包括父类的public字段的。")]),t._v(" "),a("li",[t._v("getDeclaredFields()：获取某个类的自身的所有字段，不包括父类的字段。对于私有的成员变量来说，要操作其属性值的话，就需要设置setAccessible(true);")]),t._v(" "),a("li",[t._v("so，若要获取父类的所有字段，则通过this.getClass().getSupperClass().getDeclaredFields()")])]),t._v(" "),a("h3",{attrs:{id:"springboot使用enablewebmvc无法加载静态页面的问题解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot使用enablewebmvc无法加载静态页面的问题解决"}},[t._v("#")]),t._v(" SpringBoot使用EnableWebMvc无法加载静态页面的问题解决")]),t._v(" "),a("ul",[a("li",[t._v("事情缘由：项目新增一个解决Long类型数据json序列化时丢失精度config，类上注解@EnableWebMvc、@Configuration，启动发现swagger的页面无法访问了。")]),t._v(" "),a("li",[t._v("那加EnableWebMvc与不加的区别到底在哪？\n"),a("ul",[a("li",[t._v("当使用EnableWebMvc时，加载的是WebMvcConfigurationSupport中的配置项。")]),t._v(" "),a("li",[t._v("当不使用EnableWebMvc时，使用的是WebMvcAutoConfiguration引入的配置项。")])])]),t._v(" "),a("li",[t._v("注意说明\n"),a("ul",[a("li",[t._v("Spring Boot 默认提供Spring MVC 自动配置，不需要使用@EnableWebMvc注解")]),t._v(" "),a("li",[t._v("如果需要配置MVC（拦截器、格式化、视图等） 请使用添加@Configuration并实现WebMvcConfigurer接口，或是继承WebMvcConfigurationSupport类，不要添加@EnableWebMvc注解。")]),t._v(" "),a("li",[t._v("@EnableWebMvc 只能添加到一个@Configuration配置类上，用于导入Spring Web MVC configuration")])])]),t._v(" "),a("li",[t._v("解决方法\n"),a("ul",[a("li",[t._v("继承WebMvcConfigurationSupport类，添加@Configuration，重写configureMessageConverters解决Long精度问题")])])])]),t._v(" "),a("h3",{attrs:{id:"mapstruct编译报-ambiguous-mapping-methods-found-for-mapping-collection-element"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapstruct编译报-ambiguous-mapping-methods-found-for-mapping-collection-element"}},[t._v("#")]),t._v(" mapstruct编译报 Ambiguous mapping methods found for mapping collection element")]),t._v(" "),a("ul",[a("li",[t._v("业务需求需要自定义转化方法，代码如下：")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Mapper")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("componentModel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spring"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyConvertor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyVO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dtoToVO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyDTO")]),t._v(" myDTO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyVO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dtosToVOS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyDTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" myDTOList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyVO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dtoToDetailVO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyDTO")]),t._v(" myDTO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyVO")]),t._v(" myVO "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dtoToVO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myDTO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        ···自定义逻辑···\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" myVO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v('在编译时，会重写dtoToVO、dtosToVOS方法；dtoToDetailVO已在抽象类实现；而mapstruct在重写集合之间转化时，实际是循环调用一对一转化方法；而此时通过入参和出参会发现存在两个方法；因此会报"Ambiguous mapping methods"；')]),t._v(" "),a("li",[t._v("解决方法：自己去实现集合转化方法")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyVO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dtosToVOS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyDTO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" myDTOList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" myDTOList "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyVO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" myDTOList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyDTO")]),t._v(" myDTO "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" myDTOList "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dtoToVO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" myDTO "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"springboot-时间格式转换问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot-时间格式转换问题"}},[t._v("#")]),t._v(" springBoot 时间格式转换问题")]),t._v(" "),a("ul",[a("li",[t._v("@RequestBody 修饰，DATE类型会json序列转化，jackson默认 yyyy-MM-ddTHH:mm:ss格式 前端需要以该格式传参，\n@DateTimeFormat注解不起作用，可以使用@JsonFormat来指定格式，也可配置统一的序列转换器")]),t._v(" "),a("li",[t._v("@RequertParam 修饰，可以加@DateTimeFormat注解指定DATE接收格式")])]),t._v(" "),a("h3",{attrs:{id:"fastjson-jsonobject-tojsonstring-出现-ref-的解决办法-重复引用-两个属性的值是同一个对象地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fastjson-jsonobject-tojsonstring-出现-ref-的解决办法-重复引用-两个属性的值是同一个对象地址"}},[t._v("#")]),t._v(' fastjson JSONObject.toJSONString 出现 $ref: "$."的解决办法（重复引用：两个属性的值是同一个对象地址）')]),t._v(" "),a("ul",[a("li",[t._v("为了避免StackOverflowError异常，fastjson会对引用进行检测，如果检测到存在重复/循环引用的情况，fastjson默认会以“引用标识”代替同一对象，而非继续循环解析导致StackOverflowError。")]),t._v(" "),a("li",[t._v("解决方法\n"),a("ul",[a("li",[t._v("关闭检查: JSON.toJSONString(object, SerializerFeature.DisableCircularReferenceDetect);")]),t._v(" "),a("li",[t._v("使用Gson")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gson")]),t._v(" gson "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" gson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toJson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("创建新对象 不循环引用")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);