<script setup>
import { ref } from 'vue'
const revealTime = 2200
const isReveal = ref(false)
setTimeout(() => {
   isReveal.value = true
}, revealTime);
</script>

<template>
   <div>
      <Header :revealTime="revealTime" />
      <div class="main">
         <h1 class="main__title"
            :class="{ 'is-reveal': isReveal }">Daniyalov Atav</h1>
         <p class="main__desc"
            :class="{ 'is-reveal-desc': isReveal }">Front-end developer </p>
         <div class="main__move">
            <div class="main__mouse"></div>
            <div class="main__line"></div>
         </div>
      </div>
      <Loader />
   </div>
</template>

<style lang ="scss">
.main {
   width: calc(100vw);
   height: calc(100vh - 77px);

   &__title {
      display: inline;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 54px;
      font-family: Pacifico;
      font-weight: 300;
      font-style: italic;

      &::before {
         content: '';
         position: absolute;
         top: 0%;
         left: 0%;
         width: 110%;
         height: 100%;
         background-color: #fff;
         transition: left 0.65s cubic-bezier(.694, .048, .335, 1);
      }
   }

   &__desc {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: top 0.65s cubic-bezier(.694, .048, .335, 1);

      &::before {
         content: '';
         position: absolute;
         top: 0;
         width: 100%;
         height: 100%;
         background-color: #fff;
         transition: top 0.65s cubic-bezier(.694, .048, .335, 1);
      }
   }
}



.is-reveal {
   &-desc {
      top: 58%;

      &::before {
         top: 100%;
      }
   }


   &::before {
      left: 106%;
   }
}
</style>
