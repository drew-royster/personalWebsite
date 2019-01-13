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
        <Header title='Symbolic distinctions and how they are formed' image='hydra.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <p>
         Negroes and colored people became blacks and then they became african americans and then they became blacks and people of color again.
        </p>
        <p>
        The color pink used to be a male color with blue being for females.
        </p>
        <p>
        Why the changes?
        </p> 
        <p>
        While the reasoning behind the changes is different, the mechanism that underlies them is the same. Words colors and symbols are as much used to describe what something is not as what it is.
        </p>
        <p>
        So let's say that at some point in time people began saying negro in a sharp and offensive tone. Over time non-racist individuals noticed this and based on the tone by which other's called people of african descent negroes, they wished to differentiate themselves so they came up with a new term. Then the racists picked it up at some point saying blacks in a derogatory TONE. The key is the TONE or the CONTEXT by which a word is spoken. But instead of us understanding this we police other's and insist that because a racist at some point said the word negro, we must all switch to another word. It's retarded.
        </p>
        <p>
        Don't even get me started on that word.
        </p>
        <p>
        There was recently a fashion show in which men paraded around in dresses and women in clearly masculine clothes.
        </p>
        <p>
        A neat social experiment, but it won't amount for much.
        </p>
        <p>
        The problem with clever social engineering is that they don't understand that even if they can get us to switch the symbols. If for some reason tomorrow pink is a boy's color again, well women will opt for blue or some other color for themselves.
        </p>
        <p>
        If men all began wearing dresses women would wear differently styled dresses or pants so as to broadcast to men, I am a woman.
        </p>
        <p>
        Stop viewing the world as this linearly progressing thing in which we have only been moving forward since the dawn of time. The symbols change CONSTANTLY and the only thing that remains relatively constant is the mechanism behind the change.
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