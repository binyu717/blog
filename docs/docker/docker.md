## 推荐
- [Docker — 从入门到实践](https://yeasy.gitbooks.io/docker_practice/content/)     
- [使用 Docker 搭建 Java Web 运行环境](https://mp.weixin.qq.com/s/N_EAb776No1ATBdL4XQg-A)

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
    将容器目录挂载到机器上
    >docker run --name docker-nane -d -v /root/opt/web/webapps/:/usr/local/tomcat/webapps/  -p 8086:8080 tomcat:8.5.32-jre8
- 启动、停止、重启、删除容器的命令
    >docker start container_name/container_id      
    >docker stop container_name/container_id    
    >docker restart container_name/container_id  
    >docker rm container_name/container_id
- 进入容器 
    > docker exec -it container_name/container_id bash    
    > docker exec -it container_name/container_id /bin/bash 
- 复制文件到容器中
    > docker cp src_path container:dest_path
- 保存镜像
    > docker commit [选项] <容器ID或容器名> [<仓库名>[:<标签>]]
- 实时查看docker容器日志
    > docker logs -f --tail 行数 容器名  
    -f : 查看实时日志  
    -t : 查看日志产生的日期
 
## dockerfile详解
### Dockerfile介绍
- Dockerfile是一个包含用于组合映像的命令的文本文档，其内包含了一条条的指令(Instruction)，每一条指令构建一层，因此每一条指令的内容，就是描述该层应当如何构建。
- Dockerfile 一般分为四部分：基础镜像信息、维护者信息、镜像操作指令和容器启动时执行指令
- Docker以从上到下的顺序运行Dockerfile的指令。为了指定基本映像，第一条指令必须是FROM。一个声明以＃字符开头则被视为注释。可以在Docker文件中使用RUN，CMD，FROM，EXPOSE，ENV等指令。
### 常用指令
- FROM：指定基础镜像，必须为第一个命令。Docker 还存在一个特殊的镜像，名为 scratch。这个镜像是虚拟的概念，并不实际存在，它表示一个空白的镜像。
- RUN： 执行命令，其格式有两种：
    - shell 格式：RUN <命令>，就像直接在命令行中输入的命令一样。刚才写的 Dockerfile 中的 RUN 指令就是这种格式。
    - exec 格式：RUN ["可执行文件", "参数1", "参数2"]，这更像是函数调用中的格式。