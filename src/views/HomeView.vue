<template>
  <router-link to="/searchResult" style="text-decoration: none;">
      <div class="d-flex d-md-none align-items-center" style=" margin:24px 25px; border-radius: 2px; background: rgba(238, 238, 238, 1);">
          
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 10px;">
              <g opacity="0.5">
                  <path d="M10.3636 3C8.90722 3 7.48354 3.43187 6.2726 4.24099C5.06167 5.05011 4.11786 6.20015 3.56052 7.54567C3.00319 8.89119 2.85737 10.3718 3.14149 11.8002C3.42562 13.2286 4.12693 14.5406 5.15675 15.5704C6.18657 16.6003 7.49863 17.3016 8.92703 17.5857C10.3554 17.8698 11.836 17.724 13.1815 17.1667C14.527 16.6093 15.6771 15.6655 16.4862 14.4546C17.2953 13.2437 17.7272 11.82 17.7272 10.3636C17.7271 8.41069 16.9512 6.5378 15.5703 5.15688C14.1894 3.77597 12.3165 3.00012 10.3636 3Z" stroke="#383838" stroke-miterlimit="10"/>
                  <path d="M15.8574 15.8574L21 21.0001" stroke="#383838" stroke-miterlimit="10" stroke-linecap="round"/>
              </g>
          </svg>
          
          <input class="form-control" type="search" placeholder="بحث"  aria-label="Search" style="background-color:transparent; border: 0px; padding:8px 0px;">
      
      </div>
  </router-link>
  <div class="container pt-md-5">
    <div class="row d-flex flex-column-reverse flex-md-row ">
      
      <div class="col-12 col-md-4 d-flex justify-content-around flex-md-column justify-content-md-center" style="padding: 0px; border-left: 1px solid rgba(239, 240, 246, 1);">
        <Article :isBig="false" :isHome="true" :article="this.articles[7]"/>
        <Article :isBig="false" :isHome="true" :article="this.articles[6]"/>
      </div>

      <div class="col-12 col-md-8" style="padding-right: 6px;"> 
        <Article :isBig="true" :isHome="false" :article="this.articles[0]" style="width: 100%;"/>
      </div>

    </div>
    <div class="row">
      <center>
        <h1 class="gradient" id="sections" style="margin: 0px;">الأقسام</h1>
      </center>
      <div style="margin-top:24px ;">
        <Swiper :x="1"/>
      </div>
      <div class="d-flex justify-content-between" style="margin-top: 8.68vw; ">
        <h1 id="articles">أحدث <span class="gradient" >المقالات</span></h1>
        <h6 id="readMore">عرض الجميع</h6>
      </div>
    </div>
    <div class="row" style="margin-top: 2.22vw;">
      <SearchResult :x="2" :article="this.articles[1]"/>
      <SearchResult :x="2" :article="this.articles[2]"/>
    </div>

    <div class="row">
      <div class="d-flex justify-content-between" style="margin-top: 2.64vw;">
        <h1 id="mostRead">الأكثر <span class="gradient">قراءة</span></h1>
        <h6 id="readMore">عرض الجميع</h6>
      </div>
      <div style="margin-top: 2.5vw; margin-bottom: 7.6vw;">
        <Swiper :x="2"/>
      </div>
      <Subscribe style="margin-bottom: 8.33vw;"/>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import Article from '@/components/article.vue';
import SearchResult from '@/components/SearchResult.vue';
import Subscribe from '@/components/Subscribe.vue';
import Swiper from '@/components/Swiper.vue';


export default {
  name: 'HomeView',
  inject: ['articles'],
  components: {
    Article,SearchResult,Subscribe,Swiper
  },
  data() {
    return {
      x:5, 
    }
  },
 }
</script>

<style scoped>
#sections{
  font-family: Cairo;
  font-size: 24px;
  font-weight: 600;
  line-height: 45px;
  letter-spacing: 0em;

  padding-top: 5.83vw;
  width: fit-content;
  
  @media only screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 90px;
  }
}
#articles{
  font-family: Cairo;
  font-size: 24px;
  font-weight: 600;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: right;
  margin: 0px;
  @media only screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 90px;
  }
}
#readMore{
  font-family: Cairo;
  font-size: 12px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  color: rgba(81, 101, 253, 1);
  margin-top: 2.57vw;
  @media only screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 37px;
  }
}
#mostRead{
  font-family: Cairo;
  font-size: 24px;
  font-weight: 600;
  line-height: 45px;
  letter-spacing: 0em;
  text-align: right;

  @media only screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 90px;    
  }

}
.gradient{
    background: linear-gradient(92.32deg, #5367FF 7.8%, #E553FF 62.62%);
    background-clip: text;
    color: transparent;
  }


</style>
