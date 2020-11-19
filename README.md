# UI 一个Vue UI组件库

[![Build Status](https://travis-ci.org/gongjianOnline/vueWheel.svg?branch=main)](https://travis-ci.org/gongjianOnline/vueWheel)

## 生态系统


## 开始使用


1. 安装
使用本框架前,请在css中开启border-box

```css
    *,*::before,*::after{box-sizing: border-box;}
```
还需要默认设置颜色等变量(后续会改为SCSS变量)
```
    html{
      --button-height: 32px;
      --font-size: 14px;
      --button-bg: #fff;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #666
    }
```
2. 安装
```
    npm install --save gongjian-vuewheel
```


3. 引入gongjian-vuewheel
```
import {Button,ButtonGroup,Icon} from "gongjian-vuewheel"
import 'gongjian-vuewheel/dist/index.css'
export default {
    name:"app"
    components:{
        'g-icon':Icon,
        'g-icon':Button
    }
}
```




运行
```
  parcel index.html --no-cache
```



## 提问

## 变更记录

## 联系方式


## 贡献代码



