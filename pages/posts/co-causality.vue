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
        <Header title='Co-Causality' image='loops.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <p>
        I came to a realization the other day, which I found incredibly useful. I was thinking through how my stress manifests itself as muscle tightness and how I really love going into hot tubs. Upon leaving a hot tub my stress seems to be left behind in the tub. It hadn’t occurred to me that I was self-medicating to reduce my stress, but that is absolutely what it was. It appears to me that in many cases treating the symptom may actually help fight it’s root cause. But it may be that there is no root cause to these symptoms at all, but that after something kicked off the initial cycle it grew a life of it’s own and became self-sustaining.
        </p>
        <h3>
        The co-causal cycle
        </h3>
        <p>
        These relationships are what I would call co-causal, being that they are each both the effect and the cause of a given problem. If you have no confidence and suck at attracting women, which is the cause and which is the effect? Male status is highly affected by our perceived ability to attract mates so we would not be confident if we were unsuccessful at attracting female attention, but it’s also the case that a less confident man will inevitably be less successful with women causing them to lose more confidence. It’s easy to see how this is both a circle and a spiral based on it’s capacity to exponentially worsen your situation.
        </p>
        <p>
        So given that in a situation like this you can easily spiral to the depths, what is one to do? Which problem do you tackle first? The answer I’ve gotten is that you should tackle whichever feels less insurmountable. Tackle whatever is specific enough to grasp and isn’t so terrifying that you’ll never attempt it. A nervous man shouldn’t think that the first step out of this dark spiral is to find the most intimidating woman he can find and ask her out, because he’ll never do that, but he can make female friends. Small steps like this are perceived as successes, thus increasing his confidence.
        </p>
        <h3>
        From circle to spiral
        </h3>
        <p>
        I think it should be noted that at many times our solutions to a symptom actually exacerbates the original problem. An example being that someone depressed may self-medicate with alcohol, making them in turn more depressed and so on. In this, how you treat the problem is something that should be handled with great care as it’s easy to make a bad situation awful.
        </p>
        <p>
        Alternatively a future does exist where instead of struggling not to spiral downward we reverse our course and begin spiraling upward. Success and failure are not linear courses. Each failure brings with it more opportunities for worse and worse failures. Success behaves likewise and we may see that as we prove our worth to the world door after door will open to us revealing one great thing after another.
        </p>
        <h3>
        Life is really not fair
        </h3>
        <p>
        I think that it is for this reason that wealth follows a Pareto distribution. You probably know what a normal distribution looks like. It’s heavily weighted in the center meaning that most people are average. Many things such as IQ follow this pattern which leads many to assume that all things are normally distributed, but they aren’t at all. Normal distributions seem very fair, but Pareto distributions are anything but fair. They are very dense on the low end and exceptionally thin on the far end. This has been found to be the case for athletic ability, being that most people have almost no skill while a select few hoard all the skill for themselves.
        </p>
        <p>
        This also happens to be the case with wealth as not a social construct, but an eternal principle. When we had kings, they had most of the wealth with their lords having some as well, but their subjects having almost none. In capitalism it appears that the Pareto distribution has stood firmly as well. The only system that has ever attempted to vastly solve the “problem” was communism and that ended catastrophically in every place where it was enacted.
        </p>
        <p>
        It appears that having a select few who experience enormous success in life is a feature in any functioning society that has ever existed. It fits my earlier premise well, because it becomes easy to see how with each door opened you move farther and farther exponentially. Eventually you are opening doors that only a select few would even be able to open and you have entered the elite.
        </p>
        <p>
        Now for some success may be financial, but I can see how gaming this loop in relationships and everyday life may be even more valuable. You can see how a relationship can be strengthened exponentially as every step taken multiplies with time leading to happier and happier relationships. There appears to be no upper limit.
        </p>
        <h3>
        Conclusion
        </h3>
        <ol>
          <li>Co-Causality refers to things which cause each other.</li>
          <li>Growth and decay multiply exponentially.</li>
          <li>These appear to be features of life and not socially constructed.</li>
        </ol>
        <br>
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