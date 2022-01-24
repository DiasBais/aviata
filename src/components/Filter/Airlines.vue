<template>
  <div class="airlines">
    <simple-filter :title="title" :options="filters"></simple-filter>
  </div>
</template>

<script>
import SimpleFilter from '../core/SimpleFilter'

export default {
  name: 'Airlines',
  components: {
    SimpleFilter,
  },
  data() {
    return {
      title: 'Авиакомпании',
      filters: [
        { key: 0, title: 'Все' },
        { key: 1, title: 'Air Astana' },
        { key: 2, title: 'Bek Air' },
        { key: 3, title: 'Fly Arystan' },
        { key: 4, title: 'SCAT Airlines' },
        { key: 5, title: 'Lufthansa' },
        { key: 6, title: 'Turkish Airlines' },
        { key: 7, title: 'China Southern Air' },
      ]
    }
  }
}
</script>
