#### 如何基于Dockerfile构建镜像？
``` bash
$ docker build -t hello-node .
```
使用`docker build`命令，-t 是为构建后的镜像命名。

#### 如何运行一个容器？
``` bash
$ docker run -p 8088:8080 --rm -d hello-node
```
- `-p 8088:8080`: 
  将对宿主机8088端口的访问映射到Docker内部的8080端口

- `--rm`:
  在容器停止后将其销毁。按照Docker最佳实践，容器不应该保存
  数据或状态，所以直接销毁

- `-d`:
  以后台程序运行。
