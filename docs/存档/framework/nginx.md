
## 推荐
 - [nginx中文文档](http://www.nginx.cn/doc/)     
 - [超详细 Nginx 极简教程](https://mp.weixin.qq.com/s/L32QRHYw9FiDJ41L0nGdTw)
 - [超详细Nginx简易教程，一学就会！](https://www.cnblogs.com/jingmoxukong/p/5945200.html)
## 配置文件详解
### 文件大致结构：
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
### main部分
```xml
    # 配置用户
    #user  nobody; 

    # 允许生成的进程数，默认为1
    worker_processes  1;

    # 指定全局日志路径，级别，级别有debug|info|notice|warn|error|crit|alert|emerg
    #error_log  logs/error.log;
    #error_log  logs/notice.log  notice;
    #error_log  logs/info.log  info;

    # PID文件,指定nginx进程运行文件存放地址,记录当前启动的nginx的进程ID
    #pid        logs/nginx.pid;
```
### event部分

```xml
    # 工作模式及连接数上限
    events {
     # 定义每个worker进程最大并发连接数
        worker_connections  1024;                      
    }
```
### http部分
- 在server段外定义的配置，对所有server生效。
- server_name    指定虚拟主机名。相当于httpd虚拟主机段中的ServerName   
    > 主机名可以通过精确主机名、左侧使用通配、右侧使用通配、正则表达式匹配来确定	
- index index.html 首页   
- root 指定页面文件根目录
- listen 指定监听的地址、端口
    > default_server 设置默认虚拟主机，即当没有虚拟主机符合请求时，使用默认虚拟主机响应   
    > rcvbuf=SIZE 接收缓冲区大小   
    > sndbuf=SIZE 发送缓冲区大小    
    > ssl 限制仅能通过ssl连接进行服务，即提供https服务。这时监听的端口应指定为443     
- location
    ```xml
        location = / {                        # 仅当URI为"/"时,使用
            root D:java/web;
             expires 30d;                     # 过期30天，
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

        location ~* \.(gif|jpg|jpeg)$ {      # URI结尾是gif、jpg或jpeg时，使用E配置
            [ configuration E ]
        }
       location ~ /.ht {                     # 禁止访问 .htxxx 文件
           deny all;
       }
    ```
- 错误处理页面（可选择性配置）
```xml
    #error_page   404              /404.html;
    #error_page   500 502 503 504  /50x.html;
    #location = /50x.html {
    #    root   html;
    #}
```
## 常用命令
- nginx -s stop ：快速关闭Nginx，可能不保存相关信息，并迅速终止web服务。
- nginx -s quit ：平稳关闭Nginx，保存相关信息，有安排的结束web服务。
- nginx -s reload ：因改变了Nginx相关配置，需要重新加载配置而重载。
- nginx -s reopen ：重新打开日志文件。 
- nginx -c filename ：为 Nginx 指定一个配置文件，来代替缺省的。
- nginx -t ：不运行，而仅仅测试配置文件。nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件。
- nginx -v：显示 nginx 的版本。 
- nginx -V：显示 nginx 的版本，编译器版本和配置参数。
 
## 应用实例
### HTTP服务器
- Nginx本身也是一个静态资源的服务器，可以通过Nginx来实现动静分离   
    配置样例：
    ```xml
             upstream test{  
                server localhost:8080;  
                server localhost:8081;  
            }
            server {  
                listen   80;  
                server_name  localhost;  
                location / {  
                    root   /usr/share/nginx/html;  
                    index  index.html;  
                }  
                
                # 所有静态请求都由nginx处理，存放目录为html  
                location ~ .(gif|jpg|jpeg|png|bmp|swf|css|js)$ {  
                    root /usr/share/nginx/html; # 静态文件路径  
                }  
            
                # 所有动态请求都转发给tomcat处理  
                location ~ .(jsp|do)$ {  
                    proxy_pass  http://test;  
                }  

                error_page   500 502 503 504 /50x.html;  
                location = /50x.html {  
                    root   /usr/share/nginx/html;  
                }  
            } 
            
    ```

### 反向代理服务器
- 反向代理（Reverse Proxy）方式是指以代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。   
    配置样例：    
     ``` xml
            server{
                    listen 80; # 端口号
                    server_name  localhost;                                               
                    client_max_body_size 1024M;
                    location /{
                        proxy_pass http://localhost:8080;# 应用服务器http地址
                    }
            }
     ```

### 负载均衡 
-   Nginx可以通过反向代理将用户的请求分配给多台机器处理，来实现负载均衡。Nginx目前支持自带3种负载均衡策略,例外还有fair、url_hash第三方策略
      配置样例：
    > 1、RR（默认）
    ```xml
            upstream test {
                server localhost:8080;
                server localhost:8081;
            }
    ```
    >2、权重
    ``` xml
            upstream myweb{
                # #weigth参数表示权值，权值越高被分配到的几率越大
                server 172.25.25.1:8080 weight=9;
                server 172.25.25.2:8080 weight=1;
            }
            server{
                    listen 80; # 端口号
                    location /{
                        proxy_pass http://myweb; # 应用服务器http地址
                    }
            }
    ```   
    >3、ip_hash iphash的每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。
    ``` xml
          upstream myweb{
                ip_hash;
                server 172.25.25.1:8080 weight=9;
                server 172.25.25.2:8080 weight=1;
            }
    ```

### 虚拟主机
-   多个网站部署在同一台服务器上时,两个域名解析到同一个IP地址，但是用户通过两个域名却可以打开两个完全不同的网站。   
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

