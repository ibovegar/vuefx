import { shallowMount } from '@vue/test-utils'
import Tabs from './Tabs.vue'

describe('Tabs', () => {
  it('has an appropriate name property', () => {
    const wrapper = shallowMount(Tabs)
    expect(wrapper.name()).toBe('FxTabs')
  })
})
