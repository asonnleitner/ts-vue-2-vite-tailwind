<template>
  <div class="bg-red-500">
    <RouterView />
    <input type="text" />
  </div>
</template>

<script lang="ts">
export default Vue.extend({
  name: 'AppRoot'
})
</script>
