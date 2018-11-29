import { shallowMount } from '@vue/test-utils'
import DropdownItem from './DropdownItem.vue'

describe('DropdownItem', () => {
  it('has an appropriate name property', () => {
    const wrapper = shallowMount(DropdownItem)
    expect(wrapper.name()).toBe('FxDropdownItem')
  })
})
