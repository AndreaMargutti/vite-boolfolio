<script>
import axios from 'axios';
export default {
  name: "AppMain",
  data() {
    return {
        apiUril : 'http://127.0.0.1:8000/api/projects',
        postlist : [],
    }
  },

  methods: {
    getProjects(){
        axios.get(this.apiUril)
            .then((response) => {
                // handle success
                console.log(response.data.results);
                this.postlist = response.data.results;
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
  <div class="container-fluid">

    <h1>Lista Progetti</h1>
    <div class="card m-5 text-center bg-info-subtle" v-for="post in postlist">
      <!-- <img src="..." class="card-img-top" alt="..."> -->
      <div class="card-body">
        <h5 class="card-title">{{post.name}}</h5>
        <h6 class="card-title">{{post.members}}</h6>
        <h6 class="card-title">{{ post.type.name }}</h6>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="technologies in post.technologies">{{ technologies.name }}</li>
        </ul>
        <p class="card-text">{{ post.description }}</p>
      </div>
    </div>
  </div>
  </template>

<style scoped>
</style>