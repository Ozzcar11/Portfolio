<script lang="ts" setup>
import { ref } from "vue"
import { themeStore } from "~/stores/theme"

const props = defineProps<{
  revealTime: number
}>()

const { getCurrentTheme, changeTheme } = themeStore()

const isReveal = ref(false)

setTimeout(() => {
  isReveal.value = true
}, props.revealTime)
</script>

<template>
  <header class="header" :class="{ 'is-revial': isReveal }">
    <nav class="nav">
      <a class="nav__logo">D</a>
      <ul class="nav__list">
        <li class="nav__item">All works</li>
        <li class="nav__item">Contacts</li>
        <li class="nav__item" @click.prevent="changeTheme">
          <label for="themeSwitch" class="nav__theme">
            <img
              :src="`/icons/${getCurrentTheme}.png`"
              :alt="`${getCurrentTheme} theme`"
            />
          </label>
          <input id="themeSwitch" class="nav__theme-checkbox" type="checkbox" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1248px;
  margin: 0px auto;
  padding: 0 12px;
  transition: top 0.65s cubic-bezier(0.694, 0.048, 0.335, 1);
  z-index: 5;
  &.is-revial {
    top: 0;
  }
}

.nav {
  display: flex;
  justify-content: space-between;

  &__list {
    display: flex;
    align-items: center;
  }

  &__item {
    padding: 12px;
    cursor: pointer;

    & + & {
      margin-left: 15px;
    }
  }

  &__logo {
    display: block;
    width: 48px;
    font-size: 44px;
    font-family: Pacifico;
    font-style: italic;
    cursor: pointer;
  }

  &__theme {
    display: block;
    width: 30px;
    height: 30px;

    img {
      width: 100%;
      height: 100%;
    }
    &-checkbox {
      position: absolute;
      top: -100%;
      left: -100%;
      visibility: hidden;
    }
  }
}
</style>
