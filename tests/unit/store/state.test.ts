import state from '@/store/state'

describe('state', () => {
  it('keeps track of whether user is logged in', () => {
    const startingState = state()
    expect(startingState.isLoggedIn).toBe(false)
  })

  it('stores job listings', () => {
    const startingState = state()
    expect(startingState.jobs).toEqual([])
  })

  it('stores all degrees a job can require', () => {
    const startingState = state()
    expect(startingState.degrees).toEqual([])
  })

  it('stores user search term to skills and qualifications', () => {
    const startingState = state()
    expect(startingState.skillsSearchTerm).toBe('')
  })

  it('stores organizations user would like to filer jobs by', () => {
    const startingState = state()
    expect(startingState.selectedOrganizations).toEqual([])
  })

  it('stores jobTypes user would like to filer jobs by', () => {
    const startingState = state()
    expect(startingState.selectedJobTypes).toEqual([])
  })

  it('stores degrees user would like to filer jobs by', () => {
    const startingState = state()
    expect(startingState.selectedDegrees).toEqual([])
  })
})
