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
        <Header title='Poetry Time - Free Will' image='river.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <p>
        God made the world in two’s and three’s
        </p>
        <p>
        Decided He, to make us free
        </p>
        <p>
        Another had a dreadful plan
        </p> 
        <p>
        Trust me! For I will save man
        </p>
        <p>
        I will ensure that not one err
        </p>
        <p>
        For that WILL be truly fair
        </p>
        <p>
        Every child of yours so dear
        </p>
        <p>
        Will live and return without fear
        </p>
        <p>
        Just give me glory, give me praise
        </p>
        <p>
        And they WILL follow our ways
        </p>
        <p>
        Another spoke up meek in heart
        </p>
        <p>
        In life’s play what is their part?
        </p>
        <p>
        They my brother must be free,
        </p>
        <p>
        For them to grow that they may see
        </p>
        <p>
        Growth is hard and growth takes pain
        </p>
        <p>
        But through suffering they remain sane
        </p>
        <p>
        I care not for glory nor fame
        </p>
        <p>
        I merely do not want your children lame
        </p>
        <p>
        All I want is for them to be
        </p>
        <p>
        Each day a little more like you and me
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