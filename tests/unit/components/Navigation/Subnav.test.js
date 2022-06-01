import { mount } from '@vue/test-utils'
import Subnav from '@/components/Navigation/Subnav'

describe('Subnav', () => {
  const createConfig = (routeName, $store = {}) => ({
    global: {
      mocks: {
        $route: {
          name: routeName,
        },
        $store,
      },
      stubs: {
        fontAwesomeIcon: true,
      },
    },
  })
  describe('when user is on job page', () => {
    it('displays job count', () => {
      const routeName = 'JobResults'
      const $store = {
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      }

      const wrapper = mount(Subnav, createConfig(routeName, $store))
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.text()).toMatch('2 jobs matched')
    })
  })

  describe('when user is not on job page', () => {
    it('does not display job count', () => {
      const routeName = 'Home'
      const wrapper = mount(Subnav, createConfig(routeName))
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.exists()).toBe(false)
    })
  })
})
