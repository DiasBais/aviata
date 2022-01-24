<template>
  <div class="tariff">
    <simple-filter :title="title" :options="filters"></simple-filter>
  </div>
</template>

<script>
import SimpleFilter from '../core/SimpleFilter'

export default {
  name: 'Tariff',
  components: {
      SimpleFilter,
  },
  data() {
    return {
      title: 'Опции тарифа',
      filters: [
        { key: 0, title: 'Только прямые' },
        { key: 1, title: 'Только с багажом' },
        { key: 2, title: 'Только возвратные' },
      ],
    }
  }
}
</script>
