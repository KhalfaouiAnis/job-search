import { mount, RouterLinkStub } from '@vue/test-utils'

import JobListing from '@/components/JobResults/JobListing.vue'
import { Job } from '@/api/types'

import { createJob } from '../../store/utils'

describe('JobListing', () => {
  const createConfig = (job: Job) => ({
    props: {
      job: {
        ...job,
      },
    },
    global: {
      stubs: {
        'router-link': RouterLinkStub,
      },
    },
  })

  it('render job title', () => {
    const job = createJob({ title: 'Vue Developer' })
    const wrapper = mount(JobListing, createConfig(job))
    expect(wrapper.text()).toMatch('Vue Developer')
  })

  it('render job organization', () => {
    const job = createJob({ organization: 'AirBnB' })
    const wrapper = mount(JobListing, createConfig(job))
    expect(wrapper.text()).toMatch('AirBnB')
  })

  it('render job locations', () => {
    const job = createJob({ locations: ['Orlando', 'Jacksonville'] })
    const wrapper = mount(JobListing, createConfig(job))
    expect(wrapper.text()).toMatch('Orlando')
    expect(wrapper.text()).toMatch('Jacksonville')
  })

  it('render job qualifications', () => {
    const job = createJob({
      minimumQualifications: ['Code', 'Develop'],
    })
    const wrapper = mount(JobListing, createConfig(job))
    expect(wrapper.text()).toMatch('Code')
    expect(wrapper.text()).toMatch('Develop')
  })

  it('links to specific job page', () => {
    const job = createJob({
      id: 15,
    })
    const wrapper = mount(JobListing, createConfig(job))
    const jobPageLink = wrapper.findComponent(RouterLinkStub)
    const toProp = jobPageLink.props('to')
    expect(toProp).toBe('/jobs/results/15')
  })
})
