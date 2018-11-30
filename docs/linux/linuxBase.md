## 常用命令
- 查看文件
> ll  显示当前目录下文件详细信息。 
> ls 显示当前目录下文件名。

- 文件操作
> touch 文件夹 or 文件 创建一个空的文件/文件夹
> mkdir 文件夹 创建一个文件夹

- 查找文件
> ls -l grep 'jar' 查找当前目录下的所有jar文件
> find / -name filename 从 '/' 开始进入根文件系统搜索文件和目录
> find / -user username 搜索属于用户username的文件和目录
> find / -name *.xml 在目录 / 中搜索带有'.xml' 结尾的文件

- 查看进程 ps process status (进程状态)
> ps -auxf 显示进程状态
> ps -a 显示所有进程 
> ps -ef | grep java 表示查看所有进程里 CMD 是 java 的进程信息 
    - linux下通过进程名查看其占用端口
        > ps -ef | grep 进程名  (先查看进程pid)   
        > netstat -nap | grep 进程pid  (通过pid查看占用端口)

- kill -s 9 进程号
- 查看端口信息
> nmap 127.0.0.1 查看本机所有开放的端口

- 内存信息
> free -m  单位为Mb查看内存信息
> top     任务管理器
USER    进程所有者
PR  优先级
NI  nice值，负值表示高优先级，正值表示低优先级
VIRT    进程使用的虚拟内存总量
RES 进程使用的、未被换出的物理内存大小
SHR 共享内存大小
S   进程状态
%CPU    上次更新到现在的CPU时间占用百分比
%MEM    进程使用的物理内存百分比
TIME+   进程使用CPU总时间
COMMAND 命令名、命令行

- 磁盘空间
> df -h 显示已经挂载的分区列表 （disk free）
> du: Disk usage
- 查看文件
> tail -f catalina.out 
> grep -C 20 'XXXX' catalina.out  上下文20行
> grep -i  'XXXX' catalina.out  精确行
   - 输出日志到指定文件
    touch test.log  当前目录创建一个用来存放数据的文件 test.log， 
    tail -n catalina.out > test.log  将catalina.out文件的最后n行输出到test.log中 
      