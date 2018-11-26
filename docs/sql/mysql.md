##基础知识点
- COALESCE()函数
    > 表达式：COALESCE ( expression,value1,value2……,valuen)   
      COALESCE()函数的第一个参数expression为待检测的表达式，而其后的参数个数不定。
      COALESCE()函数将会返回包括expression在内的所有参数中的第一个非空表达式。  
      如果所有的表达式都为空值，则返回NULL。

- 显示mysql查询进程
    > show processlist; 
    > command列，显示当前连接的执行的命令，一般就是休眠（sleep），查询（query），连接（connect）。time列，此这个状态持续的时间，单位是秒。state列，显示使用当前连接的sql语句的状态
- kill pid 
- json字段查询
查询json 
> json_contains 判断是否包含某个json值  
> json_contains_path 判断某个路径下是否包json值  
> json_extract 提取json值  
> column->path json_extract的简洁写法，MySQL 5.7.9开始支持  
> column->>path json_unquote(column -> path)的简洁写法  
> json_keys 提取json中的键值为json数组  
> json_search 按给定字符串关键字搜索json，返回匹配的路径>   
修改json 
> json_append 废弃，MySQL 5.7.9开始改名为json_array_append  
> json_array_append 末尾添加数组元素，如果原有值是数值或json对 象，则转成数组后，再添加元素  
> json_array_insert 插入数组元素  
> json_insert 插入值（插入新值，但不替换已经存在的旧值）  
> json_merge 合并json数组或对象  
> json_remove 删除json数据  
> json_replace 替换值（只替换已经存在的旧值）  
> json_set 设置值（替换旧值，并插入不存在的新值）  
> json_unquote 去除json字符串的引号，将值转成string类型>   
返回json属性   
> json_depth 返回json文档的最大深度   
> json_length 返回json文档的长度   
> json_type 返回json值得类型  
> json_valid 判断是否为合法json文档  


## experience
### on条件与where条件的区别
    - on条件是在生成临时表时使用的条件，它不管on中的条件是否为真，都会返回左边表中的记录
    - where条件是在临时表生成好后，再对临时表进行过滤的条件。这时已经没有left join的含义（必须返回左边表的记录）了，条件不为真的就全部过滤掉。
    - 所以在使用left join,right join,full join关联表查询时，不管on上的条件是否为真都会返回left或right表中的记录，full则具有left和right的特性的并集。 而inner jion没这个特殊性，则条件放在on中和where中，返回的结果集是相同的。
