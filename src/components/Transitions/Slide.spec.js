import { shallowMount } from '@vue/test-utils'
import Slide from './Slide.vue'

describe('Slide', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(Slide)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
