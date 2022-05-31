import {
  ADD_SELECTED_ORGANIZATIONS,
  LOGIN_USER,
  RECEIVE_JOBS,
} from '@/store/constants'

const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs
  },
  [ADD_SELECTED_ORGANIZATIONS](state, organizations) {
    state.selectedOrganizations = organizations
  },
}

export default mutations
