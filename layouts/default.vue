<template>
    <v-app>
        <v-menu offset-y class="accent hidden-md-and-up">
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
              :to="page.link"
            >
              <v-list-tile-title>{{ page.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-navigation-drawer
          width="250"
          class="accent hidden-xs"
          persistent
          :mini-variant="miniVariant"
          v-model="drawer"
          fixed
          app
        >
            <v-container v-if="!miniVariant"  justify-center align-content-center>
                <v-layout column>
                    <v-flex text-xs-center>
                        <v-avatar size=150px>
                            <v-img max-width="150px" max-height="150px" :src="drew_face"></v-img>
                        </v-avatar>
                    </v-flex>
                    <v-flex text-xs-left>
                      <h2 id="my-name">Drew Royster</h2>

                    </v-flex>
                </v-layout>
            </v-container>
            <v-container v-else  justify-center align-content-center>
                <v-avatar size=40px>
                    <v-img max-width="40px" max-height="40px" :src="drew_face"></v-img>
                </v-avatar>
            </v-container>

            <v-list subheader :class="{'list-border-bottom' : miniVariant}">
                <template v-for="item in pages">
                    <v-tooltip right :disabled="!miniVariant">
                        <v-list-tile
                          :key="item.icon"
                          :to="item.link"
                          exact
                          slot="activator"
                        >
                          <v-list-tile-action ml-1>
                              <v-icon v-html="item.icon"></v-icon>
                          </v-list-tile-action>
                          <v-list-tile-content>
                              <v-list-tile-title v-text="item.title"></v-list-tile-title>
                          </v-list-tile-content>
                      </v-list-tile>
                      <span v-text="item.title"></span>
                    </v-tooltip>
                </template>
            </v-list>
            <v-divider></v-divider>
            <v-toolbar flat class="transparent" dense>
              <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                <v-list-tile>
                  <v-list-tile-content v-if="!miniVariant">
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn icon @click.stop="miniVariant = !miniVariant">
                      <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </v-toolbar>
        </v-navigation-drawer>

        <v-content>
            <nuxt/>
        </v-content>
    </v-app>
</template>

<script>
export default {
  name: 'Index',
  metaInfo: {
    title: 'Drew Royster', // set a title
    htmlAttrs: {
      lang: 'en',
      amp: undefined // "amp" has no value
    }
  },
  computed: {
    drew_face: function() {
      return require('@/assets/drew-looking.jpeg');
    }
  },
  data() {
    return {
      appName: process.env.VUE_APP_APP_NAME,
      drawer: true,
      fixed: false,
      pages: [
        {
          icon: 'description',
          title: 'Blog',
          link: '/'
        },
        {
          icon: 'build',
          title: 'Projects',
          link: '/projects'
        },
        {
          icon: 'audiotrack',
          title: 'Podcast',
          link: '/podcast'
        },
        
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      tabs: null
    }
  }
}
</script>

<style>
  #my-name {
    font-size: 33px;
  }
</style>