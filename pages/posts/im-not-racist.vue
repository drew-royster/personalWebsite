<template>
<div>

<v-toolbar
      dense
      tabs
      color="primary"
    >
      <v-toolbar-title class="pl-2 headline">
        Blog Post
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
  <v-content>
    <v-layout ma-5 row justify-start>
      <v-flex xs12 sm8>
        <Header title='Joyner Lucas’ “I’m not racist” takeaway' image='racism.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <p>
        You know that feeling when there’s just a massive elephant in the room, but nobody wants to be the person to address it? Then when someone does finally address it everyone in the room gets a little uncomfortable at first, but then breathes a sigh of relief. There was tension and someone had the courage to address it with the intention of smoothing things over. Joyner Lucas is that person.
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/43gm3CJePn0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>
        <h3>
        I'm not racist
        </h3>
        <p>
        That phrase is repeated continually throughout the song by both sides to highlight the fact that nobody thinks they’re racist despite saying some racist things. They both perpetuated stereotypes about each other while repeating that phrase. Joyner’s point throughout this message is that it’s okay for us to say what we feel and to even say it badly as long as we are willing to listen to the other side. In many ways truth is in the eye of the beholder and you got to let people say what they see as true. Watching them release that anger and express themselves without any tact wasn’t easy, but that release allowed them to come together at the end. That’s because honesty is the first step to connecting with anyone. If you’re so easily offended that you don’t allow people to be honest with you, then it’s impossible to make a real connection. Joyner did a great job attempting to promote that dialogue.
        </p>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-content>
</div>
</template>

<script>
import Header from '@/components/BlogHeader';
export default {
  name: 'blog-post',
  components: {
    Header
  },
  data() {
    return {
      tabs: null,
      tabsItems: [],
      panel: []
    }
  },
}
</script>