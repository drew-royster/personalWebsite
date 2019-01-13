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
        <Header title='Stoicism basics' image='senecca.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <p>
        I’ve been diving into Stoicism lately, and have found it to resonate with me. When I first heard others talk about the stoics, it appeared to be about making yourself devoid of all emotion.
        </p>
        <p>
        Never show happiness, sadness or really any emotion.
        </p>
        <p>
        What I have learned is that Stoicism isn’t about denying emotion, but directing it.
        </p>
        <h3>
        Being the rock
        </h3>
        <p>
        ”From Appolonius, true liberty, and unvariable steadfastness, and not to regard anything at all, though never so little, but right and reason: and always, whether in the sharpest pains, or after the loss of a child, or in long diseases, to be still the same man;” -Marcus Aurelius, Meditations
        </p>
        <p>
        When I first read this, I mistakenly believed that this was an act of repression and would cause long lasting problems. I was wrong and think these definitions might be helpful.
        </p>
        <p>
        <strong>Repression</strong> happens when you simply cannot deal with something, so your subconscious mind takes over for you and locks it away. It’s very common in cases of sexual abuse, when a child simply does not have the tools to handle what has happened. It can have profound effects on who you are and how you feel, without you even being able to recall them.
        </p>
        <p>
        <strong>Suppression</strong> is different, because we are actively in control. It happens when a friend does something you don’t like and you swallow your frustration instead of picking a fight. You are in control. Being a conscious decision, should your friend continue to be a bother, you can act accordingly. Were it repression, you wouldn’t even know why you were upset to begin with.
        </p>
        <p>
        Marcus is promoting the idea that suppression is good. When we temper sadness, anger, or even happiness, we can make decisions based on our principles rather than our feelings.
        </p>
        <h3>
        Being the captain
        </h3>
        <p>
        Most of us drift through life being carried to and fro by our emotions and never truly guide ourselves. We wait for happiness to hit us and we fear the next time sadness will strike. A true Stoic actively looks for things to find joy in. They don’t just temper their emotions when they are struck by them, but actively look to cultivate a grateful attitude.
        </p>
        <p>
        "The hanging down of grapes—the brow of a lion, the froth of a foaming wild boar, and many other like things, though by themselves considered, they are far from any beauty, yet because they happen naturally, they both are comely, and delightful; so that if a man shall with a profound mind and apprehension, consider all things in the world, even among all those things which are but mere accessories and natural appendices as it were, there will scarce appear anything unto him, wherein he will not find matter of pleasure and delight." -Marcus Aurelius, Meditations
        </p>
        <p>
        Another way to say this is “stop and smell the roses”. Don’t take things for granted, recultivate within yourself a childlike sense of wonder. You’ll find beauty in the ugliest things.
        </p>
        <h3>
        Being humble
        </h3>
        <p>
        Where is the strength in an outstretched spring?
        </p>
        <p>
        There is none.
        </p>
        <p>
        Likewise, there is no greatness in a self-aggrandizing man.
        </p>
        <p>
        For a time they may fool those around them, but one day others will say to each other “this man is not all he believes himself to be”. This man had no self-esteem and will proceed to lose the esteem of those around him.
        </p>
        <p>
        “A man without ever the least appearance of anger, or any other passion; able at the same time most exactly to observe the Stoic Apathia, or unpassionateness, and yet to be most tender-hearted: ever of good credit; and yet almost without any noise, or rumour: very learned, and yet making little show.” -Marcus Aurelieus, Meditations
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