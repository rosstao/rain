# rain
for pharmaceutical factory


* frameWorkConfig 框架配置，按模块划分
* routers 路由，创建自己的模块，并在index中注册
* controller 控制层，处理请求
* service 细化controller请求，进行IO或计算操作
* helper 帮助 存放诸如日期格式化
* logs 日志
* model mongoose Schema，并在index中注册
* public 前端页面css/js/img
* views 页面模板 为pug引擎
--------------------------------------------------
* config.js 诸如数据库配置
* 对model、controller、routers、service进行更细化分层
* 对自己负责模块在相应层下新建一个目录，每个操作划分为一个文件，通过文件下index注册，然后
* 在各层根目录index中注册