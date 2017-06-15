# demo1 README

目的：

[target中页面index.html]点击按钮【新窗口】打开popup中index页面，[popup中index页面]录制完【重定向】到[target中页面a.html]，[target中页面a.html]处理通知[target中页面index.html]，[target中页面a.html]执行关闭【新窗口】动作

## 启动调试

需要启动两个服务 target、popup。

### 启动 target 服务

```
http-server -p 3010 ./target
```

### 启动 popup 服务

```
http-server -p 3011 ./target
```


在浏览器打开：[http://127.0.0.1:3010](http://127.0.0.1:3010)


# 文档

- [window.postMessage 文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage)
- [http-server 文档](https://github.com/indexzero/http-server)