<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <job-filters-sidebar-prompt />

      <accordion header="Skills and Qualifications">
        <job-filters-sidebar-skills />
      </accordion>
      <accordion header="Degrees">
        <job-filters-sidebar-degrees />
      </accordion>
      <accordion header="Job Types">
        <job-filters-sidebar-job-types />
      </accordion>
      <accordion header="Organizations">
        <job-filters-sidebar-organizations />
      </accordion>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import { key } from '@/store'
import { UPDATE_SKILLS_SEARCH_TERM } from '@/store/constants'

import Accordion from '@/components/Shared/Accordion.vue'
import JobFiltersSidebarPrompt from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarPrompt.vue'
import JobFiltersSidebarDegrees from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue'
import JobFiltersSidebarJobTypes from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue'
import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue'
import JobFiltersSidebarSkills from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarSkills.vue'

export default defineComponent({
  name: 'JobFiltersSidebar',
  components: {
    JobFiltersSidebarPrompt,
    JobFiltersSidebarDegrees,
    JobFiltersSidebarJobTypes,
    JobFiltersSidebarOrganizations,
    JobFiltersSidebarSkills,
    Accordion,
  },
  setup() {
    const parseSkillsSearchTerm = () => {
      const route = useRoute()
      const store = useStore(key)
      const role = route.query.role || ''
      store.commit(UPDATE_SKILLS_SEARCH_TERM, role)
    }
    onMounted(parseSkillsSearchTerm)
  },
})
</script>
