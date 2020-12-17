# 前端错误收集

前端的错误收集使用了两个 event : error, unhandledrejection

error 用于监听异步，同步，以及资源加载错误。
unhandlerejection 用于监听 Promise.reject 的错误或 async await （在没有 catch 的情况下）
