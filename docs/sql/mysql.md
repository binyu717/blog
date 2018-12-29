## 基础知识点
### COALESCE()函数
- 表达式：COALESCE ( expression,value1,value2……,valuen)     
      COALESCE()函数的第一个参数expression为待检测的表达式，而其后的参数个数不定。   
      COALESCE()函数将会返回包括expression在内的所有参数中的第一个非空表达式。     
      如果所有的表达式都为空值，则返回NULL。   

### 显示mysql查询进程
- show processlist; 
- command列，显示当前连接的执行的命令，一般就是休眠（sleep），查询（query），连接（connect）。time列，此这个状态持续的时间，单位是秒。state列，显示使用当前连接的sql语句的状态
- kill pid 
### json字段查询
查询json 
- json_contains 判断是否包含某个json值  
- json_contains_path 判断某个路径下是否包json值  
- json_extract 提取json值  
- column->path json_extract的简洁写法，MySQL 5.7.9开始支持  
- column->>path json_unquote(column -> path)的简洁写法  
- json_keys 提取json中的键值为json数组  
- json_search 按给定字符串关键字搜索json，返回匹配的路径>   
### 修改json 
- json_append 废弃，MySQL 5.7.9开始改名为json_array_append  
- json_array_append 末尾添加数组元素，如果原有值是数值或json对 象，则转成数组后，再添加元素  
- json_array_insert 插入数组元素  
- json_insert 插入值（插入新值，但不替换已经存在的旧值）  
- json_merge 合并json数组或对象  
- json_remove 删除json数据  
- json_replace 替换值（只替换已经存在的旧值）  
- json_set 设置值（替换旧值，并插入不存在的新值）  
- json_unquote 去除json字符串的引号，将值转成string类型>   
### 返回json属性   
- json_depth 返回json文档的最大深度   
- json_length 返回json文档的长度   
- json_type 返回json值得类型  
- json_valid 判断是否为合法json文档  


## experience
### on条件与where条件的区别
- on条件是在生成临时表时使用的条件，它不管on中的条件是否为真，都会返回左边表中的记录
- where条件是在临时表生成好后，再对临时表进行过滤的条件。这时已经没有left join的含义（必须返回左边表的记录）了，条件不为真的就全部过滤掉。
- 所以在使用left join,right join,full join关联表查询时，不管on上的条件是否为真都会返回left或right表中的记录，full则具有left和right的特性的并集。 而inner jion没这个特殊性，则条件放在on中和where中，返回的结果集是相同的。

### MYSQL之排序查询
- 按编码排序：convert('column' USING 'gbk)   
>     数据库编码              排序   
>     utf8/utf8mb4           按英文字母规则排序 "a,b,c..... "
>     gbk                    按汉字首字母排序 效果如上图   

- 按照指定字段的指定数据进行排序     
    - FILED(coulmn,str1,str2,str3…)   
    字段coulmn按照字符串str1，str2，str3的顺序返回查询到的结果集。如果表中str字段值不存在于str1， str2，str3中的记录，放在结果集最前面返回。     
    eg： SELECT audit_status FROM product order by FIELD(audit_status ,'auditing','enabled','not_enabled','rejected')
    - FIND_IN_SET(str,strlist)   
    str 要查询的字符串   
    strlist 字段名 参数以英文”,”分隔 如 (1,2,6,8)   
    查询字段(strlist)中包含(str)的结果，返回结果为null或记录   
    eg: SELECT audit_status FROM product  ORDER BY FIND_IN_SET(audit_status,'enabled,not_enabled,rejected,auditing')  

### MYSQL之FIND_IN_SET函数   
- 排序（s上述已介绍，不再赘述）
- 当做查询条件,类似LIKE,Find_IN_SET 是精确匹配,like是广泛的模糊匹配。Find_IN_SET查询的结果要小于like查询的结果      
- props存放的是产品的属性,可以为多个，下面sql查询包含2属性的产品    
    eg:SELECT props FROM product WHERE FIND_IN_SET('2', props)

### sql优化
- explain出来的各种item的意义；   
    - select_type:表示查询中每个select子句的类型
    - type:表示MySQL在表中找到所需行的方式，又称“访问类型”
    - possible_keys:指出MySQL能使用哪个索引在表中找到行，查询涉及到的字段上若存在索引，则该索引将被列出，但不一定被查询使用
    - key:显示MySQL在查询中实际使用的索引，若没有使用索引，显示为NULL
    - key_len:表示索引中使用的字节数，可通过该列计算查询中使用的索引的长度
    - ref:表示上述表的连接匹配条件，即哪些列或常量被用于查找索引列上的值 
    - Extra:包含不适合在其他列中显示但十分重要的额外信息
- profile
    - SHOW VARIABLES LIKE '%profiling%'; 查看是否开启
    - set profiling=1; 开启profiling
    - SHOW PROFILES 获取queryId;
    - SHOW PROFILE [ALL] FOR QUERY queryId; 查询详细信息
