<template>
  <div class="ticket-info">
    <div class="airline-logo">
      <svg width="20" height="20">
        <use xlink:href="../../assets/icons/logo-mini-ks.svg#icon"></use>
      </svg>
      <span class="title">Air Astana</span>
    </div>
    <div class="takeoff">
      <p class="takeoff--date">25 ноя, вс</p>
      <h1 class="takeoff--time">23:25</h1>
    </div>
    <div class="flight">
      <div class="distance">
        <div class="distance--info">
          <p class="start-point">ALA</p>
          <span class="distance--time">4 ч 20 м</span>
          <p class="end-point">TSE</p>
        </div>
        <svg width="172" height="5">
          <use xlink:href="../../assets/icons/0--0--0.svg#icon"></use>
        </svg>
      </div>
      <div class="layover">через Шымкент, 1 ч 50 м</div>
    </div>
    <div class="landing">
      <p class="landing--date">26 ноя, сб <span>+1</span></p>
      <h1 class="landing--time">03:45</h1>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/css/modules/ticket/ticket_info.scss';
</style>
