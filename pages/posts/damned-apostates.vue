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
        <Header title='What the "damned" apostates want you to understand' image='zacchaeus.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <h3>
        They don't believe that they are damned
        </h3>
        <p>
        It is highly unlikely that an individual would leave the church believing that what they were doing was wrong and that they would be punished for it. They start to leave for a wide variety of reasons, but once they leave most don't feel guilt. They've decided the church is a lie, why would they care what supposed punishment you warn will happen to them if they don't come back.
        </p>
        <p>
        A good friend who recently left the church sent me this
        </p>
        <p>
        <i>The girl I was 2 years ago would be shocked with who I am and where I am at now. But the woman I am today is proud of the choices I am making. The woman I am today loves the choices I am making. The woman I am today is happy. I am happier now than I have ever been in my life.</i>
        </p>
        <p>
        Does that sound like someone who you can guilt-trip into coming back to church?
        </p>
        <h3>
        They are happy
        </h3>
        <p>
        <i>Leaving was painful and it was hard. Leaving meant losing all I had ever known. And that was scary as hell. Not only was it scary but it hurt. It hurt knowing the pain that many family and friends feel because of my choice. It hurts knowing that they won’t believe me when I say, "I am the happiest I have ever been."</i>
        </p>
        <p>
        I fear that there is a gross misunderstanding of what the gospel requires and what the gospel gives you. Being an active member of the church doesn't mean that you will be happy and leaving the church doesn't mean that you will live the rest of your days in misery. It's about constantly working to make yourself better and that is an exhausting process.
        </p>
        <p>
        If you have spent your entire life beating yourself up for your weaknesses, then leaving the church would be a huge relief. Whether or not you believe that the gospel will pay off, in the end, is beside the point.
        </p>
        <h3>
        They aren't satisfied with your vague responses to doubts
        </h3>
        <p>
        <i>I was an active member, attending every week. I worked in the temple as an ordinance worker (so it really offended me when people asked, “Haven’t you thought about your covenants?!” Of course I had, I had them all memorized, I knew them better than most did). I paid my tithing. I read my scriptures every day. I prayed every day.</i>
        </p>
        <p>
        <strong>Member with doubts</strong> I just think it's total garbage that blacks were denied the priesthood for so long. Why do you think that is?
        </p>
        <p>
        <strong>Friend</strong> Well maybe the real reason you are having doubts is that you aren't reading your scriptures and praying enough.
        </p>
        <p>
        <strong>Member with doubts</strong> ...
        </p>
        <p>
        This is what happens.
        </p>
        <p>
        Constantly.
        </p>
        <p>
        What an incredibly lazy and foolish way to address a doubt.
        </p>
        <h4>
        This response
        </h4>
         <ol>
          <li>Puts blame on the doubter. "You don't believe because you just aren't spiritual enough".</li>
          <li>Implies that magically complex doubts will resolve themselves through vaguely directed scripture reading and prayer. Seems a lot like firing a machine gun blindly into a forest and expecting to find that you have taken down the beautiful buck that you might have seen in there last week.</li>
          <li>Dodges the question entirely. A simple, "I don't know" would be better.</li>
        </ol>
        <h3>
        Another situation
        </h3>
        <p>
        <strong>Member with doubts</strong> How come I just found out that Joseph Smith practiced polygamy? Feels like someone was hiding it from me.
        </p>
        <p>
        <strong>Friend</strong> I don't know about that, but I KNOW that the church is true and I know that Joseph Smith was a prophet.
        </p>
        <p>
        <strong>Member with doubts</strong> Okay...
        </p>
        <p>
        Another blatant lack of listening and empathy. Testimony bombing someone with doubts does nothing for them. If someone is coming to you with doubts, they haven't made up their minds. Many times they are asking, possibly begging you to help them stay in the church. They want to talk out the doubt. They want to resolve it. Vomiting your testimony on them while they are trying to vent is simply going to ensure that they don't open up to you again.
        </p>
        <h3>
        They still want to be your friend
        </h3>
        <p>
        <i>I was a leader. But there were a lot of good things during those 18 months too. I made some of the greatest friendships I’ve ever had. And two people that I met in particular while in Brazil have helped me through this challenging year more than I or they could have ever imagined. One is another missionary that I served with. One is a girl I taught and helped get baptized. They love and support unconditionally.</i>
        </p>
        <p>
        Even many of those who despise the Church will admit that they miss the social support of the church. They don't hate you, they might hate Joseph Smith, Brigham Young, or even God, but if you were their friend in the church they will hope that you are still their friend after leaving the church. It's possible that many friends will withdraw from them.  Having a non-judgmental friend will make their life happier.
        </p>
        <p>
        This applies to sincere and close friends only.
        </p>
        <h3>
        They don't want your self-righteous concern
        </h3>
        <p>
        <i>So many people began treating me differently during this whole process. Some people begged me to stay. Some people just stopped talking to me.</i>
        </p>
        <p>
        If someone you met in a singles ward four years ago leaves the church, they probably don't care what you think about them leaving. They absolutely will not appreciate you pretending to be closer than you actually are. Imagine leaving and then receiving dozens of messages from people you haven't heard from in years, asking "Are you okay?", "Need to talk?", or "Praying for you!!!". It would be insulting and frankly, make me think "wow I dodged a bullet getting out of that cult".
        </p>
        <p>
        I'm not saying that this is as a definitive rule, but be aware of your intentions. Are you doing this to feel good about yourself? Do you believe that you reaching out to them at that moment will have some actual positive effect on their life?
        </p>
        <h3>
        They don't want to be judged
        </h3>
        <p>
        <i>I knew that many people in the church would view my choice to leave as a sign of weakness, that I wasn’t strong enough to hold on. And anyone that knows me, knows that I don’t like to be perceived as weak.</i>
        </p>
        <p>
        The whole "judge not, lest ye be judged" was meant to be applied literally. Empathy is the key.
        </p>
        <p>
        Bear with me on this
        </p>
        <p>
        An example of what I mean is shown in a story told of George Washington, who, meeting a coloured man in the road once, who politely lifted his hat, lifted his own in return. Some of his white friends who saw the incident criticised Washington for his action. In reply to their criticism George Washington said: “Do you suppose that I am going to permit a poor, ignorant, coloured man to be more polite than I am?” Washington, Booker T.. Up from Slavery (Dover Thrift Editions) (p. 38). Dover Publications. Kindle Edition.
        </p>
        <p>
        Ex-Mormons most likely think that you are stupid, naive or stubborn for remaining in the church. You most likely believe that on some level you are superior to them. Are we going to permit that a poor, ignorant, apostate be more polite than us?
        </p>
        <h3>
        About
        </h3>
        <p>
        I apologize for the sharp tone I have taken in this article, I merely hoped to drive the point home. I have watched as friends have left the church and members have responded in a grossly inappropriate fashion. I am embarrassed by these actions and hope that they are caused by curable ignorance. It is my hope that a bridge of friendship can be extended and a common understanding reached.
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