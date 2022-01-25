<template>
  <div class="flights">
    <filters></filters>
    <div class="list-flights">
      <flight v-for="flight in flights" :key="flight.id" :flight="flight"></flight>
    </div>
  </div>
</template>

<script>
import Filters from './Filter/Filters'
import Flight from './Flight/Flight'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Filters,
    Flight
  },
  computed: {
    ...mapGetters({
      flights: 'getFlights'
    })
  },
  mounted() {
    this.$store.dispatch('loadFlights');
  }
}
</script>

<style lang="scss">
@import '../assets/css/modules/flights';
@import '../assets/css/modules/mobile/flights';
</style>
