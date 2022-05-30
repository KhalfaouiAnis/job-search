<template>
  <main class="flex flex-col h-screen">
    <section class="flex flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1" />
        <div class="col-start-2 col-span-5">
          <headline />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            class="w-80 h-80 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            alt="Can't load image"
          />
        </div>
        <div class="col-start-12 col-span-1" />
      </div>
    </section>
    <spotlight class="flex flex-row justify-center pb-16">
      <template #default="{ img, title, description }">
        <router-link
          to="/jobs/results"
          class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-gray-2 h-96"
        >
          <img :src="img" class="object-contain" />
          <div class="h-48 px-6 py-4 mt-3">
            <h3 class="text-lg font-medium">
              {{ title }}
            </h3>
            <p class="text-sm mt-3">
              {{ description }}
            </p>
          </div>
          <router-link
            class="px-6 pb-4 text-sm text-brand-blue-1"
            to="/jobs/results"
            >See jobs</router-link
          >
        </router-link>
      </template>
    </spotlight>
  </main>
</template>

<script>
import Headline from '@/components/JobSearch/Headline.vue'
import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue'
import Spotlight from '@/components/JobSearch/Spotlight.vue'

export default {
  name: 'Hero',
  components: {
    Headline,
    JobSearchForm,
    Spotlight,
  },
}
</script>
