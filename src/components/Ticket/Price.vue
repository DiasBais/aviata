<template>
  <div class="price">
    <div class="title">590 240 ₸</div>
    <simple-button></simple-button>
    <div class="price-for-all-passengers">Цена за всех пассажиров</div>
    <div class="luggage" v-if="!isMobile">
      <div class="luggage-no">Нет багажа</div>
      <input class="luggage-add" type="button" value="+ Добавить багаж">
    </div>
  </div>
</template>

<script>
import SimpleButton from '../core/SimpleButton';
import {isMobile} from "../../assets/js/screen"

export default {
  name: 'price',
  components: {
    SimpleButton
  },
  data() {
    return {
      isMobile: isMobile(),
    }
  },
  mounted () {
    window.addEventListener('resize', this.resizeWindow);
  },
  methods: {
    resizeWindow() {
      this.isMobile = isMobile();
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/modules/ticket/price.scss';
@import '../../assets/css/modules/mobile/ticket/price.scss';
</style>
