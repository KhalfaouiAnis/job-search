import actions from '@/store/actions'

import getJobs from '@/api/getJobs'
jest.mock('@/api/getJobs')

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
