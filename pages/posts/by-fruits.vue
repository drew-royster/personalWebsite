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
        <Header title='By their fruits ye shall know them' image='apple-picking.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <p>
        I struggled to understand this verse for a long time. It's a quick catchy phrase that seems to make sense, but in practice I thought that a bit more leeway should be given. I thought back to all the mistakes I've made and how sometimes good intentions have led to bad results, but I think I might have some handle on why this phrase is true.
        </p>
        <h3>
        How it happens
        </h3>
        <p>
        Human beings are natural expirementors. I'm sure that in some it is stronger than others, but more so than any other species we are willing to take risks and try new things to see results. The common pattern is to theorize, test, analyze and then adjust. In most situations that is a tight feedback loop. You make small changes to a shooting technique in basketball, test it, analyze it and then adjust if it hasn't quite worked out. I don't think you should feel dumb or be ashamed for trying out a bad shooting technique in basketball. Likewise I don't think you should be too hard on yourself for trying out a bad idea. But imagine a basketball player who decided to adopt a terrible technique and then adamantly stuck to it. It runs contrary to our very nature, but it often happens that when ideas get propagated into a large group of people the feedback you get is not so much based on how the results of it in practice are, but in how other's believe the results COULD be.
        </p>
        <p>
        This happens because it's pretty hard to tell whether you are sane or not. We are built to outsource the problem and assess our own sanity based off the judgement of others. We should care what other people think, but discovering the truth is not a one time thing, but a dance and we need to be very careful as to which partners we choose to dance with. Even if the feedback is harsh, we need to know where we stand in reality, because it might feel good in the short term to have a pleasing illusion told to you, but it further separates you from reality. The farther you are separated from reality, the more likely you are to adopt new ideas that don't fit into reality, but fit into your illusion of reality. The next thing you know you are tying one idea based on a false premise on another and you are left with a web of ideas that have no foundation. You have built your world upon the sand.
        </p>
        <h3>
        Motivations
        </h3>
        <p>
        Now why does this happen? When this happens to us are we helpless victims? No. I don't think so. I learned from Nietzsche that many if not most of the people who claim to be "good" are really not good, but merely too cowardly and weak to be bad. There's no nobility in not biting someone if you have no teeth. It's safer to assume that we choose to believe the lies we tell ourselves not because of some naive goodness, but because or our own cowardice. We might be inclined to easily forgive ourselves for our cowardice. We can pity ourselves and say that we didn't know better, but I think it wise to remember that a great many terrible things were allowed to happen because of the cowardice of the masses.
        </p>
        <p>
        I'm straying from my original point, but it's a necessary detour, because it's important that we understand that we should hold ourselves accountable for our cowardice. Along with cowardice it's possible that we believe our lie because of pride. You came up with the idea so it must be brilliant! Or maybe you kind of think that an idea is bad, but you take pride in how "woke" you are and want to keep up appearances. It doesn't really matter how a pernicious idea is generated, but what is important is how often and how critically you assess it.
        </p>
        <h3>
        Responsibility
        </h3>
        <p>
        An idea of your making is much like a wild dog. While it may be nice to you, once you let it in the streets it could cause mayhem and hurt people. You are responsible for it.
        </p>
        <p>
        In the Soviet Union it became clear in the fairly early stages that things were not going to end as well as the utopian dream they all were aiming for. It did not take long for the resentful masses to inflict their revenge on the upper classes. It did not take too long after that for starvation to begin. It had turned out that those successful farmers really knew what they were doing and the bitter individuals who murdered and stole their farmlands could not manage it well. This led to the deaths of millions of Russians and Ukrainians. But a visionary like Lenin would not let a few hiccups get in his way of a perfect utopia and he just ramped up the arrests, the top down order and the killings. He was not willing to assess and adjust his plan. It may well have been that in the very beginning his intentions were pure, but when things start going sideways and you hypothetical value your idea more than the real world consequences then you deserve all the blame that can be given.
        </p>
        <p>
        If my example wasn't clear I will say it simpler. You can judge someone based off the results of their actions, because there is a very large chance that they saw the results, but from pride or cowardice shielded themselves from the truth. You don't get to release a wild beast upon others, bury your head in the sand and then deny all responsibility.
        </p>
        <p>
        I don't wish for this to stifle anyone from acting out any new idea or saying something that could go sideways. We will never know the truth so if you wait to act something out or to speak until you know the absolute truth, you will die having done nothing. What you do have a responsibility is to keep your feedback loop tight. Theorize, test, assess and adjust quickly. Don't get too bogged down and keep your eyes wide open. If you bring misery to those around you, then there's a good chance it's not an accident, but the very thing that the darkest part of your soul desired. You can carefully apply the same metric to those around you and assume that whatever effects they create on the world around them were exactly what they wished to.
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