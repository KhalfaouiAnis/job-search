<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">what do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="clear filters" type="secondary" />
        </div>
      </div>
      <job-filters-sidebar-checkbox-group
        header="Job Types"
        :unique-values="uniqueJobTypes"
        :mutation="ADD_SELECTED_JOB_TYPES"
      />
      <job-filters-sidebar-checkbox-group
        header="Organizations"
        :unique-values="uniqueOrganizations"
        :mutation="ADD_SELECTED_ORGANIZATIONS"
      />
    </section>
  </div>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue'
import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue'
import { useUniqueOrganizations, useUniqueJobTypes } from '@/store/composables'
import {
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANIZATIONS,
} from '@/store/constants'

export default {
  name: 'JobFiltersSidebar',
  components: {
    JobFiltersSidebarCheckboxGroup,
    ActionButton,
  },
  setup() {
    const uniqueJobTypes = useUniqueJobTypes()
    const uniqueOrganizations = useUniqueOrganizations()

    return {
      uniqueJobTypes,
      uniqueOrganizations,
      ADD_SELECTED_JOB_TYPES,
      ADD_SELECTED_ORGANIZATIONS,
    }
  },
}
</script>
