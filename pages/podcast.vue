<template>
  <div>
    <v-toolbar
      dense
      tabs
      color="primary"
    >
      <v-toolbar-title class="pl-2 headline">
        Podcast
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
    <v-layout mt-5 row justify-center id="wrapper">
      <v-flex xs12 sm6 class="text-xs-center">
        <v-card light>
          <v-card-text>
            <iframe width="100%" height="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/86553947&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

export default {
  name: 'Podcast'
}
</script>