import { shallowMount } from '@vue/test-utils'
import ChipGroup from './ChipGroup.vue'

describe('ChipGroup', () => {
  it('has an appropriate name property', () => {
    const wrapper = shallowMount(ChipGroup)
    expect(wrapper.name()).toBe('FxChipGroup')
  })
})
