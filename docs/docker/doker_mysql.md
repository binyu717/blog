## 基于 Docker 搭建 MySQL 主从复制   
docker pull mysql
 docker run -itd -p 3307:3306 --name master -v /home/yubin/mysqldata/master/cnf:/etc/mysql/conf.d -v /home/yubin/mysqldata/master/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root mysql   
—name 为设置容器的名字，我设置为master
-p 端口映射    
-e 为设置执行时的环境变量，在这里我设置mysql的root密码       
-d 为设置镜像，镜像名:版本     
-v 挂载目录到宿主机  

 GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'masterpwd' WITH GRANT OPTION;