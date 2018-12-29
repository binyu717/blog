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
    - -d 为设置镜像，镜像名:版本     
    - -v 挂载目录到宿主机   

- 进入容器   
    >  docker exec -it master bin/bash    
- 创建用户
    > create user 'slave'@'172.25.50.52' identified by 'slave'
- 授权 (grant 权限 on 数据库对象 to 用户)
    > grant replication slave on *.* to 'slave'@'172.25.50.52';
- 刷新权限
    > flush privileges; 