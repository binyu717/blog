## 推荐


## java基础

## 线程相关
- 多线程sleep和wait的区别:
    > 使用上,sleep是Thread线程类的方法，而wait是Object顶级类的方法。sleep可以在任何地方使用，而wait只能在同步方法或者同步块中使用。
    > CPU及资源锁释放上，sleep,wait调用后都会暂停当前线程并让出cpu的执行时间，但不同的是sleep不会释放当前持有的对象的锁资源，到时间后会继续执行，而wait会放弃所有锁并需要notify/notifyAll后重新获取到对象锁资源后才能继续执行。
    > 异常捕获上，sleep需要捕获或者抛出异常，而wait/notify/notifyAll不需要。

## 垃圾回收