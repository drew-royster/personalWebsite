<template>
  <v-content>
    <v-layout row wrap>
      <v-flex ma-3 xs12 sm6 md4 lg3 v-for="post in posts" :key="post.title">
        <v-card flat nuxt :to="getPage(post.page)">
            <v-img
              :src="getImage(post.image)"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="title mb-1">
                  {{ post.title }}
                </h3>
              </div>
            </v-card-title>
        </v-card>
      </v-flex>

    </v-layout>
  </v-content>
</template>

<script>
const posts = require('@/static/posts.json');
export default {
  name: 'blog-home',
  data() {
    return {
      posts,
    }
  },
  methods: {
    getImage(name) {
      return require(`@/assets/${name}`);
    },
    getPage(page) {
      return `/posts/${page}`;
    }
  }
}
</script>
