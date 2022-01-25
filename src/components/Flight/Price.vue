<template>
  <div class="price">
    <div class="title">{{ flight.price }} ₸</div>
    <simple-button></simple-button>
    <div class="price-for-all-passengers">Цена за всех пассажиров</div>
    <div class="luggage" v-if="!isMobile">
      <div class="luggage-no">{{ luggage }}</div>
      <input class="luggage-add" type="button" value="+ Добавить багаж">
    </div>
  </div>
</template>

<script>
import SimpleButton from '../core/SimpleButton'
import {isMobile} from "../../assets/js/screen"

export default {
  name: 'price',
  components: {
    SimpleButton
  },
  props: {
    flight: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isMobile: isMobile(),
    }
  },
  computed: {
    luggage() {
      const services = this.flight.services;
      return services['0PC'] ? 'Нет багажа' : services[Object.keys(services)[0]].value;
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
@import '../../assets/css/modules/flight/price.scss';
@import '../../assets/css/modules/mobile/flight/price.scss';
</style>
