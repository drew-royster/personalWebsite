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
        <Header title='Observations from Deray McKesson keynote' image='deray.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <p>
        This week I watched as UVU hosted Deray McKesson a prominent leader of Black Lives Matter and the host of _Pod Save the People._I had some issues with the points he was alluding to throughout the discussion. In his defense, I’m not sure that he is fully aware of the message he is sending. I had some concerns, but was unable to voice them due to the decision to not hold a Q&A after the discussion. I feel compelled to express my worries publicly to share my view, but also to hopefully get some feedback to see if I’m way off base or not.
        </p>
        <h3>
        Irresponsible
        </h3>
        <p>
        Despite the Michael Brown case being the cornerstone of the Black Lives Matter movement, he openly admitted that he wasn't too familiar with it. They spent 400 days in Ferguson with Deray being heavily involved. I would not dare dispute the fact that racism exists, but that city was torn apart in way that did not appear wholly productive. Deray doesn't seem to care much about the consequences making a statement similar to “I don’t know all the specifics of the Michael Brown case, but I know that he should be alive with us today”.
        </p>
        <p>
        How do you spend 400 days actively following and supporting a movement and not do your homework?
        </p>
        <p>
        How can you treat “the specifics” or in other words, facts with such indifference?
        </p>
        <h3>
        Deflect
        </h3>
        <p>
        He suggested that activists are on the defense too much and that they should put the burden of explaining things on others so that they won’t bear the burden of justifying their actions. The process of justifying your actions and ideas is how dialogue works. We present ideas. We dissect each other’s ideas into tiny pieces and try to destroy them. Those watching this exchange of ideas come away with a deeper understanding of the issue and everyone is made better off. I’m afraid that the mentality that defending our ideas is an unnecessary burden will become a popular rationale.
        </p>
        <h3>
        Blame
        </h3>
        <p>
        In response to why were buildings burnt down during his protests he responded essentially “well why did we have to be there in the streets in the first place?” It was a funny comment and some people laughed, but what he was basically saying is “we are justified in destroying the property of innocent business owners, because you made us do this”. That’s just plain wrong.
        </p>
        <h3>
        Ego
        </h3>
        <p>
        He repeatedly mentioned his amount of twitter followers as if that gave him some amount of credibility. Before his involvement in activism, he taught 6th grade. He has about 1 million followers on twitter and a large amount of reach through his podcast, but I question his knowledge on the subjects he continually talks about when, as I explained earlier, he does not do his homework. I question why he thinks he knows enough to become a self-appointed leader in this movement. There’s also the issue of the _Planet of the Apes_tweet where he asserted that they had an ape wearing a blue jacket to mock him for the blue jacket he normally wears. That clearly shows that he thinks a great deal of himself and Whoopi Goldberg called him out explaining that in the original film the ape was wearing a similar blue jacket.
        </p>
        <h3>
        Soft
        </h3>
        <p>
        I’m not sure who would be responsible for this, but I’m curious as to why there was no Q&A following the discussion. The interviewer was liberal and did not ask any tough questions. Following the discussion, I talked with a few other students who had some similar concerns. Looking him up on youtube, I could find no debates wherein he defends his viewpoints. He has had some interviews wherein he has been asked to explain the movement, but those are only with his allies or the occasional idiot on Fox News. I can’t find an instance where he has attempted to debate anyone intellectually powerful of a different viewpoint.
        </p>
        <h3>
        Wrapping up
        </h3>
        <p>
        Deray presents an overly simplistic narrative and does so poorly. He does not do his homework. He thinks a lot of himself and considers his ideas in many ways beyond debate. If this were an amazon review, I’d give 1 star and simply state “not worth your time”.
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