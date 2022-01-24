<template>
  <div class="simple-checkbox">
    <input :id="option.key" :checked.prop="option.selected" class="checkbox" type="checkbox">
    <label :for="option.key" :class="!option.selected ? 'checkbox__label' : 'checkbox__label--active'" @click="check()"></label>

    <span class="option__title">{{ option.title }}</span>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    option: {
      type: Object,
      required: true
    }
  },
  methods: {
    check() {
      this.$emit('checked', this.option);
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/modules/core/checkbox.scss';
</style>
