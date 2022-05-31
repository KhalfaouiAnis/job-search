import getters from '@/store/getters'

describe('getters', () => {
  describe('UNIQUE_ORGANIZATIONS', () => {
    it('finds unique orgs from list of jobs', () => {
      const state = {
        jobs: [
          { organization: 'Google' },
          { organization: 'Youtube' },
          { organization: 'Google' },
        ],
      }
      const result = getters.UNIQUE_ORGANIZATIONS(state)
      expect(result).toEqual(new Set(['Google', 'Youtube']))
    })
  })
  describe('FILTER_JOBS_BY_ORGANIZATIONS', () => {
    it('identifies jobs that are associated with the given organizations', () => {
      const state = {
        jobs: [
          { organization: 'Google' },
          { organization: 'Microsoft' },
          { organization: 'Amazon' },
        ],
        selectedOrganizations: ['Google', 'Amazon'],
      }
      const filteredJobs = getters.FILTER_JOBS_BY_ORGANIZATIONS(state)
      expect(filteredJobs).toEqual([
        { organization: 'Google' },
        { organization: 'Amazon' },
      ])
    })

    describe('when the user has not selected any organiations', () => {
      it('returns all jobs', () => {
        const state = {
          jobs: [
            { organization: 'Google' },
            { organization: 'Microsoft' },
            { organization: 'Amazon' },
          ],
          selectedOrganizations: [],
        }
        const filteredJobs = getters.FILTER_JOBS_BY_ORGANIZATIONS(state)
        expect(filteredJobs).toEqual([
          { organization: 'Google' },
          { organization: 'Microsoft' },
          { organization: 'Amazon' },
        ])
      })
    })
  })
})
