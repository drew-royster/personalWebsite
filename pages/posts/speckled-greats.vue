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
        <Header title='The Speckled Greats of the Past' image='mandela.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
          <p>
            I've lately been discovering that many of the individuals we hold so dear have very whitewashed histories'. Why and how the whitewashing occurs is an interesting question, but I think that what's most important to understand is that whitewashing does occur over time and with this in mind we may be able to look at individuals coming under fire in our day and be less prone to throw stones on them. With the painful realization that our childhood heroes were flawed, we may come to learn to differentiate individuals into their heroic and less heroic aspects. As we begin to understand that we can learn and admire aspects of speckled individuals without loving them as a whole, we may be able to see the good in others around us despite their flaws.
          </p>
          <p>
            If this sounds good to you, then keep reading, but if you'd rather hang onto the useful but simplistic perspective you currently have that's fine too.
          </p>
          <h2>Nelson Mandela</h2>
          <p>
            Widely known for his prison time and for ending apartheid in South Africa, but less commonly known as a Communist Revolutionary willing to bomb and kill innocents to gain power. While in jail he even <a href="https://www.heraldsun.com.au/news/opinion/the-dark-side-of-nelson-mandela/news-story/68f4acdbf2b0b4e6c799e458a55e6cb2">sanctioned the 1983 Church St. bombing that killed 19 people.</a> He suggested that if blacks were found to be supporting the whites their noses should be cut off, but his wife <a href="https://mobile.nytimes.com/1997/12/04/world/winnie-mandela-s-ex-bodyguard-tells-of-killings-she-ordered.html">Winnie found that to be too tame</a> and instead preferred "necklacing" them an act involving making the wearer put a tire doused in gasoline on their neck and then lighting it on fire.
          </p>
          <h2>Gandhi</h2>
          <p>
            A peacemaker who greatly helped prevent violence in India who also really liked to test his ability to tolerate "temptation" at the age of 77 by <a href="https://www.ibtimes.co.uk/ghandi-slept-grandniece-historian-tells-uk-government-1460499">sleeping naked in bed with his grandniece and his grandnephew's wife.</a> He also <a href="https://www.bbc.com/news/world-asia-india-34265882">agreed with the aryan's in their belief in white superiority,</a> but asked that Indians be recognized as more civilized and kept separate from the Africans.
          </p>
          <h2>Martin Luther King Jr.</h2>
          <p>
            The leader of the civil rights movement and an incredible proponent of equality among the races was also discovered to have plagiarized significant portions of his dissertation and <a href="https://www.snopes.com/fact-check/four-things-about-king/">his close friend Ralph David Abernathy wrote a book</a> detailing his many extramarital affairs. <a href="https://www.sacbee.com/news/nation-world/national/article182651026.html">FBI documents allege that he engaged in drunken orgies and had a secret love child</a> with a married woman. Some of their investigation was confirmed by Mr. Abernathy, but not all so those FBI documents are likely not entirely accurate.
          </p>
          <h2>Henry Ford</h2>
          <p>        
            Known for developing the assembly line and also for giving convicts a second chance at life by employing them, unfortunately he employed them to beat down strikers with some severely injured. He was also a raging anti-semite <a href="https://en.wikipedia.org/wiki/Henry_Ford">who Hitler praised</a> as a "great man, who the jews, to their fury had still maintains full independence."
          </p>
          <h2>Conclusion</h2>
          <p>        
            Ideas exist independent of the individual who generated them. It would seem ludicrous to decide to shut down all assembly lines, just because a racist invented it or that peaceful disobedience is wrong, because Gandhi was a bit of a racist creep. Humans are flawed beings who may occasionally bring out a spark of truth into this dark world despite our failures and inadequacies. I hope that when that spark appears we don't snuff it out simply because we don't like the individual who caused it.
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
