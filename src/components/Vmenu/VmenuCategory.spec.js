import { shallowMount } from '@vue/test-utils'
import VmenuCategory from './VmenuCategory.vue'

describe('VmenuCategory', () => {
  it('has an appropriate name property', () => {
    const wrapper = shallowMount(VmenuCategory)
    expect(wrapper.name()).toBe('FxVmenuCategory')
  })
})
