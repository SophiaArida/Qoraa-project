<template>
  <!-- Swiper for Genres -->
  <div v-if="this.x===1" class="d-flex justify-content-between align-items-center">
    <!-- (SMALL ARROW RIGHT) -->
    <svg class="d-md-inline d-none" width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-top: 12px;">
      <path d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM41.7071 8.70711C42.0976 8.31658 42.0976 7.68342 41.7071 7.29289L35.3431 0.928932C34.9526 0.538408 34.3195 0.538408 33.9289 0.928932C33.5384 1.31946 33.5384 1.95262 33.9289 2.34315L39.5858 8L33.9289 13.6569C33.5384 14.0474 33.5384 14.6805 33.9289 15.0711C34.3195 15.4616 34.9526 15.4616 35.3431 15.0711L41.7071 8.70711ZM1 9L41 9V7L1 7L1 9Z" fill="black"/>
    </svg>

    <swiper style="margin: 0px 4.8vw;"
    :slides-per-view="3"
    :space-between="20"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :breakpoints="{
      '768': {
        slidesPerView: 5,
      }
    }"
  >
    
    <swiper-slide v-for="genre in Genres" >
      <Genre :Genre="genre"/>
    </swiper-slide>
    ...
    </swiper>

    <!-- (SMALL ARROW LEFT) -->
    <svg class="d-md-inline d-none" width="42" height="16" viewBox="0 0 42 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-top: 12px;">
      <path d="M41 9C41.5523 9 42 8.55228 42 8C42 7.44772 41.5523 7 41 7V9ZM0.292892 7.29289C-0.0976295 7.68342 -0.0976295 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM41 7L1 7V9L41 9V7Z" fill="black" fill-opacity="0.5"/>
    </svg>
  </div>

  <!-- Big Arrows -->
  <div v-if="this.x>1" class="arrows d-none d-md-flex justify-content-between" style="margin-bottom: 32px; ">
        <!-- (BIG  ARROW RIGHT) -->
        <svg width="82" height="16" viewBox="0 0 82 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 7C0.447715 7 4.82823e-08 7.44772 0 8C-4.82823e-08 8.55228 0.447715 9 1 9L1 7ZM81.7071 8.70711C82.0976 8.31659 82.0976 7.68342 81.7071 7.2929L75.3431 0.928939C74.9526 0.538414 74.3195 0.538414 73.9289 0.928939C73.5384 1.31946 73.5384 1.95263 73.9289 2.34315L79.5858 8.00001L73.9289 13.6569C73.5384 14.0474 73.5384 14.6805 73.9289 15.0711C74.3195 15.4616 74.9526 15.4616 75.3431 15.0711L81.7071 8.70711ZM1 9L81 9.00001L81 7.00001L1 7L1 9Z" fill="black"/>
        </svg>
        <!-- (BIG ARROW LEFT) -->
        <svg width="82" height="16" viewBox="0 0 82 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M81 9C81.5523 9 82 8.55228 82 8C82 7.44772 81.5523 7 81 7V9ZM0.292892 7.29289C-0.0976334 7.68342 -0.0976334 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM81 7L1 7V9L81 9V7Z" fill="black" fill-opacity="0.5"/>
        </svg>
  </div>

  <!-- Swiper for articles -->
  <swiper v-if="this.x===2"
  :slides-per-view="3"
  :space-between="58.5"
  @swiper="onSwiper"
  @slideChange="onSlideChange"
>
    <swiper-slide v-for="article in articles" >
      <Article :isBig="false" :isHome="false" :article="article"/>
    </swiper-slide>
  ...
  </swiper>

  <!-- Swiper for team members -->
  <swiper v-if="this.x===3"
  :slides-per-view="2"
  :space-between="20"
  @swiper="onSwiper"
  @slideChange="onSlideChange"
  :breakpoints="{
      '768': {
        slidesPerView: 4,
      }
    }"
  
>
  <swiper-slide v-for="member in TeamMembers" >
    <TeamMember :Member="member"/>
  </swiper-slide>
  </swiper>

  <!-- Swiper for types in Search Vew  -->
  <swiper v-if="this.x===4"
  :slides-per-view="4"
  :space-between="8"
  @swiper="onSwiper"
  @slideChange="onSlideChange"
  
  
>
  <swiper-slide v-for="type in Types" >
    <button>{{type}}</button>
  </swiper-slide>
  </swiper>

</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import TeamMember from '@/components/TeamMember.vue';
import Article from './article.vue';
import Genre from './Genre.vue'

// Import Swiper styles
import 'swiper/css';

export default {
  inject: ['articles'],
  props:['x'],
  components: {
    Swiper,SwiperSlide,TeamMember,Article,Genre,
  },
  data() {
    return {
      TeamMembers:[
        {img:"members/1.png",name:'م. محمد علاء',role:'رئيس المبادرة لسنة 2023'},
        {img:"members/2.png",name:'م. خالد حسن',role:'منسق بلجنة الإعلام لسنة 2023'},
        {img:"members/3.png",name:'أ. سيف الدين سامر',role:'مستشار لجنة الإعلام لسنة 2023'},
        {img:"members/4.png",name:'م. يوسف التركي',role:'رئيس التقييم بلجنة التقييم والتطوير لسنة 2023'},
      ],
      Genres:[
              
        {img:"genres/history.png",type:"تاريخ"},
        {img:"genres/litreture.png",type:"أدب"},
        {img:"genres/poetry.png",type:"شعر"},
        {img:"genres/arts.png",type:"فنون"},
        {img:"genres/philosophy.png",type:"فلسفة"},
       
      ],
      Types:["الكل" , "أدب" , "فلسفة", "لغة", "موسيقي", "فن"]
      
    }
  },
  methods: {

  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>

<style scoped>
  button{
    height: 37px;
    margin-top: 24px;
    padding: 0px 20px;
    font-family: Cairo;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
    background: rgba(238, 238, 238, 1);
    border: 0px;
  }

  #active{
    background: rgba(255, 255, 255, 1);
    color: rgba(254, 206, 47, 1);
    border: 1px solid rgba(254, 206, 47, 1)
  }

</style>