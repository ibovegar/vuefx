import { shallowMount } from '@vue/test-utils'
import Fade from './Fade'

describe('Fade', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(Fade)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
