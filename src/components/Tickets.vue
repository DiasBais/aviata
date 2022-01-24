<template>
  <div>
    <Filters></Filters>
    <Ticket></Ticket>
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