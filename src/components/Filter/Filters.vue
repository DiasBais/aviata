<template>
  <div class="filters">
    <tariff></tariff>
    <airlines></airlines>
    <div class="reset-all" @click="resetAll">Сбросить все фильтры</div>
  </div>
</template>

<script>
import Tariff from './Tariff'
import Airlines from './Airlines'

export default {
  name: 'App',
  components: {
    Tariff,
    Airlines
  },
  methods: {
    resetAll() {
      this.$store.commit('SET_FILTER_TARIFF', []);
      this.$store.commit('SET_FILTER_AIRLINES', []);
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/css/modules/filter/filters.scss';
@import '../../assets/css/modules/mobile/filter/filters.scss';
</style>
