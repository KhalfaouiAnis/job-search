import mutations from '@/store/mutations'
import { createState, createJob, createDegree } from './utils'

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

  describe('RECEIVE_DEGREES', () => {
    it('receives degrees from API response', () => {
      const startingState = createState({ degrees: [] })
      const degree = createDegree()
      mutations.RECEIVE_DEGREES(startingState, [degree])
      expect(startingState.degrees).toEqual([degree])
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

  describe('ADD_SELECTED_DEGREES', () => {
    it('updates degrees that the user has chosen to filter jobs by', () => {
      const startingState = createState({ selectedDegrees: [] })
      mutations.ADD_SELECTED_DEGREES(startingState, ["Master's"])
      expect(startingState.selectedDegrees).toEqual(["Master's"])
    })
  })

  describe('CLEAR_USER_JOB_FILTER_SELECTIONS', () => {
    it('removes all job filters the user has chosen', () => {
      const startingState = createState({
        selectedOrganizations: ['random org'],
        selectedJobTypes: ['random jobtype'],
        selectedDegrees: ['random degree'],
      })
      mutations.CLEAR_USER_JOB_FILTER_SELECTIONS(startingState)
      expect(startingState.selectedOrganizations).toEqual([])
      expect(startingState.selectedJobTypes).toEqual([])
      expect(startingState.selectedDegrees).toEqual([])
    })
  })
})
