# 谷歌浏览器插件

> 实现修改页面dom以及弹框显示（弹框和dom通信）

## 前言
该项可在微博pc端的直播页面监听到直播列表的点击事件，获取到跳转地址

## 项目结构

```
.
├── images  // 资源图片（icon）
├── background.js
├── content_script.js // 注入js 网页注入
├── injectscript.js  // 注入js  作用与popup_.js 实现通信
├── jquery.js     // 引入js
├── manifest.json // 配置文件
├── plugins.css   // 弹框引入样式
├── popup.html    // 弹框页面
├── popup_.js     // 弹框JS
├── README.md
```