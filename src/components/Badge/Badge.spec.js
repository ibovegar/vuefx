import { shallowMount } from '@vue/test-utils'
import Badge from './Badge.vue'

describe('Badge', () => {
  it('has an appropriate name property', () => {
    const wrapper = shallowMount(Badge)
    expect(wrapper.name()).toBe('FxBadge')
  })
})
