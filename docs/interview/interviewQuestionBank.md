## java

### 编程题
- 1、一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。    
分析：找到规律是类斐波那契数列： f(n)=f(n-1)+f(n-2)
```java
    // 解法一
    private static Long jumpFloor(int n) {
        if(n == 1){
            return 1L;
        }
        if (n == 2) {
            return 2L;
        }
        Long a = 1L;
        Long b = 2L;
        Long sum = a + b;
        for(int i=3;i<=n;i++) {
            sum = a + b;
            a = b;
            b = sum;
        }
        return sum;
    }
    // 解法二：采用递归
    private static Long jumpFloor1(Long n){
        if (n < 0) {
            return 0L;
        } else if (n < 3) {
            return n;
        } else {
            return jumpFloor1(n - 1) + jumpFloor1(n - 2);
        }
    }
```

- 2、一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。  
分析:    
 1> n：台阶数     
 2> n = 1时，只有1种跳法，f(1) = f(1-1) = 1    
 3> n = 2时，会有两个跳的方式，一次1阶或者2阶， f(2) = f(2-1) + f(2-2)         
 4> n = 3时，会有三种跳的方式，1阶、2阶、3阶，
    那么就是第一次跳出1阶后面剩下：f(3-1);第一次跳出2阶，剩下f(3-2)；第一次3阶，那么剩下f(3-3)         因此结论是f(3) = f(3-1)+f(3-2)+f(3-3)         
 5> f(n)  = f(n-1) + f(n-2) + ···+ f(2) + f(1) + f(0) = 2^(n-1)           
```java
     private static Long jumpFloor(Long n){
        return  (int)Math.pow(2,n-1);
    }
       
```

- 3、盛最多水的容器: 给定n个正整数 a1，a2，...，an，其中每个整数用坐标(i,ai)表示。连接点(i,ai)和(i,0)画出直线i，总共有n条线。请找出其中两条直线，使得它们与x轴形成的容器能够装的水最多。     
    分析：从两边向中间，比较两线高度，每次都舍弃最短的并向中心移动一位，同时根据两边距离和最短边高度得到面积。容器大小取决于短边的高度。
```java
     private static int maxArea(int[] height){
        int left = 0;
        int right = height.length - 1;
        int result = 0;
        int tempHeight;
        int tempLength;
        while (left < right) {
            // 取短边，向中移
            tempLength = right - left;
            if (height[left] > height[right]) {
                tempHeight = height[right];
                right--;
            } else {
                tempHeight = height[left];
                left++;
            }
            if (tempLength*tempHeight>result) {
                result = tempLength * tempHeight;
            }
        }
        return result;
    }
```

- 4、一副扑克牌中抽出13张从a到k然后把上面的一张抽出来放最低下,第二张是1拿出来摆桌上,再把最上面的一张抽出来放底下,第二张是2放桌上,以此类推把他们按照顺序都抽出来.怎么摆?     
    [知乎链接](https://zhuanlan.zhihu.com/p/38850888)    
    分析：直接把一副1..n的牌那样玩一遍，他的结果就是索引值，然后把桌子上的牌堆按照索引值排个序（这里是O(n)），就得到原来的结果了。
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

## 常见问题
- 你看过那些源码吗？ 
- 
- 那你能讲讲HashMap的实现原理吗？ 
- 
- HashMap什么时候会进行rehash？
- 
- HashMap什么时候会进行扩容？ 
- 
- 那HashMap的初始容量设置成多少比较合适呢？ 
- 
- 结合源码说说HashMap在高并发场景中为什么会出现死循环？ 
- 
- JDK1.8中对HashMap做了哪些性能优化？ 
- 
- HashMap和HashTable有何不同？ 
- 
- HashMap 和 ConcurrentHashMap 的区别？ 
- 
- ConcurrentHashMap和LinkedHashMap有什么区别？ 
- 
- 为什么ConcurrentHashMap中的链表转红黑树的阀值是8？ 
- 
- 什么是ConcurrentSkipListMap？他和ConcurrentHashMap有什么区别？ 
- 
- 还看过其他的源码吗？Spring的源码有了解吗？ 
- 
- SpringBoot的源码呢？知道starter是怎么实现的吗？

## 经历
- 产品设计原则
    - 优先级
        - 用户优先级：把握核心用户，为产品自己真正的用户群做设计，不要天真的以为你的设计可以满足所有的用户。(场景化设计理念)
        - 功能优先级：把握核心需求，亮点功能往往两三个就足够多了。记住产品的定位，该做什么。
        - 内容/信息优先级：将内容分成不同的层次，核心内容需要明显地突显出来。报纸上的标题、摘要、征文等层次清晰、泾渭分明也是这个原因。
        - 交互优先级：主要的交互路径需要让用户以最小的精神代价就能走得通，尽量减少这条路上的分支。
        - 视觉优先级：视觉更需要层次，重点的视觉元素需要让用户一眼扫过去就能看到，而次要的信息则要拉开距离，通过留白、颜色对比等等手段。
    - 一致性
        - 交互逻辑的一致性：完成同样功能，交互逻辑是不是一样的，流程是不是相似的，背后就好像有一样的数学模型似的。
        - 元素的一致性：同样的交互逻辑，使用的控件等是否一致，例如这里用按钮来执行动作，在那边变成了图标，另一个地方又是链接，设计师应该把控好每次版本迭代的一致性。
        - 词语的一致性：界面上使用的语言，在描述同一个事物时是否一致。我们在产品中用到的文案词语必需保持一致，当手头上产品线多的时候，我们可以采用文案管理的方法，将每款产品的文案进行整理，当设计到该产品时，可以先看下以前写的一些文案，这样将能保证每款产品文案词语的一致性。
        - 信息架构的一致性：信息的组织层次方面是否是一致的，导航是否是一致的。在信息架构的设计中，我们要遵循一定的原则，除非你的设计从根本上改变了问题。
        - 视觉的一致性：界面的图标、颜色、区域的分隔、指向等方面是否是一致，每次迭代版本，负责此产品的设计师，必需把控好视觉的一致性，一个产品中不能出现不同种风格的界面和元素。
- 数据库设计原则
    - 三范式
　　    - 第一范式：对属性的原子性约束，要求属性具有原子性，不可再分解； 
　　    - 第二范式：对记录的惟一性约束，要求记录有惟一标识，即实体的惟一性； 
　　    - 第三范式：对字段冗余性的约束，即任何字段不能由其他字段派生出来，它要求字段没有冗余。 
        - 针对第三范式，具体做法是：在概念数据模型设计时遵守第三范式，在物理数据模型设计时
考虑降低范式标准，允许字段的冗余。 
    - 统一规范，字段类型、字段名称、表名等等。
- 开发讲究
- 用过哪些中间件
- 中台理解
- 领域设计原则
- 高并发、安全采取的措施
