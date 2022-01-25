<template>
  <div class="ticket">
    <div class="ticket--about">
      <mobile-ticket-info v-if="isMobile"></mobile-ticket-info>
      <ticket-info v-else></ticket-info>
      <ticket-details v-if="!isMobile"></ticket-details>
    </div>
    <price></price>
  </div>
</template>

<script>
import TicketInfo from './TicketInfo'
import TicketDetails from './TicketDetails'
import Price from './Price'
import MobileTicketInfo from './MobileComponents/TicketInfo'

export default {
  name: 'App',
  components: {
    TicketInfo,
    TicketDetails,
    Price,
    MobileTicketInfo
  },
  computed: {
    isMobile: () => window.innerWidth < 650
  }
}
</script>

<style lang="scss">
@import '../../assets/css/modules/ticket/ticket.scss';
@import '../../assets/css/modules/mobile/ticket/ticket.scss';
</style>
