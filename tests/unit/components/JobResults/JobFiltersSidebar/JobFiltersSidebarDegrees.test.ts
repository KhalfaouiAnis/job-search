import { shallowMount } from '@vue/test-utils'
jest.mock('vuex')

import { useUniqueDegrees } from '@/store/composables'
jest.mock('@/store/composables')

const useUniqueDegreesMock = useUniqueDegrees as jest.Mock

import JobFiltersSidebarDegrees from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue'

describe('JobFiltersSidebarDegrees', () => {
  it('allows user to filter jobs by job types', () => {
    useUniqueDegreesMock.mockReturnValue(["Master's"])
    const wrapper = shallowMount(JobFiltersSidebarDegrees)
    const degreesFilter = wrapper.findComponent({
      name: 'JobFiltersSidebarCheckboxGroup',
    })

    const { uniqueValues, mutation } = degreesFilter.props()

    expect(uniqueValues).toEqual(["Master's"])
    expect(mutation).toBe('ADD_SELECTED_DEGREES')
  })
})
