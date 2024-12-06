<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { slides } from '../../assets/slide';

defineProps<{ title: string, description: string, urls: string[] }>()

const getImage = (path: string) => {
  return new URL(`../../assets/images/${path}`, import.meta.url).href
}


</script>

<template>
  <div class="city">
    <div v-if="urls.length > 0">
      <div class="content">
        <div class="title">{{title}}</div>
      </div>
      <Carousel>
        <Slide v-for="slide in urls" :key="slide">
          <div class="carousel__item">
              <img alt="no_foto" style="width: 100%; height: 400px; object-fit: contain;" :src="getImage(slide)" />
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
      <div class="content">
        <div class="description">{{description}}</div>
      </div>
    </div>
    <div v-else class="text_center"> Город не выбран</div>
  </div>
  
  
</template>

<style lang="scss" scoped>
  .city {
    position: absolute;
    min-width: 1000px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & .content {
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding-left: 50px;
      padding-right: 50px;
      margin-top: 30px;

      & .title {
        font-family: "Inter-Bold", sans-serif; 
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 30px;
      }

      & .description {
        font-size: 16px;
        font-weight: 400;
      }
    }
  }

  .carousel__item {
    height: 400px;
    width: 100%;
    font-size: 20px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    color: var(--vc-clr-white);
  }
  
  .carousel__slide {
    padding-bottom: 20px;
    padding-left: 50px;
    padding-right: 50px;
  }
</style>
