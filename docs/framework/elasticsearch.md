[官方文档](https://www.elastic.co/guide/cn/elasticsearch/guide/current/getting-started.html)
## 安装
- elasticsearch
- kibana
    > 下载版本要和es保持一致，否则运行不起来；
    > 修改config/kibana.yml配置 server.host、elasticsearch.url ...
    > 运行 ./bin/kibana  

## 运行
    > 默认情况下es是不允许root账户启动的，需要为es配置独立的账户和组
        > groupadd elasticsearch_group
        > useradd elasticsearch_user -g elasticsearch_group -s /sbin/nologin
    > bin/elasticsearch -d 
    > nohup bin/kibana &
## 其他
- 使用/_cat/nodes来查看所有node的情况
    > http://172.25.50.69:9200/_cat/nodes?v
- 分片情况
    > http://172.25.50.69:9200/_cat/shards?v
