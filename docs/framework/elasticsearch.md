[官方文档](https://www.elastic.co/guide/cn/elasticsearch/guide/current/getting-started.html)
## 基本知识
- Cluster：集群，可以一个或多个节点，这些节点共同保存这个集群的数据。集群有一个名称，很重要，各个节点的配置就需要用到这个名称，节点是用集群名称加入到集群中的。
- Node：节点，归属集群。如果整个集群就一个节点，那这个节点也就是这个集群本身。
- Index：索引，类似数据库结构中的库，是一堆 document 的集合。索引名称必须全部是小写，不能用下划线开头，不能包含逗号。
- Type：类型，类似数据库结构中的表。
- Document：文档，Elasticsearch 中的最小数据单元，类似数据库结构中的一行数据。
- Shard：分片。全称 primary shards（一般用在写操作）。Elasticsearch 可以将一个 Index 中的 Document 数据切分为多个 shard，分布在多台服务器上存储。
    创建的时候可以指定分片数量，创建完成后是不可修改的。
- Replica：副本。全称 replica shards（一般读操作可以被分配到进行使用）。Replica 主要用来保证高可用（故障转移）、数据备份、增强高吞吐的并行搜索。
## 安装
- elasticsearch
- kibana
    > 下载版本要和es保持一致，否则运行不起来；
    > 修改config/kibana.yml配置 server.host、elasticsearch.url ...
    > 运行 ./bin/kibana  

## 运行
- 默认情况下es是不允许root账户启动的，需要为es配置独立的账户和组   
    > groupadd elasticsearch_group    
    > useradd elasticsearch_user -g elasticsearch_group -s /sbin/nologin  
- 命令 
    > bin/elasticsearch -d     
    > ./bin/kibana  
## 操作
- 查询集群健康状况：GET /_cat/health?v
- 查询集群中有哪些索引：GET /_cat/indices?v
- 查询分片：GET /_cat/shards
- 新增索引：PUT /user_index
    - 指定分片数和副本（分片数不可修改）
    ```
            PUT /user_index
            {
            "settings": {
                "index": {
                "number_of_shards": 5,
                "number_of_replicas": 1
                }
            }
            }
    ```     
    - 修改副本
    ```
            PUT /user_index/_settings
            {
                "number_of_replicas": 2
            }
    ```
    - 设置type/document
        - [字段类型传送门](https://blog.csdn.net/chengyuqiang/article/details/79048800)
        - 属性
            - index：可选值为analyzed(默认)和no，如果是字段是字符串类型的，则可以是not_analyzed.
            - store：可选值为yes或no，指定该字段的原始值是否被写入索引中，默认为no，即结果中不能返回该字段。
            - boost：默认为1，定义了文档中该字段的重要性，越高越重要
            - null_value：如果一个字段为null值(空数组或者数组都是null值)的话不会被索引及搜索到，null_value参数可以显示替代null values为指定值，这样使得字段可以被搜索到。
            - include_in_all：指定该字段是否应该包括在_all字段里头，默认情况下都会包含。
    ```
    "mappings": {
        "user": {
            "properties": {
                "id": {
                "type": "text",
                "index": "not_analyzed"
                },
                "user_name": {
                "type": "keyword",
                "store": "no",
                "term_vector": "with_positions_offsets",
                "analyzer": "ik_max_word",
                "search_analyzer": "ik_max_word",
                "boost": 5
                },
                "user_desc": {
                "type": "text",
                "index": "not_analyzed"
                },
                "age": {
                "type": "byte",
                "index": "not_analyzed"
                },
                "created_time": {
                "type": "date",
                "index": "not_analyzed",
                "format": "yyyy-MM-dd HH:mm:ss"
                },
                "update_time": {
                "type": "date",
                "index": "not_analyzed",
                "format": "yyyy-MM-dd HH:mm:ss"
                },
            }
        }
    }
    ```
- 删除指定索引：DELETE /user_index
- 删除指定多个索引：DELETE /user_index,db_index
- 删除匹配符索引：DELETE /user_*
- 删除所有索引：DELETE /_all
- 查询索引配置信息：GET /user_index/_settings
- 查询所有索引配置信息：GET /_all/_settings
## 其他
- 使用/_cat/nodes来查看所有node的情况
    > http://172.25.50.69:9200/_cat/nodes?v
- 分片情况
    > http://172.25.50.69:9200/_cat/shards?v
