import { shallowMount } from '@vue/test-utils'

import { useStore } from 'vuex'
jest.mock('vuex')
const useStoreMock = useStore as jest.Mock

import { useRouter } from 'vue-router'
jest.mock('vue-router')
const useRouterMock = useRouter as jest.Mock

import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue'

describe('JobFiltersSidebarCheckboxGroup', () => {
  const createConfig = (props = {}) => ({
    props: {
      uniqueValues: new Set(['ValueA', 'ValueB']),
      mutation: 'Some mutation',
      ...props,
    },
  })
  it('renders unique list of job types for filtering jobs', () => {
    const commit = jest.fn()
    const subscribe = jest.fn()
    useStoreMock.mockReturnValue({ commit, subscribe })
    const props = { uniqueValues: new Set(['ValueA', 'ValueB']) }
    const wrapper = shallowMount(
      JobFiltersSidebarCheckboxGroup,
      createConfig(props)
    )

    const inputLabels = wrapper.findAll("[data-test='value']")
    const inputValues = inputLabels.map((node) => node.text())
    expect(inputValues).toEqual(['ValueA', 'ValueB'])
  })

  describe('when user clicks checkbox', () => {
    it('communicates that user has selected checkbox for value', async () => {
      const commit = jest.fn()
      const subscribe = jest.fn()
      useStoreMock.mockReturnValue({ commit, subscribe })
      useRouterMock.mockReturnValue({ push: jest.fn() })
      const props = {
        uniqueValues: new Set(['Full-time']),
        mutation: 'SOME_MUTATION',
      }
      const wrapper = shallowMount(
        JobFiltersSidebarCheckboxGroup,
        createConfig(props)
      )

      const fullTimeInput = wrapper.find("[data-test='Full-time']")
      await fullTimeInput.setValue(true)

      expect(commit).toHaveBeenCalledWith('SOME_MUTATION', ['Full-time'])
    })

    it('navigate user to job results page to see fresh batch of filtered jobs', async () => {
      useStoreMock.mockReturnValue({ commit: jest.fn(), subscribe: jest.fn() })

      const push = jest.fn()
      useRouterMock.mockReturnValue({ push })
      const props = {
        uniqueValues: new Set(['Full-time']),
      }
      const wrapper = shallowMount(
        JobFiltersSidebarCheckboxGroup,
        createConfig(props)
      )

      const fullTimeInput = wrapper.find("[data-test='Full-time']")
      await fullTimeInput.setValue(true)

      expect(push).toHaveBeenCalledWith({ name: 'JobResults' })
    })
  })
})
