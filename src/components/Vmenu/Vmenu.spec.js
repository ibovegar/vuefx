import { shallowMount } from '@vue/test-utils'
import Vmenu from './Vmenu.vue'

describe('Vmenu', () => {
  it('has an appropriate name property', () => {
    const wrapper = shallowMount(Vmenu)
    expect(wrapper.name()).toBe('FxVmenu')
  })
})
