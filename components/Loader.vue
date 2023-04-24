<script lang="ts" setup>
import { ref } from "vue"
const onLoad: Ref<boolean> = ref(true)
const random: number = Math.random() * 250 + 700
const burgerLeft: Ref<boolean> = ref(false)
const loaderFade: Ref<boolean> = ref(false)
const loaderEnd: Ref<boolean> = ref(false)

setTimeout(() => {
   burgerLeft.value = true
}, 100)

setTimeout(() => {
   onLoad.value = false
}, random)

setTimeout(() => {
   loaderFade.value = true
}, random + 1000)

setTimeout(() => {
   loaderEnd.value = true
}, random + 2500)
</script>



<template>
   <div v-if="!loaderEnd"
      class="loader"
      :class="{ 'loader-fade': loaderFade }">
      <div class="loader__item loader__item-first"
         :class="{ 'loader-left': onLoad }"></div>
      <div v-if="!loaderFade"
         class="loader-burger">
         <div v-for="index in 3"
            :key="index"
            class="loader-burger__item">
            <div :class="{ 'left': burgerLeft }"></div>
         </div>
      </div>
      <div class="loader__item loader__item-second"></div>
      <div class=""></div>
   </div>
</template>

<style lang="scss" scoped>
.loader {
   &__item {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: right 1s ease-in-out;
   }

   &__item-first {
      background-color: #1C1D25;
      z-index: 10;
   }

   &__item-second {
      background-color: #242424;
      z-index: -10;
   }

   &-left {
      right: 100%;
   }

   &-fade {
      .loader__item {
         background-color: transparent;
         transition: background-color 1s ease-in-out 0.5s;
      }
   }

   &-burger {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &__item {
         position: relative;
         width: 200px;
         height: 25px;
         overflow: hidden;

         &:nth-child(2)>div {
            transition-delay: 0.2s;
         }

         &:nth-child(3)>div {
            transition-delay: 0.2s;
         }

         &>div {
            position: absolute;
            left: -200%;
            background-color: #fff;
            width: 200%;
            height: 100%;
            transition: left 1.4s cubic-bezier(1, 0, 0.4, 1);

            &.left {
               left: 100%;
            }
         }

         &+& {
            margin-top: 10px;
         }

         &:last-child {
            width: 125px;
         }
      }
   }
}
</style>
