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
        <Header title='Why being more masculine does not necessarily mean being less feminine' image='male-female.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <p>
        I've had this idea in my mind since as long as I can remember wherein I viewed masculinity and feminimity as opposite ends of a two dimensional. As you moved close to one, you necessarily had to move farther from the other. I believed that we all lie somewhere on that spectrum and that I as a man mush work to move myself as far as possible towards the masculine end.
        </p>
        <p>
        I now believe that I was wrong. I have been thinking lately that maybe if we work hard and allow our character to manifest itself we may be able to develop both sides to a greater degree and then have the ability to choose whatever suits the situation we are in. In a way developing masculine traits is nothing more than further developing the mask you wear when you need to be masculine. There are times when you need to be feminine and having a well developed feminine mask does not come at the sacrifice of your masculine. With this you have the potential to have both aspects of your personality available to you at all times.
        </p>
        <p>
        Conversely this also means that people exist who have not properly developed their masculine or their feminine. These beings drift through life aimlessly without feeling and without acting in it. It has been said that the feminine is more concerned with feeling or taking in the world and the masculine is more concerned with acting within it. That theory makes some sense given the common stereotype of the workaholic father whose wife rightly complains that he never spends time with his family.
        </p> 
        <p>
        Going with that simple overgeneralization of feeling vs acting it makes sense that in many ways one would benefit the other. If you spend more time taking in the world you will inevitably spend less time acting in it, but I think it very likely that while you may act less what you do will be more properly oriented. Acting without feeling is like a sailing simply sailing full speed wherever the wind takes him without direction. Feeling without acting is to watch your compass and the stars so intently that you forget to open up your sails. Do not assume that you are manly simply because you don't have any feminine traits. It is possible that you have neither compass nor sails.
        </p>
        <p>
        I want to be the type of man who could kill someone if my family was at risk while simultaneously being the type of man to play dressup with my daughter.
        </p>
        <p>
        I want to be the type of man who remains calm through rocky emotional times, but who also can cry while reading a touching novel.
        </p>
        <p>
        I don't want one or the other.
        </p>
        <p>
        I want both.
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