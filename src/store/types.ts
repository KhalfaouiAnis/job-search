import { Job, Degree } from '@/api/types'

export interface GlobalState {
  isLoggedIn: boolean
  jobs: Job[]
  degrees: Degree[]
  skillsSearchTerm: string
  selectedDegrees: string[]
  selectedOrganizations: string[]
  selectedJobTypes: string[]
}
