import getters from '@/store/getters'
import { createState, createJob, createDegree } from './utils'

describe('getters', () => {
  // ORGANIZATIONS
  describe('UNIQUE_ORGANIZATIONS', () => {
    it('finds unique orgs from list of jobs', () => {
      const jobs = [
        createJob({ organization: 'Google' }),
        createJob({ organization: 'Youtube' }),
        createJob({ organization: 'Google' }),
      ]
      const state = createState({ jobs })
      const result = getters.UNIQUE_ORGANIZATIONS(state)
      expect(result).toEqual(new Set(['Google', 'Youtube']))
    })
  })

  // JOB TYPES
  describe('UNIQUE_JOB_TYPES', () => {
    it('finds unique job types from list of jobs', () => {
      const jobs = [
        createJob({ jobType: 'full-time' }),
        createJob({ jobType: 'temporary' }),
        createJob({ jobType: 'full-time' }),
      ]
      const state = createState({ jobs })
      const result = getters.UNIQUE_JOB_TYPES(state)
      expect(result).toEqual(new Set(['full-time', 'temporary']))
    })
  })

  // DEGREES
  describe('UNIQUE_DEGREES', () => {
    it('extracts unique degree values', () => {
      const degrees = [createDegree({ degree: "Master's" })]
      const state = createState({ degrees })
      const result = getters.UNIQUE_DEGREES(state)
      expect(result).toEqual(["Master's"])
    })
  })

  describe('INCLUDE_JOB_BY_ORGANIZATION', () => {
    describe('when the user has not selected any organizations', () => {
      it('includes job', () => {
        const state = createState({
          selectedOrganizations: [],
        })
        const job = createJob({ organization: 'Google' })
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job)
        expect(includeJob).toBe(true)
      })
    })

    it('identifies if job is associated with given organizations', () => {
      const state = createState({
        selectedOrganizations: ['Google', 'Microsoft'],
      })
      const job = createJob({ organization: 'Google' })
      const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job)
      expect(includeJob).toBe(true)
    })
  })

  describe('INCLUDE_JOB_BY_JOB_TYPE', () => {
    describe('when the user has not selected any job types', () => {
      it('includes job', () => {
        const state = createState({
          selectedJobTypes: [],
        })
        const job = createJob({ jobType: 'Full-time' })
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job)
        expect(includeJob).toBe(true)
      })
    })

    it('identifies if job is associated with given JobTypes', () => {
      const state = createState({
        selectedJobTypes: ['Full-time', 'Part-time'],
      })
      const job = createJob({ jobType: 'Full-time' })
      const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job)
      expect(includeJob).toBe(true)
    })
  })

  describe('INCLUDE_JOB_BY_DEGREE', () => {
    describe('when the user has not selected any degrees', () => {
      it('includes job', () => {
        const state = createState({
          selectedDegrees: [],
        })
        const job = createJob({ degree: "Bachelor's" })
        const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(job)
        expect(includeJob).toBe(true)
      })
    })

    it('identifies if job is associated with given degrees', () => {
      const state = createState({
        selectedDegrees: ['Ph.D', 'Associate'],
      })
      const job = createJob({ degree: 'Associate' })
      const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(job)
      expect(includeJob).toBe(true)
    })
  })
  describe('INCLUDE_JOB_BY_SKILL', () => {
    it('identifies if job is matches given skill', () => {
      const state = createState({
        skillsSearchTerm: 'Vue',
      })
      const job = createJob({ title: 'Vue Developer' })
      const includeJob = getters.INCLUDE_JOB_BY_SKILL(state)(job)
      expect(includeJob).toBe(true)
    })

    it('handles inconsistent character casing', () => {
      const state = createState({
        skillsSearchTerm: 'vuE',
      })
      const job = createJob({ title: 'Vue Developer' })
      const includeJob = getters.INCLUDE_JOB_BY_SKILL(state)(job)
      expect(includeJob).toBe(true)
    })
    describe('when the user does not entered any skill', () => {
      it('includes job', () => {
        const state = createState({
          skillsSearchTerm: '',
        })
        const job = createJob({ title: 'Vue Developer' })
        const includeJob = getters.INCLUDE_JOB_BY_SKILL(state)(job)
        expect(includeJob).toBe(true)
      })
    })
  })

  describe('FILTERED_JOBS', () => {
    it('filters jobs by org and job type and degree and skills', () => {
      const INCLUDE_JOB_BY_ORGANIZATION = jest.fn().mockReturnValue(true)
      const INCLUDE_JOB_BY_JOB_TYPE = jest.fn().mockReturnValue(true)
      const INCLUDE_JOB_BY_DEGREE = jest.fn().mockReturnValue(true)
      const INCLUDE_JOB_BY_SKILL = jest.fn().mockReturnValue(true)

      const mockGeters = {
        INCLUDE_JOB_BY_ORGANIZATION,
        INCLUDE_JOB_BY_JOB_TYPE,
        INCLUDE_JOB_BY_DEGREE,
        INCLUDE_JOB_BY_SKILL,
      }

      const job = createJob({ title: 'Best job ever' })
      const state = createState({
        jobs: [job],
      })

      const result = getters.FILTERED_JOBS(state, mockGeters)
      expect(result).toEqual([job])
      expect(INCLUDE_JOB_BY_ORGANIZATION).toHaveBeenCalledWith(job)
      expect(INCLUDE_JOB_BY_JOB_TYPE).toHaveBeenCalledWith(job)
      expect(INCLUDE_JOB_BY_DEGREE).toHaveBeenCalledWith(job)
      expect(INCLUDE_JOB_BY_SKILL).toHaveBeenCalledWith(job)
    })
  })
})
