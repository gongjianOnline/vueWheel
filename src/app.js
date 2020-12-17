import Vue from "vue"
import Button from "./button"
import Icon from "./icon"
import ButtonGroup from "./button-group"
import Input from "./input"
import Row from "./row"
import Col from "./col"
import Layout from "./layout"
import Header from "./header"
import Sider from "./sider"
import Content from "./content"
import Footer from "./footer"
import Toast  from "./toast"
import plugin from "./plugin.js";
import Tabs from "./tabs";
import TabsHead from "./tabs-head"
import TabsBody from "./tabs-body"
import TabsPane from "./tabs-pane"
import TabsItem from "./tabs-item"
import Popover from "./popover"
import Collapse from "./collapse"
import CollapseItem from "./collapse-item"

Vue.component("g-button",Button)
Vue.component("g-icon",Icon)
Vue.component("g-button-group",ButtonGroup)
Vue.component("g-input",Input)
Vue.component("g-row",Row)
Vue.component("g-col",Col)
Vue.component("g-layout",Layout)
Vue.component("g-header",Header)
Vue.component("g-sider",Sider)
Vue.component("g-content",Content)
Vue.component("g-footer",Footer)
Vue.component("g-toast",Toast)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)
Vue.component("g-popover",Popover)
Vue.component("g-popover",Popover)
Vue.component("g-collapse",Collapse)
Vue.component('g-collapse-item',CollapseItem)

Vue.use(plugin)

new Vue({
  el:"#app",
  data(){
    return{
      loading1:true,
      loading2:false,
      message:"",
      selectedTab:"sports",
      selectedTabs:'1'
    }
  },
  created(){

  },
  methods:{
    yyy(data){},
    showToast(){
      this.$toast("<h2>12346</h2>",{
        enableHtml:true,
        position:'bottom',
        autoClose:3
      })
    }
  }
})
