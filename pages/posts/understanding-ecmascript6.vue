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
        <Header title='Takeaways from Understanding Ecmascript 6' image='conveyor-js.png'/>
        <v-flex xs12 sm8 class="subheading">

        <br>
          <p>
            I found this book to be very useful. I’ve been using many of these ES6 features for quite some time now, but didn’t understand their roots. It’s easier to remember things when you can tie them into a history or a narrative. This book does a great job of explaining how ES6 builds upon ES5 and why some decisions were made which has helped me to remember syntax. 
          </p>
          <p>
            ES6 was made by building on the work done for ES5 and then responding to common patterns implemented in Node libraries concretizing what the community has made workarounds for. 
          </p>
          <p>
            Below are some things I picked up from this great book.
          </p>
          <br>
          <v-expansion-panel
            v-model="panel"
            expand  
          >
            <v-expansion-panel-content>
              <div slot="header"><h2>Const > Let > Var (almost never var)</h2></div>
              <v-card>
                <v-card-text class="grey lighten-3">
                  Use const unless you absolutely need to reassign the object(immutability reduces bugs) in which case use let, but now that we have ES6 using var is basically unacceptable.
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div slot="header"><h2>Use <code>…</code> to expand arrays</h2></div>
              <v-card>
                <v-card-text class="grey lighten-3">
                  <p>
                    This applies to arrays you would like to copy or with functions as a way to accept an undefined number of optional parameters.
                  </p>
                  <p>
                    Copying an array
                  </p>
                  <highlight class="code-block" language="javascript">
const countries = [ 'France', 'US', 'Canada' ];
const [ ...clonedCountries ] = countries;
                  </highlight>
                  <br>
                  <p>
                    Using optional parameters in functions
                  </p>
                  <highlight language="javascript">
function crazyEquation(operand, divisor, ...rest) {
  const sum = rest.reduce((previous, current) => previous + current, 0);
  return (operand / divisor) + sum;
}
                  </highlight>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div slot="header"><h2>Arrow functions</h2></div>
              <v-card>
                <v-card-text class="grey lighten-3">
                  <p>
                    Look way cleaner and provide much more expected behavior than what we used to have.
                  </p>
                  <highlight language="javascript">
Let echo = function(value) {
  feturn value
}
                  </highlight>
                  <p>
                    Can be
                  </p>
                  <highlight language="javascript">
let echo = value => value; 
                  </highlight>
                  <p>
                    This works because if only one value is shown after the <code>=></code> it assumes that you want to return that.
                  </p>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div slot="header"><h2>Destructuring</h2></div>
              <v-card>
                <v-card-text class="grey lighten-3">
                  <p>
                    With this object
                  </p>
                  <highlight language="javascript">
let object = {
  name: ‘blah’,
  age: 25,
}
                  </highlight>
                  <p>
                    We can now do this
                  </p>
                  <highlight language="javascript">
const { name, age } = object;
                  </highlight>
                  <p>
                    Instead of having to do this
                  </p>
                  <highlight language="javascript">
const name = object.name;
const age = object.age;
                  </highlight>
                  <p>
                    If you need to reassign it works like this
                  </p>
                  <highlight language="javascript">
let name;
let age;
({ name, age } = object);
                  </highlight>
                  <p>
                    You can also rename them like this
                  </p>
                  <highlight language="javascript">
{ name:localName, age: localAge } = object;
                  </highlight>
                  <p>
                    This also works with arrays, but it obviously just goes off indices
                  </p>
                  <highlight language="javascript">
const [ first, second, third ] = array;
                  </highlight>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div slot="header"><h2>Asynchronicity</h2></div>
              <v-card>
                <v-card-text class="grey lighten-3">
                  <p>
                    Use Promises they will make your life way better. We can take this.
                  </p>
                  <highlight language="javascript">
getCountry(function(err, country) {
  getState(country, function(err, state) {
    getCity(state, function(err, city) {
      getNeighborhood(city, function(err, neighborhood) {
        getAddress(neighborhood, function(err, address) {
          reportAddress(address, function(e) {
            ...
          });
        });
      });
    });
  });
});
                  </highlight>
                  <p>
                    To
                  </p>
                  <highlight language="javascript">
getCountry()
  .then(getState)
  .then(getCity)
  .then(getNeighborhood)
  .then(getAddress)
  .then(reportAddress)
  .then(function(success) {
    console.log(success);
  })
  .catch(function(e) {
    console.error(e);
  })
                  </highlight>
                  <p>
                    Which is just so much less to write and much cleaner. With ES8 which isn't in the book, but is now broadly supported we can even do this with awaits.
                  </p>
                  <highlight language="javascript">
try {
  const country = await getCountry();
  const state = await getState(country);
  const city = await getCity(state);
  const neighborhood = await getNeighborhood(city);
  const address = await getAddress(neighborhood);
  const reportStatus = await reportAddress(address);
  console.log(reportStatus);
} catch (err) {
  console.error(err);
}
                  </highlight>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div slot="header"><h2>Broader takeaway</h2></div>
              <v-card>
                <v-card-text>
                  Javascript is completely synchronous and asynchronous behavior only exists because of how we use it. The JS engine is basically a conveyor belt. It just runs jobs in a FIFO queue so all the other wild behavior we can get out of it is completely our doing. The key to understanding asynchronous behavior is just a matter of understanding what lines of code are returning right away and which are returning promises or are expecting callbacks to be passed into them. 
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-content>
</div>
</template>

<script>
import hljs from 'highlight.js';
import Highlight from 'vue-highlight-component';
import Header from '@/components/BlogHeader';
export default {
  name: 'blog-post',
  components: {
    Highlight,
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

<style>
/*
Docco style used in http://jashkenas.github.com/docco/ converted by Simon Madine (@thingsinjars)
*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #000;
  background: #f8f8ff;
}

.hljs-comment,
.hljs-quote {
  color: #408080;
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-subst {
  color: #954121;
}

.hljs-number {
  color: #40a070;
}

.hljs-string,
.hljs-doctag {
  color: #219161;
}

.hljs-selector-id,
.hljs-selector-class,
.hljs-section,
.hljs-type {
  color: #19469d;
}

.hljs-params {
  color: #00f;
}

.hljs-title {
  color: #458;
  font-weight: bold;
}

.hljs-tag,
.hljs-name,
.hljs-attribute {
  color: #000080;
  font-weight: normal;
}

.hljs-variable,
.hljs-template-variable {
  color: #008080;
}

.hljs-regexp,
.hljs-link {
  color: #b68;
}

.hljs-symbol,
.hljs-bullet {
  color: #990073;
}

.hljs-built_in,
.hljs-builtin-name {
  color: #0086b3;
}

.hljs-meta {
  color: #999;
  font-weight: bold;
}

.hljs-deletion {
  background: #fdd;
}

.hljs-addition {
  background: #dfd;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}
</style>
