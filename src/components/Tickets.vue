<template>
  <div class="tickets">
    <filters></filters>
    <ticket></ticket>
  </div>
</template>

<script>
import Filters from './Filter/Filters'
import Ticket from './Ticket/Ticket'

export default {
  name: 'App',
  components: {
    Filters,
    Ticket
  }
}
</script>

<style lang="scss">
@import '../assets/css/modules/tickets.scss';
@import '../assets/css/modules/mobile/tickets.scss';
</style>
