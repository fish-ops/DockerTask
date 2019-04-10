## Docker搭建MySQL运行环境

``` bash
# 拉取镜像
$ docker pull mysql:8.0.15

# 创建数据卷
$ docker volume create my_volume_1

# 启动容器，端口映射到3308，挂载之前的数据卷
# 同时MySQL要求必须通过环境变量设置ROOT密码
$ docker run --rm -d -e MYSQL_ROOT_PASSWORD=123456 \
      -v message_board:/var/lib/mysql \
      -p 3308:3306 mysql:8.0.15

# 连接数据库
$ mysql -uroot -p123456 -h 127.0.0.1  -P3308
```