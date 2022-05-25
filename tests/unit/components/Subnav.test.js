import { mount } from '@vue/test-utils'
import Subnav from '@/components/Subnav'

describe('Subnav', () => {
  describe('when user is on job page', () => {
    it('displays hob count', () => {
      const wrapper = mount(Subnav, {
        global: {
          stubs: {
            fontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          }
        },
      })
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.exists()).toBe(true)
    })
  })
  describe('when user is not on job page', () => {
    it('does not display job count', () => {
      const wrapper = mount(Subnav, {
        global: {
          stubs: {
            fontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          }
        },
      })
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.exists()).toBe(false)
    })
  })
})
