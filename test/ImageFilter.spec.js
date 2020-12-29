import { mount } from '@vue/test-utils'
import ImageFilter from '@/components/ImageFilter.vue'

describe('ImageFilter', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ImageFilter)
    expect(wrapper.vm).toBeTruthy()
  })
})
