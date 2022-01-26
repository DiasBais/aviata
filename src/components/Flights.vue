<template>
  <div class="flights">
    <filters></filters>
    <div class="list-flights">
      <flight v-for="flight in filteredFlights" :key="flight.id" :flight="flight"></flight>
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
      airlinesFilter: 'getFilterAirlines',
      tariffFilter: 'getFilterTariff',
    }),
    flights: {
      get() {
        return this.$store.getters['getFlights'];
      },
      set(value) {
        this.$store.commit('SET_FLIGHTS', value)
      }
    }
  },
  watch: {
    airlinesFilter: {
      deep: true,
      handler: function() {
        this.filter();
      }
    },
    tariffFilter: {
      deep: true,
      handler: function() {
        this.filter();
      }
    },
    flights: {
      deep: true,
      handler: function() {
        this.filteredFlights = this.flights;
      }
    }
  },
  data() {
    return {
      links: [
        { logo: '/icons/sites/rahmet.png', link: 'https://rahmetapp.kz/' },
        { logo: '/icons/sites/chocolife.png', link: 'https://chocolife.me/' },
        { logo: '/icons/sites/chocofood.jpg', link: 'https://chocofood.kz/' },
      ],
      filteredFlights: []
    }
  },
  mounted() {
    this.$store.dispatch('loadFlights');
  },
  methods: {
    filter() {
      let flights = this.filterTariff(this.flights);
      this.filteredFlights = this.filterAirlines(flights);
    },
    filterAirlines(flights) {
      const airlines = this.airlinesFilter.map(airline => airline.key);

      if (airlines.length) {
        return flights.filter(flight => airlines.includes(flight.validating_carrier));
      }

      return flights;
    },
    filterTariff(flights) {
      for (const tariff of this.tariffFilter) {
        switch(tariff.key) {
          case 'straight':
            flights = flights.filter(flight => !flight.itineraries[0][0].stops);
            break;
          case 'luggage':
            flights = flights.filter(flight => !flight.services['0PC']);
            break;
          case 'refundable':
            flights = flights.filter(flight => flight.refundable);
            break;
        }
      }

      return flights;
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/modules/flights';
@import '../assets/css/modules/mobile/flights';
</style>
