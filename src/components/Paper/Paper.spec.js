import { shallowMount } from '@vue/test-utils'
import Paper from './Paper.vue'

describe('Paper', () => {
  it('has an appropriate name property', () => {
    const wrapper = shallowMount(Paper)
    expect(wrapper.name()).toBe('FxPaper')
  })
})
