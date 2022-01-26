<template>
  <div :class="'other-sites '+(discover?'':'other-sites-close')">
    <div class="discover" v-on:click="toggleDiscover">
      <div class="discover-content">
        <div class="discover-item"></div>
        <div class="discover-item"></div>
        <div class="discover-item"></div>
      </div>
    </div>
    <div class="sites">
      <a class="site" :href="link.link" target="_blank" v-for="(link, index) in links" :key="index">
        <img class="site-icon" :src="link.logo">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtherSites',
  props: {
    links: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      discover: false,
    }
  },
  methods: {
    toggleDiscover() {
      this.discover = !this.discover;
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/modules/core/other_sites';
</style>
