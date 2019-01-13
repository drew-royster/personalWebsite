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
        <Header title="Pity isn't respect" image='pity-fool.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <p>
        The idea that pity and respect are the same thing is not overtly stated, but it underlies many arguments for equity, also known as equality of outcome. I would like to make the case that while we may pity certain individuals for their unfortunate circumstance, that does not mean that they merit respect. Respect is a currency and when we flood the market, it becomes worthless. Nowadays we often hear that a certain group is victimized and that to help we must respect them.
        </p>
        <p>
        The whole group.
        </p>
        <p>
        <strong>Indiscriminately</strong>
        </p>
        <p>
        I've been thinking that through and I just don't think that that particular worldview is robust enough to work in practice. Ex-Nazis were heavily victimized in the U.S. post WW2. Should we respect them?
        </p>
        <p>
        But "WAIT" you say, "they did terrible things to innocent Jews"
        </p>
        <p>
        Yes, they decided to identify and murder Jews regardless of their individual merit.
        </p>
        <p>
        The whole group.
        </p>
        <p>
        <strong>Indiscriminately</strong>
        </p>
        <p>
        We are looking at the same coin, just different sides of it. The problem is that the world is not a coin, with victims and perpetrators. The truth is that a despicable, awful human being can be a victim as Cain was. A good, wise person can be a perpetrator as many brave soldiers have been. Thus victimhood <strong>should not</strong> grant privilege or respect.
        </p>
        <p>
        If you still cling to the victim/perpetrator worldview
        </p>
        <p>
        Then it's time for you to grow the hell up
        </p>
        <p>
        <strong>Today</strong>
        </p>
        <p>
        Because if not, you may be responsible
        </p>
        <p>
        For the tomorrow that never comes
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