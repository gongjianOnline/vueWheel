import Button from "../src/button";

const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it("popover存在",()=>{
    expect(Popover).to.be.ok
  })
  it('可以设置position',  ()=>{
    Vue.component('g-popover',Popover)
    Vue.component('g-button',Button)
    const div = document.createElement('dev')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover position="top" ref="a">
        <template slot="content">
          <div>这是提示信息</div>
          <g-button @click="close">关闭</g-button>
        </template>
        <g-button>按钮</g-button>
      </g-popover>
    `
    const vm = new Vue({
      el:div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(()=>{
      const {contentWrapper} = vm.$refs.a.$refs
      expect(contentWrapper.classList.contains('position-bottom')).to.be.true;
      done()
    })
  })
  xit('可以设置trigger',(done)=>{
    Vue.component('g-popover',Popover)
    Vue.component('g-button',Button)
    const div = document.createElement('dev')
    document.body.appendChild(div)
    div.innerHTML = `
      <g-popover trigger="hover" position="top" ref="a">
        <template slot="content">
          <div>这是提示信息</div>
          <g-button @click="close">关闭</g-button>
        </template>
        <g-button>按钮</g-button>
      </g-popover>
    `
    const vm = new Vue({
      el:div
    })
    let event = new Event('mouseenter');
    vm.$el.dispatchEvent(event)
    vm.$nextTick(()=>{
      const {contentWrapper} = vm.$refs.a.$refs
      expect(contentWrapper).to.exist;
      done()
    })


  })





})