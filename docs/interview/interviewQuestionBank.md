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
    分析  1> n：台阶数 
          2> n = 1时，只有1种跳法，f(1) = f(1-1) = 1
          3> n = 2时，会有两个跳的方式，一次1阶或者2阶， f(2) = f(2-1) + f(2-2) 
          4> n = 3时，会有三种跳的方式，1阶、2阶、3阶，
            那么就是第一次跳出1阶后面剩下：f(3-1);第一次跳出2阶，剩下f(3-2)；第一次3阶，那么剩下f(3-3)
            因此结论是f(3) = f(3-1)+f(3-2)+f(3-3)
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

## mysql
