import Tabs from "../src/tabs";

const expect = chai.expect;
import Vue from 'vue'

import Toast from '../src/toast'
import TabsHead from "../src/tabs-head";
import TabsBody from "../src/tabs-body";
import TabsItem from "../src/tabs-item";
import TabsPane from "../src/tabs-pane";
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

  it('存在.', () => {
    expect(Toast).to.exist
  })

  describe('props',function(){
    it('接收 autoClose',(done)=>{
      this.timeout(15000);
      done()
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast);
      const vm = new Constructor({
        propsData:{
          autoClose:true,
          autoCloseDelay: 3
        }
      }).$mount(div)
      vm.$on('clone',()=>{
        expect(document.body.contains(vm.$el)).to.eq(true)
        done()
      })
    })
  })

  it("接收 closeButton",()=>{
    const callback = sinon.fake();
    const Constructor = Vue.extend(Toast);
    const vm = new Constructor({
      propsData:{
        closeButton:{
          text:'off',
          callback
        }
      }
    }).$mount()
    let closeButton = vm.$el.querySelector('.close')
    expect(closeButton.textContent.trim()).to.eq('off')
    closeButton.click();
    expect(callback).to.have.been.called
  })


  // 接收enableHtml测试用例;
  // it('接受 enableHtml', () => {
  //   const Constructor = Vue.extend(Toast)
  //   const vm = new Constructor({
  //     propsData: {enableHtml:true}
  //   })
  //   vm.$slots.default = ['<strong id="test">hi</strong>']
  //   vm.$mount()
  //   let strong = vm.$el.querySelector('#test')
  //   expect(strong).to.exist
  // })

  it('接受 position', () => {
    const Constructor = Vue.extend(Toast)
    const vm = new Constructor({
      propsData: {
        position: 'bottom'
      }
    }).$mount()
    expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
  })




})