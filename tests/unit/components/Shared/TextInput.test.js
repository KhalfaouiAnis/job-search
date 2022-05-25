import { mount } from '@vue/test-utils'

import TextInput from '@/components/Shared/TextInput'

describe('TextInput', () => {
  it('communicates that user has entered characters', () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: '',
      },
    })
    const input = wrapper.find('input')
    input.setValue('m')
    input.setValue('me')
    input.setValue('meh')
    const messages = wrapper.emitted()['update:modelValue']
    expect(messages).toEqual([['m'], ['me'], ['meh']])
  })
})
