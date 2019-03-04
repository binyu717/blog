## 基于 Docker 搭建 MySQL 主从复制   
>MySQL之间数据复制的基础是二进制日志文件（binary log file）。一台MySQL数据库一旦启用二进制日志后，其作为master，它的数据库中所有操作都会以“事件”的方式记录在二进制日志中，其他数据库作为slave通过一个I/O线程与主服务器保持通信，并监控master的二进制日志文件的变化，如果发现master二进制日志文件发生变化，则会把变化复制到自己的中继日志中，然后slave的一个SQL线程会把相关的“事件”执行到自己的数据库中，以此实现从数据库和主数据库的一致性，也就实现了主从复制
- 拉取镜像 
    > docker pull mysql   
- 启动容器    
    > docker run -itd -p 3307:3306 --name master -v /home/yubin/mysqldata/master/cnf:/etc/mysql/conf.d -v /home/yubin/mysqldata/master/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root mysql    
    > docker run -itd -p 3308:3306 --name slave -v /home/yubin/mysqldata/slave/cnf:/etc/mysql/conf.d -v /home/yubin/mysqldata/slave/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root mysql      
    - -name 为设置容器的名字，我设置为master
    - -p 端口映射    
    - -e 为设置执行时的环境变量，在这里我设置mysql的root密码       
    - -d 为后台运行
    - -v 挂载目录到宿主机   

- 进入容器   
    >  docker exec -it master bin/bash    
- 创建用户
    > create user 'slave'@'172.25.50.52' identified by 'slave'
- 授权 (grant 权限 on 数据库对象 to 用户)
    > grant replication slave on *.* to 'slave'@'172.25.50.52';
- 刷新权限
    > flush privileges; 


## Docker搭建redis,并部署到项目中
- 搜索redis镜像，docker search redis
- 拉取镜像 docker pull redis
- 创建目录和配置文件redis.conf
- redis.conf 内容从官网下载，按需配置
    - daemonize no#用守护线程的方式启动
    - requirepass yourpassword#给redis设置密码
    - bind 192.168.1.1 #注释掉这部分，这是限制redis只能本地访问
    - appendonly yes#redis持久化
- docker run --privileged=true -p 6379:6379 --name clota-redis -v $PWD/data:/data -v $PWD/redis.conf:/etc/redis/redis.conf -d redis  redis-server /etc/redis/redis.conf --appendonly yes
- 参数说明：   
    - --privileged=true：容器内的root拥有真正root权限，否则容器内root只是外部普通用户权限
    - -p 6379:6379 : 将容器的6379端口映射到主机的6379端口   
    - -v $PWD/data:/data : 将主机中当前目录下的data挂载到容器的/data 
    - -v $PWD/redis.conf:/etc/redis/redis.conf 映射配置文件  
    - -d 后台运行
    - redis-server /etc/redis/redis.conf --appendonly yes : 指定配置文件启动redis-server进程，并打开redis持久化配置  
    - --requirepass "mypassword"  可以设置连接密码
- 增加redis依赖
```xml
        <!-- Redis客户端jedis依赖 -->
        <dependency>
            <groupId>redis.clients</groupId>
            <artifactId>jedis</artifactId>
            <version>2.9.0</version>
        </dependency>

        <!-- spring-data-redis依赖 -->
        <dependency>
            <groupId>org.springframework.data</groupId>
            <artifactId>spring-data-redis</artifactId>
            <version>2.1.1.RELEASE</version>
        </dependency>
```
- 配置文件 
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans-4.1.xsd">
    <!-- **************************************************redis********************************************************** -->
    <!-- 配置 JedisPoolConfig 实例 -->
    <bean id="poolConfig" class="redis.clients.jedis.JedisPoolConfig">
        <property name="maxIdle" value="${redis.maxIdle}"/>
        <property name="maxTotal" value="${redis.maxActive}"/>
        <property name="maxWaitMillis" value="${redis.maxWait}"/>
        <property name="testOnBorrow" value="${redis.testOnBorrow}"/>
    </bean>

    <!--redis链接密码-->
    <bean id="redisPassword" class="org.springframework.data.redis.connection.RedisPassword">
        <constructor-arg name="thePassword" value="${redis.pass}"></constructor-arg>
    </bean>

    <bean id="redisStandaloneConfiguration" class="org.springframework.data.redis.connection.RedisStandaloneConfiguration">
        <property name="hostName" value="${redis.host}"/>
        <property name="port" value="${redis.port}"/>
        <property name="password" ref="redisPassword" />
        <property name="database" value="${redis.dbIndex}"/>
    </bean>

    <!-- 配置JedisConnectionFactory -->
    <bean id="jedisConnectionFactory" class="org.springframework.data.redis.connection.jedis.JedisConnectionFactory">
        <!--spring-data-redis2.0以上建议获取的方式-->
        <constructor-arg name="standaloneConfig" ref="redisStandaloneConfiguration"></constructor-arg>
    </bean>
    <!-- 配置RedisTemplate -->
    <bean id="redisTemplate" class="org.springframework.data.redis.core.RedisTemplate">
        <property name="connectionFactory" ref="jedisConnectionFactory"/>
        <property name="keySerializer">
            <bean class="org.springframework.data.redis.serializer.StringRedisSerializer" />
        </property>
        <property name="valueSerializer">
            <bean class="org.springframework.data.redis.serializer.StringRedisSerializer" />
        </property>
    </bean>


</beans>
```

 