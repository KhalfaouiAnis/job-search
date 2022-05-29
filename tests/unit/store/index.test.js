import { state, mutations, actions } from '@/store'

import getJobs from '@/api/getJobs'
jest.mock('@/api/getJobs')

describe('state', () => {
  it('keeps track of whether user is logged in', () => {
    const startingState = state()
    expect(startingState.isLoggedIn).toBe(false)
  })
  it('stores job listings', () => {
    const startingState = state()
    expect(startingState.jobs).toEqual([])
  })
})

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
      mutations.RECEIVE_JOBS(state, [
        { jobs: [{ id: 1, title: 'Java Engineer' }] },
      ])
      expect(state).toEqual({ jobs: [{ id: 1, title: 'Java Engineer' }] })
    })
  })
})

describe('actions', () => {
  describe('fetch jobs', () => {
    beforeEach(() => {
      getJobs.mockResolvedValue([{ id: 1, title: 'Java Engineer' }])
    })

    it('makes a request to fetch jobs', async () => {
      const context = { commit: jest.fn() }
      await actions.FETCH_JOBS(context)
      expect(getJobs).toHaveBeenCalled()
    })

    it('sends message to save received jobs in store', async () => {
      const commit = jest.fn()
      const context = { commit }
      await actions.FETCH_JOBS(context)
      expect(commit).toHaveBeenCalledWith('RECEIVE_JOBS', [
        { id: 1, title: 'Java Engineer' },
      ])
    })
  })
})
