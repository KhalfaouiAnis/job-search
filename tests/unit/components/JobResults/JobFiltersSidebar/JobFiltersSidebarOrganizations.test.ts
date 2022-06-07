import { shallowMount } from '@vue/test-utils'
jest.mock('vuex')

import { useUniqueOrganizations } from '@/store/composables'
jest.mock('@/store/composables')

const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock

import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue'

describe('JobFiltersSidebarOrganizations', () => {
  it('allows user to filter jobs by organizations', () => {
    useUniqueOrganizationsMock.mockReturnValue(new Set(['AirBnB']))
    const wrapper = shallowMount(JobFiltersSidebarOrganizations)
    const organizationsFilter = wrapper.findComponent({
      name: 'JobFiltersSidebarCheckboxGroup',
    })

    const { uniqueValues, mutation } = organizationsFilter.props()

    expect(uniqueValues).toEqual(new Set(['AirBnB']))
    expect(mutation).toBe('ADD_SELECTED_ORGANIZATIONS')
  })
})
