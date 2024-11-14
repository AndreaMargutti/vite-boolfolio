<script>
import axios from 'axios';
export default {
  data() {
    return {
        apiUril : 'http://127.0.0.1:8000/api/projects',
        postlist : [],
    }
  },

  methods: {
    getProjects(){
        axios.get(this.apiUril)
            .then(function (response) {
                // handle success
                console.log(response.data.results);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
  },

  created(){
    this.getProjects();
  }
}
</script>

<template>
    <h1>AppMain</h1>
</template>

<style scoped>
</style>