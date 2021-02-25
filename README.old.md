# 从零到一手写React源码(一) 



## JSX渲染
我们在平时使用React的过程中会编写JSX语法，那JSX语法是如何编译最终转化成DOM,展现在页面上的呢？请看下图：

<img src="https://img.zhufengpeixun.com/1609297534961">

其实，JSX语法通过Bable编译会变成React.createElement('h1',null,'hello')

<img src="./images/jsx-render.png">


### React.createElement实现





