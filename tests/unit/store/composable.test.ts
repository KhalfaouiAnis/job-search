import { useStore } from 'vuex'
jest.mock('vuex')

import {
  useFilteredJobs,
  useUniqueJobTypes,
  useUniqueOrganizations,
  useFetchJobsDispatch,
} from '@/store/composables'

const useStoreMock = useStore as jest.Mock

describe('composables', () => {
  describe('useFilteredJobs', () => {
    it('retrieves filtered jobs from the store', () => {
      useStoreMock.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }],
        },
      })
    })
    const result = useFilteredJobs()
    expect(result.value).toEqual([{ id: 1 }])
  })

  describe('useUniqueJobTypes', () => {
    it('retrieves unique jobs types from the store', () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_JOB_TYPES: new Set(['Full-time']),
        },
      })
    })
    const result = useUniqueJobTypes()
    expect(result.value).toEqual(new Set(['Full-time']))
  })

  describe('useUniqueOrganizations', () => {
    it('retrieves unique orgs from the store', () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_JOB_TYPES: new Set(['Apple']),
        },
      })
    })
    const result = useUniqueOrganizations()
    expect(result.value).toEqual(new Set(['Apple']))
  })

  describe('useFetchJobsDispatch', () => {
    it('sends call to fetch jobs from api', () => {
      const dispatch = jest.fn()
      useStoreMock.mockReturnValue({ dispatch })
      useFetchJobsDispatch()
      expect(dispatch).toHaveBeenCalledWith('FETCH_JOB')
    })
  })
})
