## 在知乎上看到一个很有意思的问题，记录一下：
### 一副扑克牌中抽出13张从a到k然后把上面的一张抽出来放最低下,第二张是1拿出来摆桌上,再把最上面的一张抽出来放底下,第二张是2放桌上,以此类推把他们按照顺序都抽出来.怎么摆?
---
#### 看到大佬这么说，整个人都不好了。。。
---
>"其实第二道题很简单的。直接把一副1..n的牌那样玩一遍，他的结果就是索引值，然后把桌子上的牌堆按照索引值排个序（这里是O(n)），就得到原来的结果了。我觉得思路应该1秒钟给出来，写代码检查一下可能需要10分钟。"
---
 ```java
     private static void demo(int count) {
        List<Integer> ints = new ArrayList<>();
        for (int i = 1; i <= count; i++) {
            ints.add(i);
        }
        List<Integer> list = new ArrayList<>();
        Boolean flag = Boolean.TRUE;
        for (int i = 0; i < ints.size(); i++) {
            if (list.size() == count) {
                break;
            }
            if (flag) {
                ints.add(ints.get(i));
                flag = Boolean.FALSE;
            } else {
                list.add(ints.get(i));
                flag = Boolean.TRUE;
            }
        }
        System.out.println(list);
        // 假设每个数的索引是想要的1~n的排序，则按值来排序后的索引即所求
        int[] result = new int[count];
        for (int i = 0; i < list.size(); i++) {
            result[list.get(i) - 1] = i + 1;
        }
        System.out.print(Arrays.toString(result));
        
    }
 ```
[知乎链接](https://zhuanlan.zhihu.com/p/38850888)

## getResourceAsStream()了解一下
### this.getClass().getResourceAsStream()
    path 不以’/'开头时默认是从此类所在的包下取资源，以’/'开头则是从ClassPath根下获取。其只是通过path构造一个绝对路径，最终还是由ClassLoader获取资源。 
### this.getClass().getClassLoader().getResourceAsStream()
    默认则是从ClassPath根下获取，path不能以’/'开头，最终是由ClassLoader获取资源。 

###  
```java
InputStream is = this.getClass().getResourceAsStream()
Properties prop = new Properties(is);
prop.load()
// 这样就可以获取文件中的数据了
prop.getProperty("key);

```
ClassPath根路径：war包下WEB-INF/目录；不过存放在resources目录下的文件都会打包到WEB-INF下的目录
