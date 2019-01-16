<template>
  <div>
    <v-toolbar
      dense
      tabs
      color="primary"
    >
      <v-toolbar-title class="pl-2 headline">
        Blog
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs
        v-model="tabs"
        color="transparent"
        slider-color="white"
        slot="extension"
      >
        <v-tab
          v-for="tabsItem in tabsItems"
          :key="tabsItem.id"
          :to="tabsItem.link"
        >
          <span class="pl-2 pr-2">{{ tabsItem.title }}</span>
        </v-tab>
      </v-tabs>
    </v-toolbar>
    <v-container
      pa-0
      mb-5
      mt-5
      fluid
      grid-list-xl
    >
      <v-layout row justify-center wrap>
        <v-flex
          v-for="(post, i) in posts"
          :key="i"
          xs12
          md4
          mb-5
        >
        <div>
          <v-layout justify-center>

            <v-hover close-delay="20">
              <v-card
                :class="`elevation-${hover ? 2 : 8}`"
                hover
                height="290px"
                width="380px"
                color="secondary"
                slot-scope="{ hover }"
                :to="getPage(post)"
              >
                <div>
                  <v-img
                  :aspect-ratio="16/9"
                  :src="getImage(post.image)"
                ></v-img>
                </div>
                <v-card-text
                  class="title"
                >
                  {{ post.title }}
                </v-card-text>
                <div class="height=50px primary text-xs-center ">
                </div>
                <v-fade-transition>
                  <v-card
                    v-if="hover"
                    class="text-xs-right"
                    color="rgba(112, 204, 255, .55)"
                    height="100%"
                    style="position: absolute; top: 0;"
                    width="100%"
                  >
                    <!-- <v-slide-x-transition appear>
                      <v-btn
                        class="subheading font-weight-light text-capitalize mx-0 mt-3"
                        color="secondary"
                        depressed
                        large
                      >
                        Read More
                      </v-btn>
                    </v-slide-x-transition> -->
                  </v-card>
                </v-fade-transition>
              </v-card>
            </v-hover>
          </v-layout>
        </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
const posts = require('@/static/posts.json');
export default {
  name: 'blog-home',
  data() {
    return {
      posts,
      tabs: null,
      tabsItems: [
          {id: 1, title: 'All', link: ''},
          // {id: 2, title: 'Tech', link: ''},
          // {id: 3, title: 'Life', link: ''}
      ]
    }
  },
  methods: {
    getImage(name) {
      return require(`@/assets/${name}`);
    },
    getPage(post) {
      return `/posts/${post.page}`;
    }
  }
}
</script>