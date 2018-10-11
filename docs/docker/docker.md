## 参考
[Docker — 从入门到实践](https://yeasy.gitbooks.io/docker_practice/content/)   
## 安装docker
### Docker 分为 CE 和 EE 两大版本。CE 即社区版（免费，支持周期 7 个月），EE 即企业版，强调安全，付费使用，支持周期 24 个月。
- Ubuntu 操作系统
- 使用 APT 安装
    > $ sudo apt-get update   
    > $ sudo apt-get install docker-ce
- 使用脚本自动安装
    > $ curl -fsSL get.docker.com -o get-docker.sh  
    > $ sudo sh get-docker.sh --mirror Aliyun
- 启动 Docker CE
    > $ sudo systemctl enable docker
    > $ sudo systemctl start docker
- 建立 docker 用户组
    - 建立 docker 组：
        > $ sudo groupadd docker
    - 将当前用户加入 docker 组：
        > $ sudo usermod -aG docker $USER

## 基本命令
- 查看docker版本
    >docker version   
    一般用 docker -v 显示少量信息
- 搜索镜像
    >docker search [tomcat]
- 拉取镜像
    >docker pull tomcat:latest     
    latest是一个标签（tag），表示是当前最新版本
- 查看你自己的本地镜像
    > docker images  等同于 docker image ls
- 查看镜像、容器、数据卷所占用的空间。
- 删除本地的镜像
> docker image rm [选项] <镜像1> [<镜像2> ...]   
    > docker system df
- commit
- 查看所有容器：
    >docker ps -a
- 查看当前正在运行的容器：
    >docker ps
- 运行容器，以tomcat为例
    - 以后台守护进程的方式启动 [可选]
    >docker run [--name containName] -d tomcat:latest
    - 以交互的方式运行,-it：这是两个参数，一个是 -i：交互式操作，一个是 -t 终端,--rm：这个参数是说容器退出后随之将其删除。默认情况下，为了排障需求，退出的容器并不会立即删除，除非手动 docker rm,指定容器和主机的映射端口(前一个8080是指我们访问tomcat时的端口号，后一个8080是tomcat启动的一个容器在docker中运行的端口号)
    >docker run -it -rm -p 8080:8080 tomcat:latest /bin/bash   
- 启动、停止、重启、删除容器的命令
    >docker start container_name/container_id      
    >docker stop container_name/container_id    
    >docker restart container_name/container_id  
    >docker rm container_name/container_id
- 进入容器 
    >  docker exec -it container_name/container_id bash
    > docker exec -it container_name/container_id /bin/bash 
- 复制文件到容器中
    > docker cp src_path container:dest_path
- 保存镜像
    > docker commit [选项] <容器ID或容器名> [<仓库名>[:<标签>]]
- 实时查看docker容器日志
    > docker logs -f --tail 行数 容器名  
    -f : 查看实时日志  
    -t : 查看日志产生的日期