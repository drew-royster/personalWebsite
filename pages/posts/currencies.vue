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
        <Header title='Money - The least valuable currency' image='The-Joker.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
          <p>
            It's funny how our natural inclinations tend to lead us away from happiness. We are drawn towards illusions and neglect what's real.
          </p>
          <p>
            Money is mostly an illusion. There was a day when we used gold which has an inherent value. Then we switched to gold-backed currency, paper money that represented real physical gold. Nowadays it's anybody's guess what money represents. I'm starting to think that it only roughly correlates with how much we believe in its value.
          </p>
          <p>
            It feels like since we are drowning in 20 trillion dollars of debt with that number increasing daily, it is only a matter of time before it pops. It obviously does not matter what you value the dollar at if the world loses faith in it, then it is worthless.
          </p>
          <p>
            People who have lots of money tend to also have lots of assets. Assets may have value, but the types of assets that the extremely wealthy tend to have are many times not antifragile in their value. Luxury items are only valuable when base needs are covered not just for yourself, but for your general community. If a huge depression occurs and you were rich enough to buy a ferrari, but now have no bread to eat, it may be that a few loaves of bread are what that ferrari is worth to anyone around.
          </p>
          <p>
            But even in ideal conditions there is only so much joy to be gained from wealth. These things are much more observable at the end of life rather than the start. Most of us have grandparents or elderly friends that we care about and if you watch them carefully you'll see them giving everything away that they have. The happy ones don't talk about their past business successes, but their family and friends. Maybe the pursuit of wealth is a necessary part of the journey, but it's clear that towards the end of life it loses its savor.
          </p>
          <p>
            There are innumerable currencies so I think it best to contrast the least valuable with the most.
          </p>
          <p>
            <i class="title">Friendship is the most valuable currency.</i>
          </p>
          <p>
            By friendship I mean a deep lasting bond between two individuals be it platonic, familial or in marriage.
          </p>
          <p>
            I'd also make the claim that friendship is only reserved for good hearted individuals.
          </p>
          <p>
            <i class="title">Bad people have allies, not friends.</i>
          </p>
          <p>
            Let's assume that you have your best interests in mind. That may not be the case, but let's assume it. If you are in any way incapacitated or harmed; injury, loss of wealth, mental illness, your best interests are incapacitated with you.
          </p>
          <p>
            Creating meaningful friendships distributes your well-being through many others. The most intelligent and confident person in the world cannot account for everything. Creating a web of trust around you wherein you watch over others as they watch over you gives a net benefit to all greater than the investment of everyone combined. It is the perfect example of a true non zero sum game.
          </p>
          <p>
            Turn away from the illusion and place your faith in what's real.
          </p>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-content>
</div>
</template>

<script>
import hljs from 'highlight.js';
import Highlight from 'vue-highlight-component';
import Header from '@/components/BlogHeader';
export default {
  name: 'blog-post',
  components: {
    Highlight,
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

<style>
/*
Docco style used in http://jashkenas.github.com/docco/ converted by Simon Madine (@thingsinjars)
*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #000;
  background: #f8f8ff;
}

.hljs-comment,
.hljs-quote {
  color: #408080;
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-subst {
  color: #954121;
}

.hljs-number {
  color: #40a070;
}

.hljs-string,
.hljs-doctag {
  color: #219161;
}

.hljs-selector-id,
.hljs-selector-class,
.hljs-section,
.hljs-type {
  color: #19469d;
}

.hljs-params {
  color: #00f;
}

.hljs-title {
  color: #458;
  font-weight: bold;
}

.hljs-tag,
.hljs-name,
.hljs-attribute {
  color: #000080;
  font-weight: normal;
}

.hljs-variable,
.hljs-template-variable {
  color: #008080;
}

.hljs-regexp,
.hljs-link {
  color: #b68;
}

.hljs-symbol,
.hljs-bullet {
  color: #990073;
}

.hljs-built_in,
.hljs-builtin-name {
  color: #0086b3;
}

.hljs-meta {
  color: #999;
  font-weight: bold;
}

.hljs-deletion {
  background: #fdd;
}

.hljs-addition {
  background: #dfd;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}
</style>
