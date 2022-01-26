<template>
  <div class="flights">
    <filters></filters>
    <div class="list-flights">
      <flight v-for="flight in flights" :key="flight.id" :flight="flight"></flight>
    </div>
    <other-sites :links="links"></other-sites>
  </div>
</template>

<script>
import Filters from './Filter/Filters'
import Flight from './Flight/Flight'
import OtherSites from './core/OtherSites'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Filters,
    Flight,
    OtherSites
  },
  computed: {
    ...mapGetters({
      flights: 'getFlights'
    })
  },
  data() {
    return {
      links: [
        { logo: '/icons/sites/rahmet.png', link: 'https://rahmetapp.kz/' },
        { logo: '/icons/sites/chocolife.png', link: 'https://chocolife.me/' },
        { logo: '/icons/sites/chocofood.jpg', link: 'https://chocofood.kz/' },
      ]
    }
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
