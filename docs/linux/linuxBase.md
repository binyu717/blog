## 常用命令
- 1、查找文件
> ls -l grep 'jar' 查找当前目录下的所有jar文件
- 2、linux下通过进程名查看其占用端口
    > ps -ef | grep 进程名  (先查看进程pid)   
    > netstat -nap | grep 进程pid  (通过pid查看占用端口)
