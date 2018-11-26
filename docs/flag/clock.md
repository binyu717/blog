# 打卡：每日学习:

## 20181126：[【nginx】Nginx基本功能极速入门](https://mp.weixin.qq.com/s/h9sXZc4Y62f4KOSVXAB1Pg)
### [nginx中文文档](http://www.nginx.cn/doc/)
### 配置文件详解
#### 文件大致结构：
        ```xml
            【main部分】

        events｛
            【events部分】
        ｝

        http｛
              server｛
                【server1配置】
             ｝

            server｛
                【server2配置】
            ｝
        ｝
        ```
    - 
#### main部分
```xml
    # 配置用户
    #user  nobody; 

    # 允许生成的进程数，默认为1
    worker_processes  1;

    # 制定日志路径，级别，级别有debug|info|notice|warn|error|crit|alert|emerg
    #error_log  logs/error.log;
    #error_log  logs/error.log  notice;
    #error_log  logs/error.log  info;

    # #指定nginx进程运行文件存放地址
    #pid        logs/nginx.pid;
```
#### event部分
```xml
    events {
     # 定义每个worker进程最大并发连接数
        worker_connections  1024;                      
    }
```
#### http部分
- 在server段外定义的配置，对所有server生效。
- server_name    指定虚拟主机名。相当于httpd虚拟主机段中的ServerName
    > 主机名可以通过精确主机名、左侧使用通配、右侧使用通配、正则表达式匹配来确定	
- root 指定页面文件根目录
- listen 指定监听的地址、端口
    > default_server 设置默认虚拟主机，即当没有虚拟主机符合请求时，使用默认虚拟主机响应
    > rcvbuf=SIZE 接收缓冲区大小
    > sndbuf=SIZE 发送缓冲区大小
    > ssl 限制仅能通过ssl连接进行服务，即提供https服务。这时监听的端口应指定为443
- location
    ```xml
        location = / {                        # 仅当URI为"/"时，使用A配置
             [ configuration A ]
        }

        location / {                          # URI为"/"下包含的路径时，使用B配置
            [ configuration B ]
        }

        location /documents/ {                # URI为"/documents/"下包含的路径时，使用C配置
            [ configuration C ]
        }

        location ^~ /images/ {               # URI靠前部分为"/images/"，使用D配置
            [ configuration D ]
        }

        location ~* \.(gif|jpg|jpeg)$ {         # URI结尾是gif、jpg或jpeg时，使用E配置
            [ configuration E ]
        }
    ```
### 静态HTTP服务器

    配置样例：
        ```xml
        server{
                listen 80; # 端口号
                location /{
                    root /usr/share/nginx/html; # 静态文件路径
                }
        }
        ```

### 反向代理服务器
    客户端请求Nginx，Nginx请求应用服务器，然后将结果返回给客户端。
    配置样例：    
        ``` xml
            server{
                    listen 80; # 端口号
                    location /{
                        proxy_pass http://172.25.25.50:8080;# 应用服务器http地址
                    }
            }
        ```

### 负载均衡
    Nginx可以通过反向代理将用户的请求分配给多台机器处理，来实现负载均衡。  配置样例：
        ``` xml
            upstream myweb{
                server 172.25.25.1:8080 weight=3 ;
                server 172.25.25.2:8080;
            }
            server{
                    listen 80; # 端口号
                    location /{
                        proxy_pass http://myweb; # 应用服务器http地址
                    }
            }
        ```   

### 虚拟主机
     多个网站部署在同一台服务器上时,两个域名解析到同一个IP地址，但是用户通过两个域名却可以打开两个完全不同的网站。
     配置样例：
        ``` xml
        server{
                    listen 80 default_server; # 端口号
                    server_name _;
                    return 444; # 过滤其他域名请求，返回444状态码(过滤有人恶意将某些域名指向你的主机服务器)
            }
        server{
                listen 80 ; # 端口号
                server_name www.aaa.com 
                location /{
                    proxy_pass http://localhost:8080; # 对应端口号
                }
        }
        server{
                listen 80 ; # 端口号
                server_name www.bbb.com 
                location /{
                    proxy_pass http://localhost:8081; # 对应端口号
                }
        }
        ```   

