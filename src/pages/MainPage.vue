<script setup lang="ts">
import { ref, watch } from 'vue';
import Header from '../components/Header';
import { store } from '../store';
import { SelectOption } from 'naive-ui'
import { cities } from '../assets/cities';
import City from '../components/City';

const selectValue = ref(null);
const title = ref('');
const description = ref('');
const urls = ref([]);

const handleUpdateValue = (value: string, option: SelectOption) => {
  store.commit('SET_CITY', option);
}

watch(() => store.getters.getCurrentCity, function() {
  title.value = store.getters.getCurrentCity.label;
  description.value = store.getters.getCurrentCity.description;
  urls.value = store.getters.getCurrentCity.value;
  selectValue.value = store.getters.getCurrentCity.label;
});
 
</script>

<template>
  <div class="content">
    <Header/>
    <div class="margin_55" style="color: black">
      <n-select 
        :value="selectValue"
        :options="cities"
        filterable
        class="select"
        placeholder="Выберете город"
        @update:value="handleUpdateValue">
      </n-select>
    </div>
    <div class="margin_10p">
      <City :title="title" :description="description" :urls="urls"/>
    </div>    
  </div>
</template>

<style scoped lang="scss">
  .content {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .select {
    width: 230px;
  }
  .input {
    height: 40px;
    min-width: 250px;
    margin-top: 20%;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 20px;
    border-radius: 6px;
  }
</style>
