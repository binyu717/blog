## windows 端口占用
### 1、查看所有端口使用情况
netstat -ano

### 2、查看指定端口占用情况
netstat -ano|findstr "5037"

### 3、杀死进程
taskkill -f -pid 22144