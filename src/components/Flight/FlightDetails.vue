<template>
  <div class="flight-details">
    <a class="details" href="#">Детали перелета</a>
    <a class="tariff-terms" href="#">Условия тарифа</a>
    <div class="non-refundable" v-if="!flight.refundable">
      <svg width="20" height="20">
        <use xlink:href="../../assets/icons/icon-non-refundeble.svg#icon"></use>
      </svg>
      <span class="non-refundable--title">невозвратный</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlightDetails',
  props: {
    flight: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss">
@import '../../assets/css/modules/flight/flight_details';
@import '../../assets/css/modules/mobile/flight/flight_details';
</style>
