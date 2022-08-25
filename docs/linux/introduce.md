---
lang: zh-CN
title: 随笔
description: 页面的描述
---

#### ssh 公私钥
```shell
cd ~/.ssh
# 如果没有ssh文件夹，则mkdir ~/.ssh

git config --global user.name "gxk"

git config --global user.email "1525185228@qq.com"

ssh-keygen -t rsa -C "1525185228@qq.com"
# 按三次回车，最后在.ssh文件夹下得到id_rsa和id_rsa.pub两个文件。
# id_rsa中的内容便是私钥，id_rsa.pub中的内容便是公钥。

ssh git@github.com
# 把公钥配置到github中后，可用此命令查看是否成功
```

#### 通信
+ https传输过程同时用了三个密钥，服务端生成的公钥和私钥用来非对称加密，客户端生成的密钥用来对称加密。  
+ https对称加密所需要的密钥，是用https非对称加密来传输的，内容数据通过密钥进行对称加密传输。