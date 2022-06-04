import axios from 'axios'
jest.mock('axios')

import getJobs from '@/api/getJobs'

const axiosGetMock = axios.get as jest.Mock

describe('getJobs', () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
      data: [{ id: 1, title: 'Java Engineer' }],
    })
  })

  it('fetch jobs that condidates can apply to', async () => {
    await getJobs()
    expect(axios.get).toHaveBeenCalledWith('http://testapi.com/jobs')
  })

  it('extracts jobs from response', async () => {
    const data = await getJobs()
    expect(data).toEqual([{ id: 1, title: 'Java Engineer' }])
  })
})
