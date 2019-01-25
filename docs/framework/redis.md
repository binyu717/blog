## SDR支持的序列化策略：
- JdkSerializationRedisSerializer：
- StringRedisSerializer：
- JacksonJsonRedisSerializer：
- OxmSerializer：   
其中JdkSerializationRedisSerializer和StringRedisSerializer是最基础的序列化策略，其中“JacksonJsonRedisSerializer”与“OxmSerializer”都是基于stirng存储，因此它们是较为“高级”的序列化(最终还是使用string解析以及构建java对象)。       
基本推荐使用JdkSerializationRedisSerializer和StringRedisSerializer，因为其他两个序列化策略使用起来配置很麻烦，如果实在有需要序列化成Json和XML格式，可以使用java代码将String转化成相应的Json和XML。
### 关于RedisTemplate和StringRedisTemplate
- 两者的关系是StringRedisTemplate继承RedisTemplate。
- 两者的数据是不共通的；也就是说StringRedisTemplate只能管理StringRedisTemplate里面的数据，RedisTemplate只能管理RedisTemplate中的数据。
- StringRedisTemplate默认采用的是String的序列化策略，保存的key和value都是采用此策略序列化保存的。
- RedisTemplate默认采用的是JDK的序列化策略，保存的key和value都是采用此策略序列化保存的。
- 使用StringRedisTemplate先把对象json化，RedisTemplate则直接转换实体对象

[https://www.cnblogs.com/VitoYi/p/8726070.html](https://www.cnblogs.com/VitoYi/p/8726070.html)