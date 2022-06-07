<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="uniqueDegrees"
    :mutation="ADD_SELECTED_DEGREES"
    data-test="degrees-filter"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUniqueDegrees } from '@/store/composables'
import { ADD_SELECTED_DEGREES } from '@/store/constants'

import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue'

export default defineComponent({
  name: 'JobFiltersSidebar',
  components: {
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueDegrees = useUniqueDegrees()

    return {
      uniqueDegrees,
      ADD_SELECTED_DEGREES,
    }
  },
})
</script>
