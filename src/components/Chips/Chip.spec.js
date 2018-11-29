import { shallowMount } from '@vue/test-utils'
import Chip from './Chip.vue'

describe('Chip', () => {
  it('has an appropriate name property', () => {
    const wrapper = shallowMount(Chip)
    expect(wrapper.name()).toBe('FxChip')
  })
})
