import { shallowMount } from '@vue/test-utils'
import Flex from './Flex.js'

describe('Flex', () => {
  it('is has a gutter', () => {
    const wrapper = shallowMount(Flex, {
      propsData: {
        gutter: 40
      }
    })
  })
})
