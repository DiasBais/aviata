<template>
  <div class="ticket">
    <div class="ticket--about">
      <ticket-info></ticket-info>
      <ticket-details></ticket-details>
    </div>
    <price></price>
  </div>
</template>

<script>
import TicketInfo from './TicketInfo'
import TicketDetails from './TicketDetails'
import Price from './Price'

export default {
  name: 'App',
  components: {
    TicketInfo,
    TicketDetails,
    Price
  }
}
</script>

<style lang="scss">
@import '../../../assets/css/modules/mobile/ticket/ticket.scss';
</style>
