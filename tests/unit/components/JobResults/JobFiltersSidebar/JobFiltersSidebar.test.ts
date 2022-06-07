import { shallowMount } from '@vue/test-utils'
jest.mock('vuex')

import JobFiltersSidebar from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue'

describe('JobFiltersSidebar', () => {
  it('allows user to filter jobs by jobtypes', () => {
    const wrapper = shallowMount(JobFiltersSidebar)
    expect(wrapper.exists()).toBe(true)
  })
})
