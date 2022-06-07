import { computed } from 'vue'
import { useStore } from 'vuex'

import {
  UNIQUE_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  UNIQUE_DEGREES,
  FETCH_DEGREES,
  FILTERED_JOBS,
  FETCH_JOBS,
} from '@/store/constants'

import { Job } from '@/api/types'

import { key } from '@/store'

/* GETTERS */
export const useFilteredJobs = () => {
  const store = useStore(key)
  return computed<Job[]>(() => store.getters[FILTERED_JOBS])
}

export const useUniqueJobTypes = () => {
  const store = useStore(key)
  return computed<Set<string>>(() => store.getters[UNIQUE_JOB_TYPES])
}

export const useUniqueOrganizations = () => {
  const store = useStore(key)
  return computed<Set<string>>(() => store.getters[UNIQUE_ORGANIZATIONS])
}

export const useUniqueDegrees = () => {
  const store = useStore(key)
  return computed<string[]>(() => store.getters[UNIQUE_DEGREES])
}

/* ACTIONS */
export const useFetchJobsDispatch = () => {
  const store = useStore(key)
  store.dispatch(FETCH_JOBS)
}

export const useFetchDegreesDispatch = () => {
  const store = useStore(key)
  store.dispatch(FETCH_DEGREES)
}
