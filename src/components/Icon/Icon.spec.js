import { shallowMount } from '@vue/test-utils'
import Icon from './Icon'

describe('Icon', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(Icon)
    const svg = wrapper.find('svg')
    expect(svg.name()).toBe('svg')  })
})
