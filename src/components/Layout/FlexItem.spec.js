import { shallowMount } from '@vue/test-utils'
import FlexItem from './FlexItem.js'

describe('FlexItem', () => {
  it('is a Vue instance', () => {
    const wrapper = shallowMount(FlexItem)
    expect(wrapper.exists()).toBe(true)
  })
})
