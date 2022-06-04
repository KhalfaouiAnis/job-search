import {
  ADD_SELECTED_ORGANIZATIONS,
  ADD_SELECTED_JOB_TYPES,
  LOGIN_USER,
  RECEIVE_JOBS,
} from '@/store/constants'

import { GlobalState } from '@/store/types'
import { Job } from '@/api/types'

const mutations = {
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true
  },
  [RECEIVE_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs
  },
  [ADD_SELECTED_ORGANIZATIONS](state: GlobalState, organizations: string[]) {
    state.selectedOrganizations = organizations
  },
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, jobTypes: string[]) {
    state.selectedJobTypes = jobTypes
  },
}

export default mutations
