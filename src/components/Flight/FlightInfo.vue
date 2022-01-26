<template>
  <div>
    <div class="flight-info" v-if="!isMobile">
      <div class="airline-logo">
        <img :src="`https://aviata.kz/static/airline-logos/80x80/${flight.validating_carrier}.png`">
        <span class="title">{{ flightDate.carrier_name }}</span>
      </div>
      <div class="takeoff">
        <p class="takeoff--date">{{ takeoffDate }}</p>
        <h1 class="takeoff--time">{{ takeoffTime }}</h1>
      </div>
      <div class="distance-block">
        <div class="distance">
          <div class="distance--info">
            <p class="start-point">{{ startPoint }}</p>
            <span class="distance--time">{{ distanceDiff(flightDate.traveltime) }}</span>
            <p class="end-point">{{ endPoint }}</p>
          </div>
          <svg width="172" height="5">
            <use xlink:href="../../assets/icons/0--0--0.svg#icon"></use>
          </svg>
        </div>
        <div class="layover" v-if="flightDate.stops">через {{ flightDate.segments[0].airport_dest }}, {{ layoverDistanceDiff }}</div>
      </div>
      <div class="landing">
        <p class="landing--date">{{ landingDate }}<span v-if="layoverDistanceDayDiff">+{{ layoverDistanceDayDiff }}</span></p>
        <h1 class="landing--time">{{ landingTime }}</h1>
      </div>
    </div>
    <mobile-flight-info :flight="flight" v-else></mobile-flight-info>
  </div>
</template>

<script>
import moment from "moment"
import {isMobile} from "../../assets/js/screen";
import MobileFlightInfo from "./MobileComponents/FlightInfo"

export default {
  name: 'FlightInfo',
  components: {
    MobileFlightInfo
  },
  props: {
    flight: {
      type: Object,
      required: true
    }
  },
  computed: {
    flightDate() {
      return this.flight.itineraries[0][0];
    },
    takeoffDate() {
      return this.formatDate(this.flightDate.dep_date.split(' ')[0]);
    },
    landingDate() {
      return this.formatDate(this.flightDate.arr_date.split(' ')[0]);
    },
    takeoffTime() {
      return this.flightDate.dep_date.split(' ')[1];
    },
    landingTime() {
      return this.flightDate.arr_date.split(' ')[1];
    },
    distanceDiff() {
      return (distanceTime) => {
        let day = Math.floor(Math.floor(distanceTime / 3600) / 24);
        let hour = Math.floor(distanceTime / 3600) % 24;
        let minute = ((distanceTime % 3600) / 60);

        return ((day ? day + ' д ' : '') + (hour ? hour + ' ч ' : '') + minute + ' м');
      }
    },
    layoverDistanceDiff() {
      const arrTime = new Date(this.flightDate.segments[0].arr_time_iso);
      const depTime = new Date(this.flightDate.segments[0].dep_time_iso);

      return this.distanceDiff((arrTime - depTime) / 1000);
    },
    layoverDistanceDayDiff() {
      const arrTime = moment(new Date(this.flightDate.segments[0].arr_time_iso));
      const depTime = moment(new Date(this.flightDate.segments[0].dep_time_iso));

      return arrTime.diff(depTime, 'days');
    },
    startPoint() {
      return this.flightDate.segments[0].origin_code;
    },
    endPoint() {
      return this.flightDate.segments[this.flightDate.segments.length - 1].dest_code;
    },
  },
  methods: {
    formatDate(date) {
      moment.locale('ru');
      return moment(new Date(date)).format('DD MMM ddd');
    },
    resizeWindow() {
      this.isMobile = isMobile();
    }
  },
  data() {
    return {
      isMobile: isMobile(),
    }
  },
  mounted () {
    window.addEventListener('resize', this.resizeWindow);
  },
}
</script>

<style lang="scss">
@import '../../assets/css/modules/flight/flight_info';
@import '../../assets/css/modules/mobile/flight/flight_info';
</style>
