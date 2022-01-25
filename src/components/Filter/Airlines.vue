<template>
  <div class="airlines">
    <simple-filter :title="title" :options="filters"></simple-filter>
  </div>
</template>

<script>
import SimpleFilter from '../core/SimpleFilter'
import { mapGetters } from 'vuex'

export default {
  name: 'Airlines',
  components: {
    SimpleFilter,
  },
  data() {
    return {
      title: 'Авиакомпании',
      filters: []
    }
  },
  computed: {
    ...mapGetters({
      airlines: 'getAirlines'
    })
  },
  watch: {
    airlines: {
      deep: true,
      handler: function() {
        this.setFilters(Object.entries({...this.airlines}))
      }
    }
  },
  methods: {
    setFilters(airlines) {
      this.filters = []
      for (const [key, item] of airlines) {
        this.filters.push({key: key, title: item })
      }
    }
  }
}
</script>
