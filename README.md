# rain
for pharmaceutical factory


* config 框架配置，按模块划分
* routers 路由，创建自己的模块，并在index中注册
* controller 控制层，处理请求
* service 细化controller请求，进行IO或计算操作
* helper 帮助 存放诸如日期格式化
* logs 日志
* model mongoose Schema，并在index中注册
* public 前端页面css/js/img
* views 页面模板 为pug引擎
* .jshintignore 代码验证配置
* .jshintrc 代码验证排除目录
--------------------------------------------------
* config.js 诸如数据库配置
* 对model、controller、routers、service进行更细化分层
* 对自己负责模块在相应层下新建一个目录，每个操作划分为一个文件，通过文件下index注册，然后
* 在各层根目录index中注册
--------------------------------------------------
* JSHint 代码验证
* npm run pretest  验证项目
* 项目代码规范
* 1.使用 ECMAScript 6 标准
* 2.判断、循环等代码块必须使用花括号
* 3.强制使用 === !==  代替 == !=
* 4.禁用位运算符
* 5.代码缩进为 4 个空格
* 6.变量定义前禁止使用（其实严格模式已有控制，但可能有其他文件没有引用严格模式，避免作用域环境污染）
* 7.不允许逗号开头的编码方式（统一编码方式，希望有此习惯同事谅解）
* var obj = {
*     name: 'Anton'
*   , handle: 'valueof'
*   , role: 'SW Engineer'
* };
* 8.未使用定义变量