import {
  CLEAR_USER_JOB_FILTER_SELECTIONS,
  ADD_SELECTED_ORGANIZATIONS,
  UPDATE_SKILLS_SEARCH_TERM,
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_DEGREES,
  LOGIN_USER,
  RECEIVE_JOBS,
  RECEIVE_DEGREES,
} from '@/store/constants'

import { GlobalState } from '@/store/types'
import { Degree, Job } from '@/api/types'

const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true
  },

  [RECEIVE_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs
  },
  [RECEIVE_DEGREES](state: GlobalState, degrees: Degree[]) {
    state.degrees = degrees
  },

  [ADD_SELECTED_ORGANIZATIONS](state: GlobalState, organizations: string[]) {
    state.selectedOrganizations = organizations
  },
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, jobTypes: string[]) {
    state.selectedJobTypes = jobTypes
  },
  [ADD_SELECTED_DEGREES](state: GlobalState, degrees: string[]) {
    state.selectedDegrees = degrees
  },

  [UPDATE_SKILLS_SEARCH_TERM](state: GlobalState, skillsSearchTerm: string) {
    state.skillsSearchTerm = skillsSearchTerm
  },

  [CLEAR_USER_JOB_FILTER_SELECTIONS](state: GlobalState) {
    state.selectedOrganizations = []
    state.selectedJobTypes = []
    state.selectedDegrees = []
    state.skillsSearchTerm = ''
  },
}

export default mutations
