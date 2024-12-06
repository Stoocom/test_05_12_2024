<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { store } from '../../store';

const router = useRouter();

const username = ref('');
const password = ref('');

const sing_in = () => {
  if(username.value != "" && password.value != ""){
    store.commit('SET_USERNAME', username.value);
    router.push('main')
  } else {
    console.log("Username and Password can not be empty")
  }
}
</script>

<template>
  <form class="login-form" @submit.prevent="sing_in">
    <div class="title">Войти в панель</div>
    <div class="content">
      <input id="username" class="input" type="text" v-model="username" placeholder="Введите логин"/>
      <input id="password" class="input" type="password" v-model="password" placeholder="Введите пароль" />
    </div>
    <button class="full" type="submit">
      Войти
    </button>
  </form>
</template>

<style lang="scss" scoped>
  .login-form {
    width: 230px;
    height: 188px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & .title {
      font-size: 16px;
      color: #000000
    }
    & .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      & input {
        border-radius: 8px;
        height: 31px;
        padding: 0px 16px;
        border: 1px solid #D7D7D7;
        line-height: 14.52px;
      }

      input::-webkit-input-placeholder {
        color: #D7D7D7;
      }
    }
    & .full {
      background-color: #000000;
      color: white;
      border-radius: 8px;
      height: 31px;
      padding: 0px 16px;
      line-height: 14.52px;
    }
  }
</style>
