<template>
  <div class="price">
    <div class="title">590 240 ₸</div>
    <div class="btn">
      <simple-button></simple-button>
    </div>
    <div class="price-for-all-passengers">Цена за всех пассажиров</div>
  </div>
</template>

<script>
import SimpleButton from '../../core/SimpleButton';

export default {
  name: 'price',
  components: {
    SimpleButton
  }
}
</script>

<style lang="scss">
@import '../../../assets/css/modules/mobile/ticket/price.scss';
</style>
