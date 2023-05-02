<script setup>
import { ref } from "vue"
const revealTime = 2200
const isReveal = ref(false)

setTimeout(() => {
   isReveal.value = true
}, revealTime)
</script>

<template>
  <div>
    <TheHeader :revealTime="revealTime" />
    <div class="main">
      <h1 class="main__title" :class="{ 'is-reveal': isReveal }">
        Daniyalov Atav
      </h1>
      "
      <p class="main__desc" :class="{ 'is-reveal-desc': isReveal }">
        Front-end developer
      </p>
      <div class="main__move move">
        <div class="move__container" :class="{ 'is-reveal-move': isReveal }">
          <div class="move__desc">Works</div>
          <div class="move__mouse">
            <img src="~/assets/icons/mouse.webp" alt="mouse" />
          </div>
          <div class="move__line"></div>
        </div>
      </div>
    </div>
    <BaseLoader />
  </div>
</template>

<style lang="scss">
.main {
   position: relative;
   width: 100vw;
   min-height: 815px;

   @media (min-height: 815px) {
      & {
         height: 100vh;
      }
   }

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
         content: "";
         position: absolute;
         top: 0%;
         left: 0%;
         width: 110%;
         height: 100%;
         background-color: #fff;
         transition: all 0.65s cubic-bezier(0.694, 0.048, 0.335, 1);
      }
   }

   &__desc {
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: top 0.65s cubic-bezier(0.694, 0.048, 0.335, 1);

      &::before {
         content: "";
         position: absolute;
         top: 0;
         width: 100%;
         height: 100%;
         background-color: #fff;
         transition: top 0.65s cubic-bezier(0.694, 0.048, 0.335, 1);
      }
   }
}

.move {
   position: absolute;
   bottom: 12px;
   left: 50%;
   transform: translateX(-50%);
   width: 55px;
   height: 100px;
   overflow: hidden;
   cursor: pointer;

   &__container {
      position: absolute;
      top: 100px;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      height: 100%;
      transition: top 0.65s cubic-bezier(0.694, 0.048, 0.335, 1);
      animation: jump 1s ease-in-out alternate infinite;
   }

   &__mouse {
      width: 20px;
      height: 31px;
   }

   &__desc {
      margin-bottom: 7px;
   }

   &__line {
      width: 1px;
      min-height: 20px;
      margin-top: 10px;
      background-color: #000;
   }
}

.is-reveal {
   &-desc {
      top: 58%;

      &::before {
         top: 100%;
      }
   }

   &-move {
      top: 0;
   }

   &::before {
      width: 0%;
      left: 106%;
   }
}

@keyframes jump {
   0% {
      transform: translateY(-2px);
   }

   100% {
      transform: translateY(5px);
   }
}
</style>
