## Docker 搭建node运行环境
``` bash
# in current folder

# 构建镜像
$ docker build -t hello-node .

# 运行容器
$ docker run -p 8088:8080 --rm -d hello-node

# 访问测试
$ curl -i localhost:8088
HTTP/1.1 200 OK
Date: Sun, 17 Mar 2019 04:21:53 GMT
Connection: keep-alive
Content-Length: 12

Hello world!
```
