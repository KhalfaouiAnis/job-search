<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>
    <template #subtitle>
      <h2 class="w-full my-4 text-base font-light">
        It's awesome working here,why don't you came join us!
      </h2>
    </template>
  </header-container>
</template>

<script lagn="ts">
import { defineComponent } from 'vue'
import HeaderContainer from '@/components/Shared/HeaderContainer.vue'

export default defineComponent({
  name: 'TeamsView',
  components: {
    HeaderContainer,
  },
})
</script>
