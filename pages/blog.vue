<template>
  <v-content>
    <v-layout 
      mt-3
      row
      justify-center
      v-for="(post,index) in posts"
      :key="post.slug + '_' + index"
    >
      <v-flex xs12 sm6 mb-3>
        <v-card>
          <v-img
            v-if="post.featured_image"
            :src="post.featured_image"
            alt=""
          ></v-img>
  
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ post.title }}</h3>
              <h3 class="subheading mb-0">Published: <i>{{ $moment(post.published).fromNow() }}</i></h3>
              
              <div class="body-1">{{ post.summary }}</div>
            </div>
          </v-card-title>
  
          <v-card-actions>
            <v-btn :to="/post/ + post.slug" flat color="orange">Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout
      row
      justify-center
    >
      <v-flex xs12 sm6 mb-3 class="text-xs-center">
        <v-pagination
          v-model="current_page"
          :length="num_pages"
        ></v-pagination>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import Butter from 'buttercms';
const butter = Butter('1f5d22f23bd140fa68dbc861a305884916a84055');

export default {
  name: 'blog-home',
  data() {
    return {
      posts: [],
      page_size: 5,
      count: null,
      previous_page: null,
      current_page: 1,
      next_page: 2,
    }
  },
  computed: {
    num_pages: function() {
      return Math.ceil(this.count / this.page_size);
    },
  },
  methods: {
    getPosts() {
      butter.post.list({
        page: this.current_page,
        page_size: this.page_size,
      }).then(res => {
        this.posts = res.data.data;
        this.count = res.data.meta.count;
        this.next_page = res.data.meta.next_page;
        this.previous_page = res.data.meta.previous_page;
      })
    }
  },
  watch: {
    current_page: function() {
      this.getPosts();
      window.scrollTo(0,0);
    }
  },
  created() {
    this.getPosts();
  }
}
</script>
