<template>
  <div class="tariff">
    <simple-filter :title="title" :options="filters" v-model:selected="selectedItems"></simple-filter>
  </div>
</template>

<script>
import SimpleFilter from '../core/SimpleFilter'

export default {
  name: 'Tariff',
  components: {
      SimpleFilter,
  },
  computed: {
    selectedItems: {
      get() {
        return this.$store.getters['getFilterTariff'];
      },
      set(value) {
        this.$store.commit('SET_FILTER_TARIFF', value)
      }
    }
  },
  data() {
    return {
      title: 'Опции тарифа',
      filters: [
        { key: 'straight', title: 'Только прямые' },
        { key: 'luggage', title: 'Только с багажом' },
        { key: 'refundable', title: 'Только возвратные' },
      ],
    }
  }
}
</script>
