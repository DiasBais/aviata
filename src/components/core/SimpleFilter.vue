<template>
  <div class="simple-filter">
    <div class="header">
      <h1 class="title">{{ title }}</h1>
      <svg class="close-filter" width="20" height="20" v-if="selectedItems.length" @click="resetFilter">
        <use xlink:href="../../assets/icons/icon-close-filter.svg#icon"></use>
      </svg>
    </div>
    <div class="list-options">
      <ul class="options">
        <li class="option" v-for="(option, index) in options" :key="index" @click="toggleItem(option)">
          <checkbox :option="{ title: option.title, selected: isSelected(option) }"></checkbox>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Checkbox from '../core/Checkbox'

export default {
  name: 'SimpleFilter',
  components: {
    Checkbox
  },
  props: {
    title: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selectedItems: []
    }
  },
  computed: {
    isSelected() {
      return item => this.selectedItems.some(selected => selected.key === item.key);
    },
  },
  methods: {
    resetFilter() {
      this.selectedItems = [];
    },
    toggleItem(item) {
      if (this.isSelected(item)) {
        this.selectedItems = this.selectedItems.filter(selected => selected.key !== item.key);
      } else {
        this.selectedItems.push(item);
      }
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/modules/core/filter.scss';
</style>
