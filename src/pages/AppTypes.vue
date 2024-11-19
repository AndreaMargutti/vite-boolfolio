<script>
import axios from 'axios';
export default {
  data() {
    return {
      apiUrl : "http://127.0.0.1:8000/api/types",
      types : [],
    }
  },
  methods: {
    getTypes(){
      axios.get(this.apiUrl)
        .then(response => {
          // handle success
          this.types = response.data.results;
          // console.log(this.types);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      }
  },

  created(){
    this.getTypes();
  }
}
</script>

<template>
  <div class="container-fluid">
    <h1 v-for="type in types" >{{ type.name }}</h1>
  </div>
</template>

<style scoped lang="scss">
</style>