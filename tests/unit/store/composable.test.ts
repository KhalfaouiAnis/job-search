import { useStore } from 'vuex'
jest.mock('vuex')
const useStoreMock = useStore as jest.Mock

import {
  useFilteredJobs,
  useUniqueJobTypes,
  useUniqueOrganizations,
  useUniqueDegrees,
  useFetchJobsDispatch,
  useFetchDegreesDispatch,
} from '@/store/composables'

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

  describe('useUniqueDegrees', () => {
    it('retrieves unique degrees from the store', () => {
      useStoreMock.mockReturnValue({
        getters: {
          UNIQUE_DEGREES: ["Master's"],
        },
      })
    })
    const result = useUniqueDegrees()
    expect(result.value).toEqual(["Master's"])
  })

  describe('useFetchJobsDispatch', () => {
    it('sends call to fetch jobs from api', () => {
      const dispatch = jest.fn()
      useStoreMock.mockReturnValue({ dispatch })
      useFetchJobsDispatch()
      expect(dispatch).toHaveBeenCalledWith('FETCH_JOB')
    })
  })

  describe('useFetchDegreesDispatch', () => {
    it('sends call to fetch degrees from api', () => {
      const dispatch = jest.fn()
      useStoreMock.mockReturnValue({ dispatch })
      useFetchDegreesDispatch()
      expect(dispatch).toHaveBeenCalledWith('FETCH_DEGREES')
    })
  })
})
