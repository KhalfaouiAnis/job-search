<template>
  <div>Job page</div>
</template>

<script lagn="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'JobView',
  setup() {
    const route = useRoute()
    const currentJobId = route.params.id

    return { currentJobId }
  },
})
</script>
