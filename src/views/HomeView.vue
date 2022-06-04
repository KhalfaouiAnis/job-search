<template>
  <hero />
</template>

<script lagn="ts">
import { defineComponent } from 'vue'
import Hero from '@/components/JobSearch/Hero.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Hero,
  },
})
</script>
