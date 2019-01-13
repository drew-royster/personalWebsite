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
        <Header title='Vaccines' image='vaccine.jpg'/>
        <v-flex xs12 sm8 class="subheading">
        <br>
        <p>
        I’ve been diving into Stoicism lately, and have found it to resonate with me. When I first heard others talk about the stoics, it appeared to be about making yourself devoid of all emotion.
        </p>
        <h3>
        Why people believe in the vaccine-autism link
        </h3>
        <p>
        <strong>Blame</strong> I imagine how I would feel if I had a child with autism.  I would feel cheated.  I would feel that there must have been something that I did wrong.  Something that I could have done better.  I might reach out for some external thing to blame.  My poor son was poisoned!  Even though I know statistically that these things just happen, I may believe that my case is different.  My boy would have been fine if it wasn't for _____!
        </p>
        <p>
        <strong>Distrust</strong> It would be very foolish to believe that the government has never been wrong or misled us.  It has happened and will continue to happen.  If you distrust the government, then it really doesn't matter how many studies they conduct.
        </p>
        <p>
        <strong>Anecdotal evidence</strong> We believe what we can see and what we hear from those we love and trust.  If you have seen what you believe to be irrefutable evidence of something, then it will take a whole lot to get you to change your mind.
        </p>
        <h3>
        History of vaccinations
        </h3>
        <p>
        <a href="https://en.wikipedia.org/wiki/Edward_Jenner">Edward Jenner</a> is known as the "father of immunology".  Before his discovery, we helped prevent smallpox by inoculations which were much more risky.  He is widely regarded to have saved more lives than any other human being to have lived thus far.
        </p>
        <h4>
        Development of smallpox vaccine
        </h4>
         <ol>
          <li>Jenner found that milkmaids rarely(if ever) got smallpox.</li>
          <li>He noticed that they sometimes got pustules on their hands from cowpox that appeared similar to smallpox pustules.</li>
          <li>He tested the theory by scraping pus from a cowpox infested milkmaid and infecting an 8 year old boy.</li>
          <li>The boy was found to be immune to smallpox.</li>
          <li>Through additional patients and tests, Jenner proved that a cowpox infection prevented smallpox.</li>
        </ol>
        <br>
        <h3>
        History of anti-vax movement
        </h3>
        <p>
        <a href="https://en.wikipedia.org/wiki/Andrew_Wakefield">Andrew Wakefield</a> is widely regarded as the father of the anti-vax movement.  Most if not all of the controversy behind vaccines started after he and 12 colleagues posted a "study" they conducted in 1998.  It consisted of 12 patients.  Wakefield was linking MMR vaccinations to autism believing that it affected the gastrointestinal system which then caused autism.  Their study and publication in Lancet went viral and led to many parents deciding that vaccines were too dangerous.  Now many others have became anti-vax advocates making claims similar to Wakefield's.
        </p>
        <p>
        Wakefield continues to actively support the theory he pushed in 1998 and recently released the film <a href="http://vaxxedthemovie.com/">Vaxxed.</a>
        </p>
        <h3>
        Inconsistencies and problems
        </h3>
        <h4>
        Original Study
        </h4>
         <ul>
          <li>12/5,975,303,657 people is far too small of a sample to ever be considered statistically significant</li>
          <li>A law firm was attempting to discredit the MMR vaccine at the time.  It was found that...
            <ul>
            <li>The children in his study were claimants in the lawsuit.</li>
            <li>The firm contributed £3.4m to doctors and scientists with Wakefield receiving over £400,000.</li>
            <li>Brian Deer, the journalist who uncovered these blatant conflicts of interest, was sued by Wakefield for libel twice.  Both times the case was thrown out and Wakefield was left responsible to pay for court fees.</li>
            </ul>
          </li>
        </ul>
        <br>
        <h4>
        Wakefield's tax statements
        </h4>
        <p>
        Andrew Wakefield started the Strategic Autism Initiative in 2010.  It's goal was to...
        </p>
        <p>
        SAI's mission is to promote research in the areas of autism and neurological disorders, in particular designing and commissioning research projects and setting strategic research priorities
        </p>
        <p>
        The problem is that almost all of that money went into Wakefields pockets.  <a href="https://lbrbblog.files.wordpress.com/2014/11/sai-2012-form-990.pdf">Here</a> is his 2012 990 tax form as an example. <a href="https://leftbrainrightbrain.co.uk/2014/11/07/andrew-wakefield-paid-316k-to-administer-80k-in-grants-by-the-strategic-autism-inititiative/">Matt Carey</a> did a great analysis of this nonprofit finding that only $.13 of every dollar actually went towards research of any kind.
        </p>
        <h3>
        Studies
        </h3>
        <p>
        <a href="https://www.healthychildren.org/English/safety-prevention/immunizations/Pages/Vaccine-Studies-Examine-the-Evidence.aspx">Here</a> is a relatively exhaustive list on the studies done so far relating to vaccines. None so far have found a link.  A few studies have attempted to show a link, but these were later <a href="http://www.popularmechanics.com/science/health/a4998/4345610/">discredited.</a>
        </p>
        <h3>
        My take
        </h3>
        <p>
        Even though autism rates have risen, we do not yet know the reason and it has been proven time and time again that vaccines aren't behind it.  Wasting all of our resources restudying vaccines isn't helping anyone and may actually be hurting us.  Viruses such measles, mumps, and even smallpox are still around.  Herd immunity is what protects our young children who have not yet been vaccinated.  Were that to be compromised, we would have a real problem on our hands.  This <a href="https://www.reddit.com/r/TwoXChromosomes/comments/5na3ry/please_please_please_god_vaccinate_your_kids/?st=IXT098HW&sh=223479bd">heartbreaking post</a> on reddit is one of the reasons I felt the need to investigate this issue.  Believe what you will, but I beg all to be open to thoroughly reading the research that has been done on this issue.
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