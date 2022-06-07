<template>
  <div class="mt-5">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded-none w-full text-base"
      placeholder="Computer programming, Finance degree"
      data-test="skills-search-input"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

import { key } from '@/store'
import { UPDATE_SKILLS_SEARCH_TERM } from '@/store/constants'

export default defineComponent({
  name: 'JobFiltersSidebar',

  setup() {
    const store = useStore(key)
    const skillsSearchTerm = computed({
      get() {
        return store.state.skillsSearchTerm
      },
      set(value: string) {
        store.commit(UPDATE_SKILLS_SEARCH_TERM, value)
      },
    })

    return { skillsSearchTerm }
  },
})
</script>
