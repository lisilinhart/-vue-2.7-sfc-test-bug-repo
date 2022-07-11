import { mount } from '@vue/test-utils'
import RegularComponent from '@/components/RegularComponent.vue'
import SFCComponent from '@/components/SFCComponent.vue'
import SFCComponentPlugin from '@/components/SFCComponentPlugin.vue'

describe('Regular Component', () => {
  it('renders options api', () => {
    const msg = 'new message'
    const wrapper = mount(RegularComponent, {
      propsData: { msg }
    })
    expect(wrapper.html()).toMatch('new message - mounted')
  })
})

describe('SFC Component', () => {
  it('renders composition api', () => {
    const msg = 'new message'
    const wrapper = mount(SFCComponent, {
      propsData: { msg }
    })
    expect(wrapper.html()).toMatch('new message - mounted')
  })
})

describe('SFC Component Plugin', () => {
  it('renders composition api', () => {
    const msg = 'new message'
    const wrapper = mount(SFCComponentPlugin, {
      propsData: { msg }
    })
    expect(wrapper.html()).toMatch('new message - mounted')
  })
})
