import { shallowMount } from '@vue/test-utils'
import Grow from './Grow.vue'

describe('Grow', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(Grow)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
