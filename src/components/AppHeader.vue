<script>
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      
    }
  }
}
</script>

<template>
    <h1>Sono l'header</h1>
    <nav>
        <ul>
            <li>
                <router-link :to="{name: 'home'}">HomePage</router-link>
            </li>
            <li>
                <RouterLink :to="{name: 'types'}">Types</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
</style>