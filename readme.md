# Log

* 17.8.22 初始化koa的项目
* 17.8.23 添加jwt的支持
* 17.8.24 添加redis的简单支持
* 17.8.25 第一次写class，把路由文件单独提出来成文件
* 17.8.25 支持后端渲染，添加了静态资源和favicon中间件
* 17.9.15 添加docker的支持，用docker-compose来启动服务
* 17.9.15 重新梳理了下文件结构


# 项目使用koa2做后台框架，mongodb进行数据存储，redis做session的保存，docker进行项目的环境配置

启动本项目默认你是在mac下运行，并且安装了docker



1. `git clone https://github.com/ToPeas/koa-again.git`
2. `cd koa-again`
3. `docker-compose up -d`
4. 打开 `localhost:6324` 

# 后台模板输url

* `/` 主页面，登录成功会通过session显示你已经登录的登录名。
* `login` 登录页面，简单的密码登录。 


# api
接口的路径前缀都有`api`

### users

> user 模块主要负责用户账号的增加，获取，删除

* `POST` `users/add` 添加用户
* `POST` `user/login` 用户登录
* `GET`  `user/all` 获取所有的用户消息 -需要token
* `GET` `user/:id` 获取某个用户的消息 -需要token






