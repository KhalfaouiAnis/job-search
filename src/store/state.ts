import { GlobalState } from '@/store/types'

const state = (): GlobalState => {
  return {
    isLoggedIn: false,
    jobs: [],
    degrees: [],
    skillsSearchTerm: '',
    selectedDegrees: [],
    selectedOrganizations: [],
    selectedJobTypes: [],
  }
}

export default state
