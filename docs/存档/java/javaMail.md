## JavaMail 的使用
最近项目有个拉取邮箱邮件的需求，了解了JavaMail的使用，先记录下
### 接收邮件
```java
/**
 * 接收邮件
 * @Date 2018/6/26
 */
public class GetEmailUtil {
    public static void main(String[] args) {
        String receivingServer = "";
        String mailProtocol = "";
        String email = "";
        String password = "";
        String port = "";
        String isSsl = "";
        // Calling checkMail method to check received emails
        checkMail(receivingServer, port,mailProtocol, email, password,isSsl);
    }

    public static void checkMail(String receivingServer, String port,String mailProtocol, String email,String password,String isSsl)
    {
        InputStream inputStream = null;
        if ("imap".equals(mailProtocol)) {
            processImapEmail(receivingServer, port, mailProtocol, email, password, isSsl);
        } else if ("pop3".equals(mailProtocol)) {
            processPop3Email(receivingServer, port, mailProtocol, email, password, isSsl);
        }
    }

    private static void processImapEmail(String receivingServer, String port,
                                String mailProtocol, String email,String password,String isSsl){
        Store storeObj;
        Session emailSessionObj;
        Properties propvals = new Properties();
        try {
            // 连接参数
            propvals.put("mail.imap.host", receivingServer);
            propvals.put("mail.imap.port", port);
            propvals.put("mail.store.protocol", mailProtocol);
            propvals.setProperty("mail.imap.ssl.enable", isSsl);
            emailSessionObj = Session.getDefaultInstance(propvals);
            // 获取对象，连接到服务器 
            storeObj = emailSessionObj.getStore(mailProtocol);
            storeObj.connect(receivingServer, email, password);
            // 创建folder对象，打开方式有只读与读写
            IMAPFolder emailFolderObj =  (IMAPFolder)storeObj.getFolder("INBOX");
            emailFolderObj.open(Folder.READ_ONLY);
            // 获取下一个uid值，UID对于POP3是字符串类型，IMAP是数值类型且递增，
            long uidNext = emailFolderObj.getUIDNext();
            // 邮箱邮件的总数量，不计入已删除的
            int messageCount = emailFolderObj.getMessageCount();
            System.out.println("邮件总数量："+ messageCount);
            Message[] messages = emailFolderObj.getMessages();
            // FetchProfile类提供邮件协议提供者特有可选参数，其目的是更有效地实现邮件组成成分的预提取,可增加以下三种属性，
            FetchProfile fp = new FetchProfile();
            fp.add(FetchProfile.Item.CONTENT_INFO);
            fp.add(FetchProfile.Item.ENVELOPE);
            fp.add(FetchProfile.Item.FLAGS);
            fp.add("X-mailer");
            emailFolderObj.fetch(messages, fp);
            // 遍历messages时，提取其内容相当耗时，这时用FetchProfile预提取可以起到一定的效果
             for (int i = messages.length-1; i >=0; i--) {
                Message indvidualmsg = messages[i];
                long uid = emailFolderObj.getUID(indvidualmsg);
                indvidualmsg.getSubject();
                indvidualmsg.getSentDate();
                indvidualmsg.isMimeType("multipart/*");
                indvidualmsg.getContentType().contains("multipart");
                indvidualmsg.getContent();
             }
            emailFolderObj.close(false);
            storeObj.close();
        } catch (Exception exp) {
            exp.printStackTrace();
        }
    }

    private static void processPop3Email(String receivingServer, String port,
                                String mailProtocol, String email,String password,String isSsl){
        Store storeObj;
        Session emailSessionObj;
        Properties propvals = new Properties();
        try {
            // 连接参数
            propvals.put("mail.pop3.host", receivingServer);
            propvals.put("mail.pop3.port", port);
            propvals.put("mail.store.protocol", mailProtocol);
            propvals.setProperty("mail.pop3.ssl.enable", isSsl);

            emailSessionObj = Session.getDefaultInstance(propvals);
            // 获取对象，连接到服务器 
            storeObj = emailSessionObj.getStore(mailProtocol);
            storeObj.connect(receivingServer, email, password);
            // 创建folder对象，打开方式有只读与读写
            POP3Folder emailFolderObj =  (POP3Folder)storeObj.getFolder("INBOX");
            emailFolderObj.open(Folder.READ_ONLY);
            Message[] messages = emailFolderObj.getMessages();
            FetchProfile fp = new FetchProfile();
            fp.add(FetchProfile.Item.CONTENT_INFO);
            fp.add(FetchProfile.Item.ENVELOPE);
            fp.add(FetchProfile.Item.FLAGS);
            fp.add("X-mailer");
            emailFolderObj.fetch(messages, fp);
            for (int i = messages.length-1; i >=0; i--) {
                Message indvidualmsg = messages[i];
                indvidualmsg.getSubject();
                indvidualmsg.getSentDate();
                indvidualmsg.isMimeType("multipart/*");
                indvidualmsg.getContentType().contains("multipart");
                indvidualmsg.getContent();
            }
            emailFolderObj.close(false);
            storeObj.close();
        } catch (Exception exp) {
            exp.printStackTrace();
        }
    }

```


### 发送邮件
 ```java
    /**
     * 发送简单邮件
     * @param server
     * @param port
     * @param mailProtocol
     * @param email
     * @param password
     * @param isSsl
     */
    private static void sendEmail(String server, String port,
                                        String mailProtocol, String email, String password, String isSsl) {

        try {
            Properties prop = new Properties();
            prop.setProperty("mail.host", server);
            prop.setProperty("mail.transport.protocol",mailProtocol);
            prop.setProperty("mail.smtp.auth", "true");
            //使用JavaMail发送邮件的5个步骤
            //1、创建session
            Session session = Session.getInstance(prop);
            //开启Session的debug模式，这样就可以查看到程序发送Email的运行状态
            session.setDebug(true);
            //2、通过session得到transport对象
            Transport ts = session.getTransport();
            //3、使用邮箱的用户名和密码连上邮件服务器，发送邮件时，发件人需要提交邮箱的用户名和密码给smtp服务器，用户名和密码都通过验证之后才能够正常发送邮件给收件人。
            ts.connect(server, email, password);
            //4、创建邮件
            //创建邮件对象
            MimeMessage message = new MimeMessage(session);
            //指明邮件的发件人,此处需要和连接邮件服务器的用户名保持一致，否则报440
            message.setFrom(new InternetAddress(email));
            //指明邮件的收件人 Message.RecipientType.TO、Message.RecipientType.CC、Message.RecipientType.BCC
            message.setRecipient(Message.RecipientType.TO, new InternetAddress("478494772@qq.com"));
            //邮件的标题
            message.setSubject("javaMail发送邮件");
            //邮件的文本内容
//            message.setContent("这是一封普通邮件", "text/html;charset=UTF-8");
            message.setContent(createAttachContent());
            //5、发送邮件
            ts.sendMessage(message, message.getAllRecipients());
            ts.close();
        } catch (Exception e) {
            throw new RuntimeException("发送失败");
        }
    }

    /**
    *
    * Message表示一个邮件，messgaes.getContent()返回一个Multipart对象。一个
    * Multipart对象包含一个或多个BodyPart对象，来组成邮件的正文部分（包括附件）
    * Multipart是一个容器它转载多个body Part（正文、附件或内嵌资源）。Part的        
    * getContent()方法就返回一个Multipart对象。
    **/
    private static MimeMultipart createAttachContent(){
        // 可包含多个MimeBodyPart,主要有三种子类型：mixed：附件、related：内嵌资源、alternative：纯文本与超文本共存。
        MimeMultipart mp = new MimeMultipart();
        try {
            MimeBodyPart text = new MimeBodyPart();
            text.setContent("使用JavaMail创建的带附件的邮件", "text/html;charset=UTF-8");
            //创建邮件附件
            MimeBodyPart attach = new MimeBodyPart();
            DataHandler dh = new DataHandler(new FileDataSource("C:\\Users\\Administrator\\Desktop\\oneKey.bat"));
            attach.setDataHandler(dh);
            attach.setFileName(dh.getName());

            //创建容器描述数据关系
            mp.addBodyPart(text);
            mp.addBodyPart(attach);
            //
            mp.setSubType("mixed");
        } catch (Exception e) {
            throw new RuntimeException("创建邮件内容异常");
        }
        return mp;
    }
 ```