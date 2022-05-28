import { mount, RouterLinkStub } from '@vue/test-utils'

import JobListing from '@/components/JobResults/JobListing.vue'

describe('JobListing', () => {
  const createJobProps = (jobProps = {}) => ({
    title: 'Vue Developer',
    organization: 'AirBnB',
    locations: ['Jacksonville'],
    minimumQualifications: ['Practice', 'Develop'],
    ...jobProps,
  })
  const createConfig = (jobProps) => ({
    props: {
      job: {
        ...jobProps,
      },
    },
    global: {
      stubs: {
        'router-link': RouterLinkStub,
      },
    },
  })

  it('render job title', () => {
    const jobProps = createJobProps({ title: 'Vue Developer' })
    const wrapper = mount(JobListing, createConfig(jobProps))
    expect(wrapper.text()).toMatch('Vue Developer')
  })

  it('render job organization', () => {
    const jobProps = createJobProps({ organization: 'AirBnB' })
    const wrapper = mount(JobListing, createConfig(jobProps))
    expect(wrapper.text()).toMatch('AirBnB')
  })

  it('render job locations', () => {
    const jobProps = createJobProps({ locations: ['Orlando', 'Jacksonville'] })
    const wrapper = mount(JobListing, createConfig(jobProps))
    expect(wrapper.text()).toMatch('Orlando')
    expect(wrapper.text()).toMatch('Jacksonville')
  })

  it('render job qualifications', () => {
    const jobProps = createJobProps({
      minimumQualifications: ['Code', 'Develop'],
    })
    const wrapper = mount(JobListing, createConfig(jobProps))
    expect(wrapper.text()).toMatch('Code')
    expect(wrapper.text()).toMatch('Develop')
  })

  it('links to specific job page', () => {
    const jobProps = createJobProps({
      id: 15,
    })
    const wrapper = mount(JobListing, createConfig(jobProps))
    const jobPageLink = wrapper.findComponent(RouterLinkStub)
    const toProp = jobPageLink.props('to')
    expect(toProp).toBe('/jobs/results/15')
  })
})
