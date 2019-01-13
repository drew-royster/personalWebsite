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
        <Header title='Deceit - Why it’s a big deal' image='deceit.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <p>
        <i>Dante’s inferno</i> is Dante Alighieri's interpretation of hell consisting of 9 concentric circles. As you step through them you are witnessing an increase in depravity and wickedness on every level.
        </p>
        <p>
        If you asked a random individual on the street which sin is the greatest they would undoubtably say murder. In most cases I would say that that is true, but I think Dante saw deeper than most. He understood that beneath the actual actions lied the root cause which made certain actions terrible. I find it incredibly fascinating that he put fraud and treachery at the dead center. I’m writing this not because I know exactly why this is, but as an attempt to fully grasp why the two sins involving deceit lie at the center.
        </p>
        <h3>
        Violence
        </h3>
        <p>
        In war people kill other people. It is expected and soldiers find no breach in honor in taking the life of another man who opposes them if it is done in an honorable way. Read the accounts of soldiers throughout many wars. Many times they were aware that the enemy was not some wholly evil force, but that killing each other was necessary anyway. Even if they hated the enemy, often times a mutual respect existed. What neither side tolerated however were breaches of an unspoken contract.
        </p>
        <h3>
        Unspoken contract
        </h3>
        <p>
        We live atop an enormous set of commonly shared beliefs that do not need to be explained. We trust that strangers that we encounter will not murder us and take our belongings. We tend to trust those we do not know, because underlying any relationship is an implicit contract. Normal people expect truth from others and understand that others expect the truth from them. This is self-evident when you consider the outrage we experience when we discover that someone has lied to us. Even if the person is a stranger we don’t think “well I suppose that I should have been on guard and not trusted so easily”. We don’t think this because our world is based on trust. Deceiving another human being cracks the foundation of perceived reality in a damaging way. I’ve heard it described that uncovering a betrayal doesn’t just change the present or the future it changes the past. In the case of spousal betrayal an individual won’t just question their future with their spouse. They won’t just question if they can trust their spouse in the present. They will question whether anything that they have believed throughout the relationship was true. It taints and manipulates the past. In a very real sense it changes reality.
        </p>
        <p>
        ￼The world is not made up by matter, but by what matters -Jordan B. Peterson
        </p>
        <h3>
        The root
        </h3>
        <p>
        Murder is bad not just because another human being’s life is cut short, but because it breaks an implicit contract of reality that is universally held to be of utmost importance. It is a betrayal not just of the individual who has been killed but of all those around us. We all agree to this contract of existence and existence itself screams out in horror. In the story of Cain and Abel, God states that <i>"The voice of thy brother’s blood cries unto me from the ground"</i>
        </p>
        <p>
        I don't believe that that line was written to be taken literally, but crafted to express the universal outrage of betrayal. Betrayal is the root of all evil. We can start by simply not betraying ourselves and then go on from there. Once we have decided we will not lie to ourselves about even our darkest desires, then we can address them, move forward and begin to not deceive others.
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