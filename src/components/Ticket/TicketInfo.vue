<template>
  <div class="ticket-info">
    <div class="logo">
      <svg class="close-filter" width="20" height="20">
        <use xlink:href="../../assets/icons/logo-mini-ks.svg#icon"></use>
      </svg>
      <span class="title">Air Astana</span>
    </div>
    <div class="after">
      <p>25 ноя, вс</p>
      <h1>23:25</h1>
    </div>
    <div class="flight">
      <div class="flight--line">
        <div class="flight--line-info">
          <p>ALA</p>
          <span>4 ч 20 м</span>
          <p>TSE</p>
        </div>
        <svg class="flight--line-svg" width="172" height="5">
          <use xlink:href="../../assets/icons/0--0--0.svg#icon"></use>
        </svg>
      </div>
      <div class="flight--info">через Шымкент, 1 ч 50 м</div>
    </div>
    <div class="before">
      <p>26 ноя, сб <span>+1</span></p>
      <h1>03:45</h1>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../assets/css/modules/ticket/ticket_info.scss';
@import '../../assets/css/modules/mobile/ticket/ticket_info.scss';
</style>
