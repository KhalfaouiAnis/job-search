<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      data-test="clickable-area"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="w-full mt-5">
      <slot>
        <p>Oops, somebody forgot to populate me!</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    caretIcon() {
      return this.isOpen ? ['fas', 'anglr-up'] : ['fas', 'anglr-down']
    },
  },
  methods: {
    open() {
      return !this.isOpen
    },
  },
}
</script>
