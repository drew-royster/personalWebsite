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
        <Header title='Guns - an equalizer for women' image='woman-gun.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <p>
        There are outliers to this blanket statement, but on average women are physically weaker than men.  Women have historically been oppressed among most cultures and most times suffer far more brutal treatment in war than men.  Genghis Khan is widely known for his brutality as a conquerer.  His view of women as loot during his conquests led to him widely spreading his seed through raping countless women. The women were, in most respects, helpless to the Mongol invasion.  Once the soldiers and their husbands died, they were left alone to be captured and sold.
        </p>
        <p>
        Fast forward many centuries to the revolutionary war and we have women serving in the military.  Even though women were not officially allowed to serve in the army, Deborah Sampson fought in many engagements and earned the respect of the her fellow soldiers to the point where many attempted to help hide her gender from superiors.  To her fellow soldiers she wasn't a liability, but an asset.  Whereas before battles were generally based on strength and endurance,  guns made them much more about skill and speed.  This gave the average woman the same ability to defend herself that men had.
        </p>
        <p>
        You can't outmuscle a .50 caliber musket ball.
        </p>
        <p>
        Which brings us to today where guns are widely available and offer equal protection to all skilled users.  This creation has greatly empowered women and although they have been misused and most likely will continue to be misused at times, their value outweighs their cost.
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