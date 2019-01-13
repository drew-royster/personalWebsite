<template>
  <div>
    <v-flex mb-3>
      <h1 class="display-3">{{ title }}</h1>
    </v-flex>
    <v-img :src="headerImage" max-width="500"></v-img>
    <br>
  </div>
</template>

<script>
export default {
  props: [ 'title', 'image' ],
  computed: {
    headerImage: function() {
      return require(`@/assets/${this.image}`);
    },
  }
}
</script>