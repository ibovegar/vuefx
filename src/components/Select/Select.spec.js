import { shallowMount } from '@vue/test-utils'
import Select from './Select.vue'

describe('Select', () => {
  it('has an appropriate name property', () => {
    const wrapper = shallowMount(Select)
    expect(wrapper.name()).toBe('FxSelect')
  })
})
