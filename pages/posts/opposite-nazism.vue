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
        <Header title='The opposite of Nazism' image='hitler.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <p>
        I've been thinking a lot about our tendency to overreact to dangerous situations. We get hit with a bit of chaos then demand absolute order in this precise moment. Or maybe we are suffocating in oppressive order and feel the need to burn it all. It's a natural reaction. If you are being chased by a predator you don't want to get far enough from it, but AS FAR AS YOU CAN from it. Assuming that that reflex is how we respond to metaphorical predators in our lives makes everything make more sense.
        </p>
        <p>
        Today we have a rise of both Antifa and what appears to be a growing Alt-Right movement. We want neither as both will lead to much death and suffering.
        </p>
        <p>
        I stumbled upon this new conceptualization that has helped me reframe my thinking.
        </p> 
        <p>
        The opposite of Nazism is not blissful order, but Marxism. Now I had previously believed that we were on a spectrum wherein if we know that one way of thinking is wrong all we needed to do was rush to the opposite side as swiftly as possible. Run from the predator, because it'll eat you, but what if we're really running blindly towards a cliff? The predator, or the evil we know, is chasing us towards the danger we do not yet see.
        </p>
        <h3>
        Nazism believed the following
        </h3>
        <ul>
          <li>Survival of the fittest was fair</li>
          <li>Those who could not contribute were useless and to be eliminated</li>
          <li>Life and pleasure were for the pure and strong which could be everyone once Germany was purified</li>
        </ul>
        <br>
        <h3>
        Marxists believed the following
        </h3>
        <ul>
          <li>Survival of the fittest was unfair</li>
          <li>Those who could not contribute were victims and deserved to be uplifted over all</li>
          <li>Life and pleasure were for everyone and the system of Marxism could be applied to any race or people</li>
        </ul>
        <br>
        <p>
        We found that Nazism was the most flamboyantly evil, because it clearly targeted the weakest, but Marxism caused more deaths and I believe that that is because it eliminated all the most productive members of society first and they were left with the resentful uneducated poor. We have two terrible paths before us and need to find the right one.
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