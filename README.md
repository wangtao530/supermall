# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 开发步骤：
```
1、加入git版本控制
2、划分目录结构
3、css文件的引入(normallize.css)
4、vue.config.js和.editorconfig
5、项目模块的划分tarbar的引入
6、浏览器标题栏小图标的修改
7、首页导航栏的封装和使用
8、首页多个数据请求的封装
9、首页轮播图的封装，使用swiper6
10、首页推荐的封装
11、FeatureView的封装
12、TabControl的封装
13、保存首页商品数据的数据结构设计（商品后台数据的设计及后台服务的搭建），数据的请求及展示
14、tabControl的点击切换展示的商品数据
15、better-scorll的下载与安装、简单使用及配置选项，并在项目中将其封装成Scroll组件的使用
16、BackTop组件的封装与使用（点击跳转到顶部及显示与隐藏）
17、通过better-scroll组件的refresh方法解决滚动区域的bug，（图片加载完refresh，通过事件总线解决非父子组件之间的通信，以及通过通过组件的.$refs引用组件从而使用其的方法）（防抖函数的使用）
18、完成上拉加载更多
19、完成tabControl的吸顶效果（获取到其offsetTop值，在scroll范围外添加一份其拷贝2，设置2的位置为其消失的位置，当其消失时让2显示，其出现2消失，并保持它们俩的事件与currentIndex一致）
20、Home离开时状态的保持，（keep-alive实现）
```