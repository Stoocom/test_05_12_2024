<script setup lang="ts">
import { store } from '../../store';
import { useRouter } from 'vue-router';

const router = useRouter();

const clearUsername = () => {
  store.commit('SET_USERNAME', '')
  store.commit('SET_CITY', undefined);
  router.push('/login')
}
</script>

<template>
  <div class="header">
      <div class="greeting">
        Привет, 
        <span class="title">{{store.getters.getUsername}}</span>
      </div>
      <div class="out cursor" @click="clearUsername">Выйти</div>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;

    & .greeting, .out {
      padding: 24px;
    }
    & .title {
      font-family: "Inter-Bold", sans-serif; 
    }
    & .cursor {
      cursor: pointer;
    }
  }
</style>
