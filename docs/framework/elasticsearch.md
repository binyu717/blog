[官方文档](https://www.elastic.co/guide/cn/elasticsearch/guide/current/getting-started.html)
[youmeek博客](http://www.youmeek.com/category/elasticsearch/)
[参考blog](https://blog.csdn.net/ghost_leader/article/details/79023222)
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
    - 默认集群名字：elasticsearch
     集群颜色状态-绿色，最健康的状态，代表所有的分片包括备份都可用；黄色，基本的分片可用，但是备份不可用（也可能是没有备份）；红色，部分的分片可用，表明分片有一部分损坏。此时执行查询部分数据仍然可以查到，遇到这种情况，还是赶快解决比较好。
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
        - [字段类型传送门](https://www.elastic.co/guide/cn/elasticsearch/guide/current/mapping-intro.html)
        - 属性
            - index：可选值为analyzed/no/not_analyzed，analyzed:首先分析字符串，然后索引它。换句话说，以全文索引这个域。
              not_analyzed:索引这个域，所以它能够被搜索，但索引的是精确值。不会对它进行分析。no:不索引这个域。这个域不会被搜索到。
              string 域 index 属性默认是 analyzed 。如果我们想映射这个字段为一个精确值，我们需要设置它为 not_analyzed ：
             - boost：默认为1，定义了文档中该字段的重要性，越高越重要
             - include_in_all：指定该字段是否应该包括在_all字段里头，默认情况下都会包含。
            - 对于 analyzed 字符串域，用 analyzer 属性指定在搜索和索引时使用的分析器,默认使用 standard 分析器， 但你可以指定一个内置的分析器替代它。
    ```
    PUT /user_index
    {
        "settings":{
            同上....
        },
       "mappings": {
            "user": {
                "properties": {
                    "id": {
                    "type": "text"
                    },
                    "user_name": {
                    "type": "keyword",
                    "boost": 5
                    },
                    "user_desc": {
                    "type": "text"
                    },
                    "age": {
                    "type": "byte"
                    },
                    "created_time": {
                    "type": "date",
                    "format": "yyyy-MM-dd HH:mm:ss"
                    },
                    "update_time": {
                    "type": "date",
                    "format": "yyyy-MM-dd HH:mm:ss"
                    }
                }
            }
         }
    }
    
    ```
- 在已有的mapping中增加域
    ```
    PUT /user_index/_mapping/user
        {
        "properties" : {
            "introduce" : {
            "type" :    "text"
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
