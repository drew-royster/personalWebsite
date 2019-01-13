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
        <Header title='Universal Basic Income' image='cost-production.png'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <p>
        As technology improves, AI's capabilities expand and we continue to increase manufacturing efficiency, it is clear that many jobs are simply going to disappear.  If a machine can do something better, why would an employer ever hire someone to do that job?  Look at Ford, once they got an assembly line working properly, their productivity skyrocketed.
        </p>
        <p>
        With fewer workers per car, they were able to provide a great service to the country and decrease cost dramatically. Choosing between buying a horse or a car to travel is a no-brainer now, but back then it was widely debated.  It's safe to say that we are all much better off now with our cars than these men and women were riding horses around.
        </p>
        <p>
        The downside to this increase in efficiency is that they took a large bite out of other industries and many jobs were lost. A lot of horse breeders lost their customer base. The world changed and at the time it must have been painful for those who lost their jobs and had to find work elsewhere.
        </p>
        <p>
        That's a scary thought for many people for very obvious reasons.  Knowing that the days that your skills will be valued are numbered is disconcerting.
        </p>
        <p>
        Many ideas have been thrown around to alleviate this job loss and quite honestly I am not impressed with any of them.  The one I most worry about is Universal Basic Income.  Every citizen would be entitled to an income whether they worked or not.  It wouldn't be a great salary, but you could live off of it without ever needing to work.
        </p>
        <h4>
        I worry
        </h4>
        <ol>
          <li>A basic income provides no incentive to work for those predisposed to idleness.</li>
          <li>Joy is gained from working and feeling like you add value to something.  By "helping people" with a basic income we are actually making it easier for them to choose to be unhappy.</li>
          <li>A basic income takes resources from research and development and places it in a fund that will not provide a return.</li>
          <li>Alternatively money could be used to fund retraining programs or in research so that we can improve further on our scientific progress.</li>
          <li>A basic income takes money from those who had the foresight to prepare for the future and gives it to those who are unwilling to adapt.</li>
        </ol>
        <br>
        <h4>
        I believe
        </h4>
        <ol>
          <li>It's not unreasonable or unrealistic to expect people to adapt to a changing world.</li>
          <li>e.g. no serious company would ever hire someone who didn't know how to use a computer.</li>
          <li>Stifling progress for the sake of the few stagnant individuals hurts all of us collectively.</li>
          <li>Giving away something for nothing is a recipe for disaster.</li>
        </ol>
        <br>
        <p>
        I think it important that these ideas be expressed to counteract the rising belief that something similar to Universal Basic Income must exist in our fast-paced world.  The desire to help the impoverished is good, dedicating time and energy to finding the best way to help them is better yet.
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