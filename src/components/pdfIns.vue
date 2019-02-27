<script>
/**
 * vue-pdf
 * 文档：https://www.npmjs.com/package/vue-pdf
一、安装
npm install --save vue-pdf

二、基本示例

三、API
3.1 Props属性
:src
##pdf的url地址

:page
##展示第几页

:rotate
##pdf旋转角度，"90"的倍数有效


3.2 Events回调
@password(updatePassword, reason)
##updatePassword提示输入密码；
##reason：提示（'NEED_PASSWORD' or 'INCORRECT_PASSWORD'）

@progress(number)
##页面加载进度

@page-loaded(number)
##单个页面加载回调

@num-pages(number)
##pdf页面总数

@error
##加载失败回调

@link-clicked(number)
##单击内部链接是触发


3.3 Public methods公共方法
print(dpi, pageList)
##dpi打印的分辨率（100）
##pageList需要打印的页面array
##打印pdf文件


3.4 Public static methods静态方法
createLoadingTask(src)
##这个方法创建一个当前pdf的加载任务，可以作为:src使用或者公开的获取当前pdf的页面总数；
##src传入pdf链接；
 */
</script>