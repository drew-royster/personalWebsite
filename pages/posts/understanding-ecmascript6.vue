<template>
  <v-content>
    <v-layout mt-3 row justify-center>
      <v-flex xs12 sm8>
        <v-card>
          <v-flex pa-5>
            <v-img :src="getImage('conveyor-js.png')"></v-img>
            <v-flex mb-3>
              <h1>Takeaways from Understanding Ecmascript 6 by Nicholas Zakas</h1>
            </v-flex>
            <v-card-text>
              <p>
                I found this book to be very useful. I’ve been using many of these ES6 features for quite some time now, but didn’t understand their roots. It’s easier to remember things when you can tie them into a history or a narrative. This book does a great job of explaining how ES6 builds upon ES5 and why some decisions were made which has helped me to remember syntax. 
              </p>
              <p>
                ES6 was made by building on the work done for ES5 and then responding to common patterns implemented in Node libraries concretizing what the community has made workarounds for. 
              </p>
              <p>
                Below are some things I picked up from this great book.
              </p>
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
                      <highlight language="javascript">
                        const countries = [ 'France', 'US', 'Canada' ];
                        const [ ...clonedCountries ] = countries;
                      </highlight>
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
            </v-card-text>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import hljs from 'highlight.js';
import 'highlight.js/styles/school-book.css';
import Highlight from 'vue-highlight-component';
export default {
  name: 'blog-post',
  components: {
    Highlight
  },
  data() {
    return {
      panel: []
    }
  },
  methods: {
    getImage(name) {
      return require(`@/assets/${name}`);
    }
  }
}
</script>
