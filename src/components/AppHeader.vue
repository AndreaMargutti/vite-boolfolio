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
    <div class="container-fluid">
        <nav class="d-flex justify-content-between">
            <h1>Andrea Margutti</h1>
            <ul class="d-flex justify-content-center">
                <li>
                    <router-link :to="{name: 'home'}">HomePage</router-link>
                </li>
                <li>
                    <RouterLink :to="{name: 'types'}">Types</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style scoped lang="scss">
    nav {
        font-weight: bold;
        font-family: Aberus, sans-serif;
    }
    ul {
        list-style-type: none;
        padding: 10px;
        gap: 10px;
        font-size: 1.3rem;
    }
    nav {
        min-height: 50px;
    }
</style>