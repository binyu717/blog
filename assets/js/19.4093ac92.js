(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{407:function(n,e,t){"use strict";t.r(e);var a=t(54),r=Object(a.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"推荐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推荐"}},[n._v("#")]),n._v(" 推荐")]),n._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"http://www.nginx.cn/doc/",target:"_blank",rel:"noopener noreferrer"}},[n._v("nginx中文文档"),t("OutboundLink")],1)]),n._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/L32QRHYw9FiDJ41L0nGdTw",target:"_blank",rel:"noopener noreferrer"}},[n._v("超详细 Nginx 极简教程"),t("OutboundLink")],1)]),n._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/jingmoxukong/p/5945200.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("超详细Nginx简易教程，一学就会！"),t("OutboundLink")],1)])]),n._v(" "),t("h2",{attrs:{id:"配置文件详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件详解"}},[n._v("#")]),n._v(" 配置文件详解")]),n._v(" "),t("h3",{attrs:{id:"文件大致结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件大致结构"}},[n._v("#")]),n._v(" 文件大致结构：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[n._v("    ```xml\n        【main部分】\n\n    events｛\n        【events部分】\n    ｝\n\n    http｛\n          server｛\n            【server1配置】\n         ｝\n\n        server｛\n            【server2配置】\n        ｝\n    ｝\n    ```\n- \n")])])]),t("h3",{attrs:{id:"main部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#main部分"}},[n._v("#")]),n._v(" main部分")]),n._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[n._v("    # 配置用户\n    #user  nobody; \n\n    # 允许生成的进程数，默认为1\n    worker_processes  1;\n\n    # 指定全局日志路径，级别，级别有debug|info|notice|warn|error|crit|alert|emerg\n    #error_log  logs/error.log;\n    #error_log  logs/notice.log  notice;\n    #error_log  logs/info.log  info;\n\n    # PID文件,指定nginx进程运行文件存放地址,记录当前启动的nginx的进程ID\n    #pid        logs/nginx.pid;\n")])])]),t("h3",{attrs:{id:"event部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event部分"}},[n._v("#")]),n._v(" event部分")]),n._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[n._v("    # 工作模式及连接数上限\n    events {\n     # 定义每个worker进程最大并发连接数\n        worker_connections  1024;                      \n    }\n")])])]),t("h3",{attrs:{id:"http部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http部分"}},[n._v("#")]),n._v(" http部分")]),n._v(" "),t("ul",[t("li",[n._v("在server段外定义的配置，对所有server生效。")]),n._v(" "),t("li",[n._v("server_name    指定虚拟主机名。相当于httpd虚拟主机段中的ServerName\n"),t("blockquote",[t("p",[n._v("主机名可以通过精确主机名、左侧使用通配、右侧使用通配、正则表达式匹配来确定")])])]),n._v(" "),t("li",[n._v("index index.html 首页")]),n._v(" "),t("li",[n._v("root 指定页面文件根目录")]),n._v(" "),t("li",[n._v("listen 指定监听的地址、端口\n"),t("blockquote",[t("p",[n._v("default_server 设置默认虚拟主机，即当没有虚拟主机符合请求时，使用默认虚拟主机响应"),t("br"),n._v("\nrcvbuf=SIZE 接收缓冲区大小"),t("br"),n._v("\nsndbuf=SIZE 发送缓冲区大小"),t("br"),n._v("\nssl 限制仅能通过ssl连接进行服务，即提供https服务。这时监听的端口应指定为443")])])]),n._v(" "),t("li",[n._v("location"),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[n._v('    location = / {                        # 仅当URI为"/"时,使用\n        root D:java/web;\n         expires 30d;                     # 过期30天，\n    }\n\n    location / {                          # URI为"/"下包含的路径时，使用B配置\n        [ configuration B ]\n    }\n\n    location /documents/ {                # URI为"/documents/"下包含的路径时，使用C配置\n        [ configuration C ]\n    }\n\n    location ^~ /images/ {               # URI靠前部分为"/images/"，使用D配置\n        [ configuration D ]\n    }\n\n    location ~* \\.(gif|jpg|jpeg)$ {      # URI结尾是gif、jpg或jpeg时，使用E配置\n        [ configuration E ]\n    }\n   location ~ /.ht {                     # 禁止访问 .htxxx 文件\n       deny all;\n   }\n')])])])]),n._v(" "),t("li",[n._v("错误处理页面（可选择性配置）")])]),n._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[n._v("    #error_page   404              /404.html;\n    #error_page   500 502 503 504  /50x.html;\n    #location = /50x.html {\n    #    root   html;\n    #}\n")])])]),t("h2",{attrs:{id:"常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[n._v("#")]),n._v(" 常用命令")]),n._v(" "),t("ul",[t("li",[n._v("nginx -s stop ：快速关闭Nginx，可能不保存相关信息，并迅速终止web服务。")]),n._v(" "),t("li",[n._v("nginx -s quit ：平稳关闭Nginx，保存相关信息，有安排的结束web服务。")]),n._v(" "),t("li",[n._v("nginx -s reload ：因改变了Nginx相关配置，需要重新加载配置而重载。")]),n._v(" "),t("li",[n._v("nginx -s reopen ：重新打开日志文件。")]),n._v(" "),t("li",[n._v("nginx -c filename ：为 Nginx 指定一个配置文件，来代替缺省的。")]),n._v(" "),t("li",[n._v("nginx -t ：不运行，而仅仅测试配置文件。nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件。")]),n._v(" "),t("li",[n._v("nginx -v：显示 nginx 的版本。")]),n._v(" "),t("li",[n._v("nginx -V：显示 nginx 的版本，编译器版本和配置参数。")])]),n._v(" "),t("h2",{attrs:{id:"应用实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用实例"}},[n._v("#")]),n._v(" 应用实例")]),n._v(" "),t("h3",{attrs:{id:"http服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http服务器"}},[n._v("#")]),n._v(" HTTP服务器")]),n._v(" "),t("ul",[t("li",[n._v("Nginx本身也是一个静态资源的服务器，可以通过Nginx来实现动静分离"),t("br"),n._v("\n配置样例："),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[n._v("         upstream test{  \n            server localhost:8080;  \n            server localhost:8081;  \n        }\n        server {  \n            listen   80;  \n            server_name  localhost;  \n            location / {  \n                root   /usr/share/nginx/html;  \n                index  index.html;  \n            }  \n            \n            # 所有静态请求都由nginx处理，存放目录为html  \n            location ~ .(gif|jpg|jpeg|png|bmp|swf|css|js)$ {  \n                root /usr/share/nginx/html; # 静态文件路径  \n            }  \n        \n            # 所有动态请求都转发给tomcat处理  \n            location ~ .(jsp|do)$ {  \n                proxy_pass  http://test;  \n            }  \n\n            error_page   500 502 503 504 /50x.html;  \n            location = /50x.html {  \n                root   /usr/share/nginx/html;  \n            }  \n        } \n        \n")])])])])]),n._v(" "),t("h3",{attrs:{id:"反向代理服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#反向代理服务器"}},[n._v("#")]),n._v(" 反向代理服务器")]),n._v(" "),t("ul",[t("li",[n._v("反向代理（Reverse Proxy）方式是指以代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。"),t("br"),n._v("\n配置样例："),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[n._v("       server{\n               listen 80; # 端口号\n               server_name  localhost;                                               \n               client_max_body_size 1024M;\n               location /{\n                   proxy_pass http://localhost:8080;# 应用服务器http地址\n               }\n       }\n")])])])])]),n._v(" "),t("h3",{attrs:{id:"负载均衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[n._v("#")]),n._v(" 负载均衡")]),n._v(" "),t("ul",[t("li",[n._v("Nginx可以通过反向代理将用户的请求分配给多台机器处理，来实现负载均衡。Nginx目前支持自带3种负载均衡策略,例外还有fair、url_hash第三方策略\n配置样例：\n"),t("blockquote",[t("p",[n._v("1、RR（默认）")])]),n._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[n._v("        upstream test {\n            server localhost:8080;\n            server localhost:8081;\n        }\n")])])]),t("blockquote",[t("p",[n._v("2、权重")])]),n._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[n._v("        upstream myweb{\n            # #weigth参数表示权值，权值越高被分配到的几率越大\n            server 172.25.25.1:8080 weight=9;\n            server 172.25.25.2:8080 weight=1;\n        }\n        server{\n                listen 80; # 端口号\n                location /{\n                    proxy_pass http://myweb; # 应用服务器http地址\n                }\n        }\n")])])]),t("blockquote",[t("p",[n._v("3、ip_hash iphash的每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务器，可以解决session的问题。")])]),n._v(" "),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[n._v("      upstream myweb{\n            ip_hash;\n            server 172.25.25.1:8080 weight=9;\n            server 172.25.25.2:8080 weight=1;\n        }\n")])])])])]),n._v(" "),t("h3",{attrs:{id:"虚拟主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#虚拟主机"}},[n._v("#")]),n._v(" 虚拟主机")]),n._v(" "),t("ul",[t("li",[n._v("多个网站部署在同一台服务器上时,两个域名解析到同一个IP地址，但是用户通过两个域名却可以打开两个完全不同的网站。"),t("br"),n._v("\n配置样例："),t("div",{staticClass:"language-xml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[n._v("    server{\n                listen 80 default_server; # 端口号\n                server_name _;\n                return 444; # 过滤其他域名请求，返回444状态码(过滤有人恶意将某些域名指向你的主机服务器)\n        }\n    server{\n            listen 80 ; # 端口号\n            server_name www.aaa.com \n            location /{\n                proxy_pass http://localhost:8080; # 对应端口号\n            }\n    }\n    server{\n            listen 80 ; # 端口号\n            server_name www.bbb.com \n            location /{\n                proxy_pass http://localhost:8081; # 对应端口号\n            }\n    }\n")])])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);