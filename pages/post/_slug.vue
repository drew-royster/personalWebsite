<template>
  <v-content>
    <v-layout mt-3 row justify-center>
      <v-flex xs12 sm6>
        <v-card>
          <v-flex pa-3>
            <v-img :src="post.data.featured_image"></v-img>
            <v-flex mb-3>
              <h1>{{ post.data.title }}</h1>
              <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
            </v-flex>
            <div class="p-c" v-html="post.data.body"></div>
          </v-flex>
        </v-card>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import Butter from 'buttercms';
const butter = Butter('1f5d22f23bd140fa68dbc861a305884916a84055');

export default {
  name: 'blog-post',
  data() {
    return {
      post: {
        data: {
          title: 'Loading',
          author: {
            first_name: 'Loading',
            last_name: 'Loading',
          }
        }
      }
    }
  },
  methods: {
    getPost() {
      butter.post.retrieve(this.$route.params.slug)
        .then(res => {
          this.post = res.data
        }).catch(res => {
          console.log(res)
        })
    }
  },
  created() {
    this.getPost()
  }
}
</script>

<style>
  .p-c h1, .p-c h2, .p-c h3, .p-c h4, .p-c h5 {
    font-weight: 600;
    margin-bottom: 1em;
    margin-top: 1.5em;
  }

  .p-c ul, .p-c ol {
    margin-bottom: 1.25em;

  }
  .p-c li {
    margin-bottom: 0.25em;
  }

  .p-c p {
    font-family: Roboto, "Times New Roman", Times, serif;
    font-size: 1.25em;
    line-height: 1.58;
    margin-bottom: 1.25em;
    font-weight: 400;
    letter-spacing: -.003em;
  }

  /* Responsive default image width */
  .p-c img {
    max-width: 100%;
    height: auto;
  }

  /* Responsive floating */
  @media only screen and (min-width: 720px)  {
    .butter-float-left {
      float: left;
      margin: 0px 10px 10px 0px;
    }

    .butter-float-right {
      float: right;
      margin: 0px 0px 10px 10px;
    }
  }

  /* Image caption */
  .p-c figcaption {
    font-style: italic;
    text-align: center;
    color: #ccc;
  }

  .p-c p .p-c code {
    padding: 2px 4px;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 4px;
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  }

  .p-c pre {
    display: block;
    padding: 1em;
    margin: 0 0 2em;
    font-size: 1em;
    line-height: 1.4;
    word-break: break-all;
    word-wrap: break-word;
    color: #333333;
    background-color: #f5f5f5;
    font-family: Menlo, Monaco,Consolas, "Courier New", monospace;
  }
</style>
