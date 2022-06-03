import { mount } from '@vue/test-utils'

import { useFilteredJobs } from '@/store/composables'
import useConfirmRoute from '@/composables/useConfirmRoute'

jest.mock('@/store/composables')
jest.mock('@/composables/useConfirmRoute')

import Subnav from '@/components/Navigation/Subnav'

describe('Subnav', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        fontAwesomeIcon: true,
      },
    },
  })

  describe('when user is on job page', () => {
    it('displays job count', () => {
      useConfirmRoute.mockReturnValue(true)
      useFilteredJobs.mockReturnValue([{ id: 1 }, { id: 2 }])

      const wrapper = mount(Subnav, createConfig())
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.text()).toMatch('2 jobs matched')
    })
  })

  describe('when user is not on job page', () => {
    it('does not display job count', () => {
      useConfirmRoute.mockReturnValue(false)
      useFilteredJobs.mockReturnValue([])

      const wrapper = mount(Subnav, createConfig())
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.exists()).toBe(false)
    })
  })
})
