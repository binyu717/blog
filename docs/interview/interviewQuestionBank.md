## java

### 编程题
- 1、一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
    分析：找到规律是类斐波那契数列： f(n)=f(n-1)+f(n-2)
```java
    // 解法一
    private static Long jumpFloor(int target) {
        if(target == 1){
            return 1L;
        }
        if (target == 2) {
            return 2L;
        }
        Long a = 1L;
        Long b = 2L;
        Long sum = a + b;
        for(int i=3;i<=target;i++) {
            sum = a + b;
            a = b;
            b = sum;
        }
        return sum;
    }
    // 解法二：采用递归
    private static Long jumpFloor1(Long i){
        if (i < 0) {
            return 0L;
        } else if (i < 3) {
            return i;
        } else {
            return jumpFloor1(i - 1) + jumpFloor1(i - 2);
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
          5> f(n)  = f(n-1) + f(n-2) + ···+ f(2) + f(1) + f(0)
## mysql
