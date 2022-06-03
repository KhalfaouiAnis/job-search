import { mount } from '@vue/test-utils'

import { useStore } from 'vuex'
jest.mock('vuex')

import { useRouter } from 'vue-router'
jest.mock('vue-router')

import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue'

describe('JobFiltersSidebarCheckboxGroup', () => {
  const createConfig = (props = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: 'Some header',
      uniqueValues: new Set(['ValueA', 'ValueB']),
      mutation: 'Some mutation',
      ...props,
    },
  })
  it('renders unique list of job types for filtering jobs', async () => {
    const props = { uniqueValues: new Set(['ValueA', 'ValueB']) }
    const wrapper = mount(JobFiltersSidebarCheckboxGroup, createConfig(props))

    const clickableArea = wrapper.find("[data-test='clickable-area']")
    await clickableArea.trigger('click')

    const inputLabels = wrapper.findAll("[data-test='value']")
    const inputValues = inputLabels.map((node) => node.text())
    expect(inputValues).toEqual(['ValueA', 'ValueB'])
  })

  describe('when user clicks checkbox', () => {
    it('communicates that user has selected checkbox for value', async () => {
      const commit = jest.fn()
      useStore.mockReturnValue({ commit })
      useRouter.mockReturnValue({ push: jest.fn() })
      const props = {
        uniqueValues: new Set(['Full-time']),
        mutation: 'SOME_MUTATION',
      }
      const wrapper = mount(JobFiltersSidebarCheckboxGroup, createConfig(props))
      const clickableArea = wrapper.find("[data-test='clickable-area']")
      await clickableArea.trigger('click')

      const fullTimeInput = wrapper.find("[data-test='Full-time']")
      await fullTimeInput.setChecked()

      expect(commit).toHaveBeenCalledWith('SOME_MUTATION', ['Full-time'])
    })

    it('navigate user to job results page to see fresh batch of filtered jobs', async () => {
      useStore.mockReturnValue({ commit: jest.fn() })

      const push = jest.fn()
      useRouter.mockReturnValue({ push })
      const props = {
        uniqueValues: new Set(['Full-time']),
      }
      const wrapper = mount(JobFiltersSidebarCheckboxGroup, createConfig(props))
      const clickableArea = wrapper.find("[data-test='clickable-area']")
      await clickableArea.trigger('click')

      const fullTimeInput = wrapper.find("[data-test='Full-time']")
      await fullTimeInput.setChecked()

      expect(push).toHaveBeenCalledWith({ name: 'JobResults' })
    })
  })
})
