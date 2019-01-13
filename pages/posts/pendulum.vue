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
        <Header title='The world is on a pendulum' image='pendulum.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <p>
        We cannot fully wrap our finite minds around the complexity of the world. It gets even harder when we try to wrap our heads around the complexity of the world over time. You need some simple tools that abstract away the unnecessary stuff leaving behind enough information for you to learn something useful. That’s how science works. We find metrics that are important and a way to measure them and then we remove as many unnecessary variables as possible. Looking at the world is not as simple as one experiment and we need way more than one lens with which to view the world accurately, but the more lenses we gain, the more clearly the picture appears to us.
        </p>
        <p>
        One lens that has helped me greatly has been to consider culture as a swinging pendulum.
        </p>
        <h3>
        Standard pattern
        </h3>
         <ol>
          <li>Cast aside the teachings of the previous generations, because they have flaws</li>
          <li>Create a wildly different value structure</li>
          <li>Suffer greatly from the value structure’s lack of roots</li>
          <li>Reinstate the value structures that were previously abandoned with more force than before</li>
          <li>Take the values we have for granted and forget why we have them to begin with</li>
          <li>Repeat</li>
        </ol>
        <br>
        <h3>
        Taboo to commonplace
        </h3>
        <p>
        The rigidity of the 1950’s has long since gone. It has now been replaced with a hyper fluidity of value. With this change many great things have happened. Women and ethnic minorities have been empowered. People are more tolerant of cultures unlike their own. Despite these improvements, it’s not clear to me that there have been no side effects.
        </p>
        <p>
        Black people used to be ashamed of the color of their skin, now “you’re so white” is an insult.
        </p>
        <p>
        It used to be commonplace to be suspicious of other cultures, because who knows what they’re up to anyway, today it is social suicide to express concerns.
        </p>
        <p>
        It used to be expected that a woman would stay at home to bear the primary responsibility of raising their children, today if a woman decides she’d rather stay at home she’s “just a mom”.
        </p>
        <p>
        It seems that once something becomes socially acceptable it can rapidly transition into becoming socially expected.
        </p>
        <h3>
        Coming full circle 
        </h3>
        <p>
        Camille Paglia described the conditions of her generation in the University being that women had to be home by a certain hour and sign back into their dorms, while men were able to roam freely all hours of the night. The University’s position was that the world was dangerous for women late at night and that they must be protected. Paglia’s generation rebelled and demanded as she puts it “give us the freedom to risk rape”. She describes how feminism has now backtracked from casting away patriarchal figures to demanding protection from them once more.
        </p>
        <p>
        Regarding non traditional sexual unions now is not the first time in history that gay men and women have been respected and encouraged to act as they please. There is some evidence that these types of relationships were <a href="https://www.catholiceducation.org/en/marriage-and-family/sexuality/gay-marriage-reimagining-church-history.html">encouraged even within Christianity</a> around the 14th century. Ancient Egypt and Greece also strongly embraced homosexuality and sexual promiscuity in general. This sexual revolution is nothing new.
        </p>
        <p>
        Atheism is also nothing new. Many societies have embraced it in the past. There is a tendency to assume that our ancient ancestors were too simply minded to question anything and were exceedingly superstitious. The atomists of 5th century BCE in Greece believed that the world was based on the chance movement of atoms. An ancient playwright Euripides had a main character proclaim
        </p>
        <p>
        “Doth some one say that there be gods above? There are not; no, there are not. Let no fool, Led by the old false fable, thus deceive you.”
        </p>
        <h3>
        Coming full circle 
        </h3>
        <p>
        Camille Paglia described the conditions of her generation in the University being that women had to be home by a certain hour and sign back into their dorms, while men were able to roam freely all hours of the night. The University’s position was that the world was dangerous for women late at night and that they must be protected. Paglia’s generation rebelled and demanded as she puts it “give us the freedom to risk rape”. She describes how feminism has now backtracked from casting away patriarchal figures to demanding protection from them once more.
        </p>
        <h3>
        Questions
        </h3>
        <p>
        These examples lead to many questions that I do not know the answers to. Why did these cultures “backtrack” in their social liberalism? Why the continual fluctuation in values? I can’t give adequate responses to these questions. I’d guess that I’ll probably spend the rest of my life trying to understand this, but I must say that it has been incredibly valuable for me to understand that we have not been experiencing a purely linear progression over time. To me it feels like a pendulum swinging back and forth from conservative to liberal values. If we are to predict the future from the past, then we can see that our current trajectory will not proceed indefinitely. We will eventually swing back.
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