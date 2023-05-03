<!-- ## 安装Docker
### 环境准备
#### 打开Windows的 Hyper-V功能
- 依次选择 控制面板->程序-> 启动或关闭Windows功能，然后勾选Hyper-V选项
#### 或者打开windows的linux子系统
- 依次选择 控制面板->程序-> 启动或关闭Windows功能，然后勾选 适用于Linux的windows子系统功能 以及 启用虚拟机平台 选项
- 安装wsl2 [官网](https://docs.microsoft.com/zh-cn/windows/wsl/about)
- 下载linux发行包，安装
- 设置wsl2为默认版本   wsl --set-default-version 2

### 安装windows版docker
- [官网下载安装docker desktop for windows版](https://www.docker.com/)
- 启动Docker Desktop,setting->General下勾选Use the WSL 2 based engine
![avatar](../.vuepress/public/resource/docker_setting1.png)
- 申请[阿里云镜像地址](https://cr.console.aliyun.com/)，setting->Docker Engine,补充镜像源地址


## docker 应用搭建
### mysql
> docker pull mysql 
> docker run -p 3306:3306 --name MySQL -e MYSQL_ROOT_PASSWORD=root -d mysql:latest --character-set-server=utf8mb4 --collation-server=utf8mb4_general_ci

### redis
> docker run -itd --name redis -p 6379:6379 redis -->