<template>
  <v-app>
    <v-toolbar primary>
      <v-menu offset-y class="hidden-md-and-up">
        <v-btn
          icon
          slot="activator"
        >
        <v-icon>menu</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="(page, index) in pages"
            :key="index"
            :to="page.route"
          >
            <v-list-tile-title>{{ page.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <router-link class="toolbar-title" to="/">
        <v-toolbar-title>Drew Royster</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
          v-for="(page, index) in pages"
          :key="index"
          :to="page.route"
          flat
          >
        {{ page.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-layout>
        <nuxt />
      </v-layout>
    </v-content>
    <v-footer primary :fixed="fixed" app>
      <v-flex text-xs-center>
        <a href="https://buttercms.com">
          <img height="32px" src="@/assets/butter-b.png" alt="Butter CMS Logo">
        </a>
      </v-flex>
    </v-footer>
  </v-app>
</template>
<script>

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      pages: [
        {
          route: '/blog',
          title: 'Blog'
        },
        {
          route: '/podcast',
          title: 'Podcast'
        },
        {
          route: '/projects',
          title: 'Projects'
        },
      ],
    }
  }
}
</script>

<style>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>

