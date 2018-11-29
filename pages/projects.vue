<template>
  <v-content>
    <v-layout mt-3 row justify-center>
      <v-flex xs12 sm6 class="text-xs-center">
        <v-card light>
          <v-card-text>
            <v-layout row>
              <v-flex xs3></v-flex>
              <v-flex xs6 align-center>
                <img width="100%" src="@/assets/logo.png">
              </v-flex>
              <v-flex xs3></v-flex>
            </v-layout>
            <v-layout row>
              <v-flex align-center>
                <h1 class="display-3">Canvas File Sync 
                  <a href="http://canvasfilesync.com"><img height="40px" src="@/assets/web.png"/></a>
                  <a href="https://github.com/drew-royster/canvasFileSync"><img height="41px" src="@/assets/github.png"/></a>
                </h1>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex>
                <p class="text-sm-left">Canvas File Sync is a tool born from the frustrations of constantly needing to download and redownload my course files. You login once, choose your settings, and then stop thinking about whether you have all the files you need for your class.</p>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
</template>
