<template>
  <div class="flight">
    <div class="flight--about">
      <flight-info :flight="flight"></flight-info>
      <flight-details :flight="flight" v-if="!isMobile"></flight-details>
    </div>
    <price :flight="flight"></price>
  </div>
</template>

<script>
import FlightInfo from './FlightInfo'
import FlightDetails from './FlightDetails'
import Price from './Price'
import {isMobile} from "../../assets/js/screen"

export default {
  name: 'App',
  components: {
    FlightInfo,
    FlightDetails,
    Price
  },
  props: {
    flight: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isMobile: isMobile(),
    }
  },
  mounted () {
    window.addEventListener('resize', this.resizeWindow);
  },
  methods: {
    resizeWindow() {
      this.isMobile = isMobile();
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/modules/flight/flight';
@import '../../assets/css/modules/mobile/flight/flight';
</style>
