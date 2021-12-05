## bat基本命令

- echo 表示显示此命令后的字符    
- echo off 表示在此语句后所有运行的命令都不显示命令行本身 
- @ 与echo off类似，但它是加在每个命令行的最前面，表示运行时不显示这一行的命令行（只能影响当前行）。
- call 调用另一个批处理文件（如果不用call而直接调用别的批处理文件，那么执行完那个批处理文件后将无法返回当前文件并执行当前文件的后续命令）
- pause 运行此句会暂停批处理的执行并在屏幕上显示Press any key to continue...的提示，等待用户按任意键后继续 
- rem 表示此命令后的字符为解释行（注释），不执行，只是给自己今后参考用的（相当于程序中的注释）。
- %[1-9]表示参数，参数是指在运行批处理文件时在文件名后加的以空格（或者Tab）分隔的字符串。变量可以从%0到%9，%0表示批处理命令本身，其它参数字符串用%1到%9顺序表示
- goto 指定跳转到标签，找到标签后，程序将处理从下一行开始的命令。
- pause 运行 Pause 命令时，将显示下面的消息：
　　Press any key to continue . . . 
-  start 调用外部程序，所有的DOS命令和命令行程序都可以由start命令来调用。
- title BAT的标题
- cls 清除屏幕
- 设置窗体大小：MODE CON: COLS=宽度 LINES=高度
- 设置字体颜色：COLOR 02 （0代表背景色，2代表前景色）  
 常用的颜色有以下值：0 黑色，1蓝色，2 绿色，3 浅绿色，4红色，5紫色，6黄色，7白色，8灰色，9浅蓝，A浅绿，B浅蓝色，C浅红色，D浅紫色，E浅黄色，F亮白色）。