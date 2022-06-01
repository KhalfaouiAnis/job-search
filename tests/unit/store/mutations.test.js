import mutations from '@/store/mutations'

describe('mutations', () => {
  describe('LOGIN_USER', () => {
    it('logs the user in', () => {
      const state = { isLoggedIn: false }
      mutations.LOGIN_USER(state)
      expect(state).toEqual({ isLoggedIn: true })
    })
  })

  describe('RECEIVE_JOBS', () => {
    it('receives jobs from API response', () => {
      const state = { jobs: [] }
      mutations.RECEIVE_JOBS(state, ['Java Engineer'])
      expect(state).toEqual({ jobs: ['Java Engineer'] })
    })
  })

  describe('ADD_SELECTED_ORGANIZATIONS', () => {
    it('updates organizations that the user has chosen to filter jobs by', () => {
      const state = { selectedOrganizations: [] }
      mutations.ADD_SELECTED_ORGANIZATIONS(state, ['Org1', 'Org2'])
      expect(state).toEqual({
        selectedOrganizations: ['Org1', 'Org2'],
      })
    })
  })

  describe('ADD_SELECTED_JOB_TYPES', () => {
    it('updates JobTypes that the user has chosen to filter jobs by', () => {
      const state = { selectedJobTypes: [] }
      mutations.ADD_SELECTED_JOB_TYPES(state, ['full-time', 'part-time'])
      expect(state).toEqual({
        selectedJobTypes: ['full-time', 'part-time'],
      })
    })
  })
})
