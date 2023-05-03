## 基本命令
  - 配置个人信息
    >$ git config --global user.name "Your Name"<br>
    >$ git config --global user.email "email@example.com"
- 初始化
    >$ git init
- 拉取远程的Repo到本地
    > $ git clone xxxxxx  
- 文件添加到仓库
    >$ git add -p  
- 把文件提交到仓库
    >$ git commit -m "add LICENSE"
- 查看difference
    >$ git diff   
    git diff HEAD -- readme.txt命令可以查看工作区和版本库里面最新版本的区别
- 显示从最近到最远的提交日志
    >$ git log --pretty=oneline
- 版本回退
    >$ git reset --hard HEAD^ # 当前版本HEAD,上一个版本HEAD^,上上个版本HEAD^^
- 查看命令记录
    >git reflog
-  丢弃工作区的修改，回到最近一次git commit或git add时的状态：
    >$ git checkout -- READER.md
-  把暂存区的修改撤销掉（unstage）
    >$ git reset HEAD READER.md
- 在本地仓库删除文件
    > $ git rm 我的文件
- 在本地仓库删除文件夹
    > $ git rm -r 我的文件夹/  
    *#此处-r表示递归所有子目录，如果你要删除的，是空的文件夹，此处可以不用带上-r。*
- 本地仓库关联到远程仓库
    >$ git remote add origin xxxxx  
- 删除远程关联
    >$ git remote remove origin
- 向远程库推送更新
    >$ git push origin master

- 创建+切换dev分支
    >$ git checkout -b dev  
#相当于  
$ git branch dev # 创建分支  
$ git checkout dev

- 查看当前分支，当前分支前面标有×号
    >$ git branch
- 删除dev分支
    >$ git branch -d dev
- 要查看远程库的信息
    >$ git remote  
     $ git remote -v  _列出详细信息，在每一个名字后面列出其远程url_
## git stash 系列  
>把所有未提交的修改（包括暂存的和非暂存的）都保存起来，用于后续恢复当前工作目录
- 命令跟 Git stash 很像。 但是这个命令带有各种选项
    >$ git stash save ""
- 查看工作现场列表
    >$ git stash list
- 恢复工作现场
    >$ git stash pop  _恢复的同时把stash内容也删了, stash@{0} 更新为了上一个版本的 stash_  
    >$ git stash apply   
    > _将堆栈中最顶层的 stash 拿出并交回给代码仓库。想获取一些其他的 stash ，你可以指定 stash ID_
- 显示了 stash 之间的差异的概要
    >$ git stash show       
    >_git stash show -p 显示完整的c差异信息_   
    >_git stash show stash@{1} 指定 stash ID 来获取差异的概要_
- 创建一个最新 stash 的新的分支，然后删除该stash,也可以指定 stash ID 
    >$ git stash branch branchName
- 删除仓库中的所有的 stashes
    >$ git stash clear
- 从堆栈中删除最新的stash,同样可以指定 stash ID 
    >$ git stash drop

## git tag 
- 查看所有标签
    > git tag
- 查看标签详情
    > git show <tagname>
- 创建标签
    > git tag -a `<tagname>` -m"" `<commitId>`
- 推送至远程
    > git push origin `<tagname>`
- 删除本地标签
    > git tag -d `<tagname>`
- 删除远程标签（只会删除远程，本地保留）
    > git push origin :refs/tags/`<tagname>`
    
## 远程仓库
- 更换远程仓库地址，URL为新地址
    >git remote set-url origin URL
- 删除现有远程仓库 
    >git remote rm origin
- 添加新远程仓库
    >git remote add origin url
## reset和revert
### reset 回退到指定的commit
 ```
 --soft 回退后a分支修改的代码被保留并标记为add的状态（git status 是绿色的状态）
 --mixed 重置索引，但不重置工作树，更改后的文件标记为未提交（add）的状态。默认操作。
 --hard 重置索引和工作树，并且a分支修改的所有文件和中间的提交，没提交的代码都被丢弃了。
 --merge 和--hard类似，只不过如果在执行reset命令之前你有改动一些文件并且未提交，merge会保留你的这些修改，hard则不会。【注：如果你的这些修改add过或commit过，merge和hard都将删除你的提交】
 --keep 和--hard类似，执行reset之前改动文件如果是a分支修改了的，会提示你修改了相同的文件，不能合并。如果不是a分支修改的文件，会移除缓存区。git status还是可以看到保持了这些修改。

 ``` 
### revert 用一次新的commit来中和指定的commit（不影响该commit后的代码）
 ## 项目实践
 - 版本切换
>HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令   
    git reset --hard commit_id。   
穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本。 
    git log --pretty=oneline简约版   
要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本。

- 撤销更改
    - 已修改，未暂存  ： 
        查看工作区与暂存区之间的差异   
        > git diff     

        撤销操作：
        > git checkout . 或者git reset --hard   
        
    - 已暂存，未提交  
        查看暂存区和本地仓库之间的差异 ：
        > git diff --cached  

        撤销操作：
        >git reset   修改退回到了git add .之前的状态   
        >git checkout .  
        
        或者
        >git reset --hard

    - 已提交，未推送   
        本地仓库与远程仓库的差异:
        >git diff master origin/master   

        撤销操作：
        >git reset --hard origin/master
    - 已推送   
     撤销操作：需要先恢复本地仓库，再强制push到远程仓库
       > git reset --hard HEAD^   
       > git push -f


        

