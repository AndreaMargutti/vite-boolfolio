<script>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
export default {
  data() {
    return {

    }
  },

  components: {
    AppHeader,
  }
}
</script>

<template>
  <AppHeader />
  <RouterView />
</template>

<style lang="scss">
  @use "bootstrap/scss/bootstrap.scss" as *;
  @use "scss/general.scss" as *;
</style>
