##基础
- COALESCE()函数
    > 表达式：COALESCE ( expression,value1,value2……,valuen)   
      COALESCE()函数的第一个参数expression为待检测的表达式，而其后的参数个数不定。
      COALESCE()函数将会返回包括expression在内的所有参数中的第一个非空表达式。  
      如果所有的表达式都为空值，则返回NULL。

## json字段查询
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