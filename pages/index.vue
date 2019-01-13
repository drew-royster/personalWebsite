<template>
<div>
 <v-toolbar
    dense
    tabs
    color="primary"
  >
    <v-toolbar-title class="pl-2 headline">
      Me
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
      grid-list-xl
      pa-0
      mb-5
    >
    <v-layout justify-space-around row>
      <v-flex xs12 md2 mt-4>
        <v-card>
          fsf
        </v-card>
      </v-flex>
      <v-flex xs12 md6>     
       <material-card class="v-card-profile">
          <v-avatar
            slot="offset"
            class="mx-auto d-block"
            size="200"
          >
            <img
              :src="drew_face"
            >
          </v-avatar>
          <v-card-text class="text-xs-center">
            <h1>Drew Royster</h1>
            <p class="card-description font-weight-light">I don't believe in domain specific knowledge. If you cant' relate two seemingly unrelated fields such as botany and software engineering, then you probably don't understand either. I look for truth everywhere and aim to be useful wherever I find myself.</p>
          </v-card-text>
        </material-card>
      </v-flex>
      <v-flex xs12 md2 mt-4>
        <v-card
        color="secondary"
      >
        <v-card-title>
          <v-icon
            large
            left
          >
            library_books
          </v-icon>
          <span class="title font-weight-light">Books</span>
        </v-card-title>
        <v-expansion-panel inset>
          <v-expansion-panel-content
            v-for="(item,i) in 6"
            :key="i"
          >
            <div slot="header">Item</div>
            <v-card>
              <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
    </v-card>
      </v-flex>
    </v-layout>
    <v-layout row xs12 sm12 mt-3>
      <v-flex>
        <v-card primary>
          <v-card-text>
            <v-layout row>
              <v-flex class="text-xs-center">
                <h1 class="display-3 font-weight-thin">Technical Skills</h1>
              </v-flex>
            </v-layout>
            <v-layout 
              v-for="skill in skills"
              :key="skill.name"
              mt-3
              align-center
              justify-center
              >
              <v-flex xs12 sm6 class="text-xs-center">
                <v-layout column>
                  <v-layout row>
                    <h1 class="display-2 font-weight-thin">{{ skill.name }}</h1>
                  </v-layout>
                  <v-layout row>
                    <v-flex>
                      <v-progress-linear v-model="skill.percent"></v-progress-linear>
                    </v-flex>
                  </v-layout>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>

export default {
  name: 'index',
  computed: {
    drew_face: function() {
      return require('@/assets/drew-looking-up.jpeg');
    }
  },
  data () {
    return {
      tabs: null,
      tabsItems: [],
      skills: [
        {
          name: 'Javascript',
          percent: 80
        },
        {
          name: 'Docker',
          percent: 75
        },
        {
          name: 'Vue',
          percent: 75
        },
        {
          name: 'NodeJS',
          percent: 70
        },
        {
          name: 'Electron',
          percent: 70
        },
        {
          name: 'Selenium',
          percent: 70
        },
      ]
    }
  }
}
</script>

<style>
  .profile-card {
    z-index: 0;
  }
  .my-profile-image {
    z-index: 1;
  }
</style>