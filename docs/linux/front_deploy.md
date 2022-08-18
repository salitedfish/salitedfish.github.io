---
lang: zh-CN
title: 前端部署
description: 页面的描述
---

### 脚本部署
```shell
tar -czf lib.tar lib
scp lib.tar root@121.40.18.70:/root
rm -rf lib
rm -rf lib.tar
ssh root@121.40.18.70 'cd /root && rm -rf lib && tar -xzf lib.tar && rm -rf lib.tar'
```