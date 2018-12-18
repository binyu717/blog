## 基于 Docker 搭建 MySQL 主从复制   
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
    >  docker exec -it contaninName bin/bash    
 GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'masterpwd' WITH GRANT OPTION;