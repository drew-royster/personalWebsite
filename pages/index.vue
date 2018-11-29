<template>
  <v-content>
    <v-parallax height="700" :src="parallax_image">
      <v-layout
        align-center
        column
        justify-center
      >
        <h1 class="display-4 font-weight-thin mb-3">Be useful</h1>
      </v-layout>
    </v-parallax>
    <v-layout row xs12 sm12 mt-3>
      <v-layout align-center justify-center>
        <v-flex align-center justify-center xs12 sm4 class="text-xs-center">
          <v-avatar size="200px">
            <v-img max-width="200px" max-height="200px" :src="drew_face"></v-img>
          </v-avatar>
        </v-flex>
        <v-flex xs12 sm5>
          <v-card>
            <v-card-text>
              I don't believe in domain specific knowledge. If you cant' relate two seemingly unrelated fields such as botany and software engineering, then you probably don't understand either. I look for truth everywhere and aim to be useful wherever I find myself.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex sm3></v-flex>
      </v-layout>
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
  </v-content>
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