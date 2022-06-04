import mutations from '@/store/mutations'
import { createState, createJob } from './utils'

describe('mutations', () => {
  describe('LOGIN_USER', () => {
    it('logs the user in', () => {
      const startingState = createState({ isLoggedIn: false })
      mutations.LOGIN_USER(startingState)
      expect(startingState.isLoggedIn).toBe(true)
    })
  })

  describe('RECEIVE_JOBS', () => {
    it('receives jobs from API response', () => {
      const startingState = createState({ jobs: [] })
      const job1 = createJob()
      const job2 = createJob()
      mutations.RECEIVE_JOBS(startingState, [job1, job2])
      expect(startingState.jobs).toEqual([job1, job2])
    })
  })

  describe('ADD_SELECTED_ORGANIZATIONS', () => {
    it('updates organizations that the user has chosen to filter jobs by', () => {
      const startingState = createState({ selectedOrganizations: [] })
      mutations.ADD_SELECTED_ORGANIZATIONS(startingState, ['Org1', 'Org2'])
      expect(startingState.selectedOrganizations).toEqual(['Org1', 'Org2'])
    })
  })

  describe('ADD_SELECTED_JOB_TYPES', () => {
    it('updates JobTypes that the user has chosen to filter jobs by', () => {
      const startingState = createState({ selectedJobTypes: [] })
      mutations.ADD_SELECTED_JOB_TYPES(startingState, [
        'Full-time',
        'Part-time',
      ])
      expect(startingState.selectedJobTypes).toEqual(['Full-time', 'Part-time'])
    })
  })
})
