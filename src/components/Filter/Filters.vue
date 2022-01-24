<template>
  <div>
    <tariff></tariff>
    <airlines></airlines>
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
  }
}
</script>

<style lang="scss">
@import '../../assets/css/modules/filter/filters.scss';
</style>
