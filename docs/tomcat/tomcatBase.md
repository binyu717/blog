## Tomcat部署时war和war exploded区别

- war模式：将WEB工程以包的形式上传到服务器 ；
- war exploded模式：将WEB工程以当前文件夹的位置关系上传到服务器；
    > （1）war模式这种可以称之为是发布模式，是先打成war包，再发布；  
    > （2）war exploded模式是直接把文件夹、jsp页面 、classes等等移到Tomcat 部署文件夹里面，进行加载部署。因此这种方式支持热部署，一般在开发的时候也是用这种方式。  
    > （3）在平时开发的时候，使用热部署的话，应该对Tomcat进行相应的设置，这样的话修改的jsp界面什么的东西才可以及时的显示出来。
    > (4) 先在工程结构配置artifacts,再在tomcat中选择部署的artifact