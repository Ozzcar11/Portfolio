<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
   revealTime: number
}>()

const isReveal = ref(false)

setTimeout(() => {
   isReveal.value = true
}, props.revealTime);
</script>


<template>
   <header class="header"
      :class="{ 'isReveal': isReveal }">
      <nav class="nav">
         <a class="nav__logo">D</a>
         <ul class="nav__list">
            <li class="nav__item">All works</li>
            <li class="nav__item">Contacts</li>
            <li class="nav__item">
               <input class="nav__item"
                  type="checkbox">
            </li>
         </ul>
      </nav>
   </header>
</template>


<style lang="scss">
.header {
   position: relative;
   top: -100px;
   max-width: 1248px;
   margin: 0px auto;
   padding: 0 12px;
   transition: top 0.65s cubic-bezier(.694, .048, .335, 1);
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

      &+& {
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
}

.isReveal {
   top: 0px;
}
</style>