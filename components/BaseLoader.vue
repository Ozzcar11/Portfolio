<script lang="ts" setup>
import { ref } from "vue"
const onLoad: Ref<boolean> = ref(true)
const random: number = Math.random() * 150 + 500
const burgerTop: Ref<boolean> = ref(false)
const loaderFade: Ref<boolean> = ref(false)
const loaderEnd: Ref<boolean> = ref(false)

setTimeout(() => {
  burgerTop.value = true
}, 100)

setTimeout(() => {
  onLoad.value = false
}, random)

setTimeout(() => {
  loaderFade.value = true
}, random + 1000)

setTimeout(() => {
  loaderEnd.value = true
}, random + 1500)
</script>

<template>
  <div v-if="!loaderEnd" class="loader" :class="{ 'loader-fade': loaderFade }">
    <div
      class="loader__item loader__item-first"
      :class="{ 'loader-top': onLoad }"
    ></div>
    <div v-if="!loaderFade" class="loader-burger">
      <div v-for="index in 5" :key="index" class="loader-burger__item">
        <div :class="{ top: burgerTop }"></div>
      </div>
    </div>
    <div class="loader__item loader__item-second"></div>
    <div class=""></div>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  &__item {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: top 0.6s ease-in-out;
  }

  &__item-first {
    background-color: #1c1d25;
    z-index: 30;
  }

  &__item-second {
    background-color: #242424;
    z-index: 10;
  }

  &-top {
    top: 100%;
  }

  &-fade {
    .loader__item {
      background-color: transparent;
      transition: background-color 0.6s ease-in-out;
    }
  }

  &-burger {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    transform: translate(-50%, -50%);
    z-index: 20;

    &__item {
      position: relative;
      width: 25px;
      height: 200px;
      overflow: hidden;

      &:nth-child(2) > div,
      &:nth-child(4) > div {
        transition-delay: 0.1s;
      }

      &:nth-child(1) > div,
      &:nth-child(5) > div {
        transition-delay: 0.15s;
      }

      &:nth-child(3) > div {
        transition-delay: 0.05s;
      }

      & > div {
        position: absolute;
        top: 100%;
        background-color: #fff;
        width: 100%;
        height: 200%;
        transition: top 0.8s cubic-bezier(1, 0, 0.4, 1);

        &.top {
          top: -200%;
        }
      }
    }
  }
}
</style>
