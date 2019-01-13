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
        <Header title='Cody Corrington' image='Cody.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
          <p>
            Most people in this life attempt like zebras to blend in with the herd or they act as mirrors, merely reflecting back on those who interact with them.
          </p>
          <p>
            Love for love.
          </p>
          <p>
            Hate for hate.
          </p>
          <p>
            With nothing going on in between. With no substance, no soul.
          </p>
          <p>
            There are a select few individuals who can take in the darkness and yet continually exude light. These individuals can make terrible situations bearable to those around them. When those around them are disheartened and feel there's nothing left to do, they shine a light on a brighter future.
          </p>
          <p>
            Cody Corrington is one of these individuals.
          </p>
          <p>
            This is not to say that he doesn't get sad or disheartened from time to time, but when thrown into a turbulent sea of chaos he would never think to drag anyone else under with him. He would ride it out without complaint and survive. When the storm settles, he's the first one to get going and sail off towards the next challenge.
          </p>
          <p>
            Simply put, he's the type of guy who takes a hit and comes back stronger.
          </p>
          <p>
            A hydra among men.
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
