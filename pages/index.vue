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

   <v-card
      class="mx-auto"
      color="#26c6da"
      dark
      max-width="400"
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
   </v-card>
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
</div>
</template>

<script>

export default {
  name: 'index',
  computed: {
    parallax_image: function() {
      return require('@/assets/DSC02178.jpg');
    },
    drew_face: function() {
      return require('@/assets/drew.jpg');
    }
  },
  data () {
    return {
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