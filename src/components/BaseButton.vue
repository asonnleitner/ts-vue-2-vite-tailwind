<template>
  <button
    v-bind="$attrs"
    v-on="$listeners"
    class="mt-0 mt-10 rounded-full bg-red-500 bg-blue-300 px-4 text-green-200"
  >
    <slot />
  </button>
</template>

<script lang="ts">
export default Vue.extend({
  name: 'BaseButton'
})
</script>
