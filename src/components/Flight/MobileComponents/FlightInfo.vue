<template>
  <div class="flight-info">
    <div class="header">
      <div class="airline-logo">
        <img :src="`https://aviata.kz/static/airline-logos/80x80/${flight.validating_carrier}.png`">
        <span class="title">{{ $parent.flightDate.carrier_name }}</span>
      </div>
      <div class="luggage-info">{{ luggage }}</div>
    </div>
    <div class="flight-time">
      <div class="takeoff">
        <p class="takeoff--date">{{ $parent.takeoffDate }}</p>
        <h1 class="takeoff--time">{{ $parent.takeoffTime }}</h1>
      </div>
      <div class="landing">
        <p class="landing--date">
          {{ $parent.landingDate }}
          <span v-if="$parent.layoverDistanceDayDiff">+{{ $parent.layoverDistanceDayDiff }}</span>
        </p>
        <h1 class="landing--time">{{ $parent.landingTime }}</h1>
      </div>
    </div>
    <div class="flight-distance">
      <div class="distance-block">
        <div class="distance">
          <div class="distance--info">
            <p class="start-point">{{ $parent.startPoint }}</p>
            <span class="distance--time">{{ $parent.distanceDiff($parent.flightDate.traveltime) }}</span>
            <p class="end-point">{{ $parent.endPoint }}</p>
          </div>
          <svg width="172" height="5">
            <use xlink:href="../../../assets/icons/0--0--0.svg#icon"></use>
          </svg>
        </div>
        <div class="layover" v-if="$parent.flightDate.stops">
          через {{ $parent.flightDate.segments[0].airport_dest }}, {{ $parent.layoverDistanceDiff }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlightInfo',
  props: {
    flight: {
      type: Object,
      required: true
    }
  },
  computed: {
    luggage() {
      const services = this.flight.services;
      return services['0PC'] ? 'Нет багажа' : services[Object.keys(services)[0]].value;
    },
  },
}
</script>
