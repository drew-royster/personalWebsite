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
        <Header title="Ideas as viruses" image='virus.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <p>
        I heard ideas as explained as viruses on this episode of <a href="https://www.youtube.com/watch?v=LsASIHTGh9k">Mixed Mental Arts with Bryan Callen</a> and it made a lot of sense. I used to believe and I think this is common that for us to embrace an idea it must be at least in some way good for us. Our perceptions of good for us will differ, but at least from our perspective it may seem that way. The belief is that holding onto that idea will make us less miserable than we currently are. Bryan Callen described ideas more as viruses. They only wish to propagate regardless of the actual effect they have on people. This empowers the phrase “misery loves company”.
        </p>
        <p>
        As you acquaint yourself with history you will find that many have been destroyed by the very ideas that they so strongly advocated for. Before in Soviet Russia we saw devout communists being destroyed not by a corruption of the ideas they held dear, but by the EXACT ideas they valued. Suicide rates are skyrocketing as life has become easier and we have valued more our rights than our responsibilities. We push rights so heavily while rejecting any increase in responsibility and we push these ideas on others while not understanding that it is not our rights that give life meaning, but our responsibilities. So we go on day to day aiming to make other’s lives easier, but in actuality we are giving them no reason to live. I want to dissect that idea more later, but it appears to be a modern day virus that perfectly illustrates Bryan Callen’s point
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