<template>
    <div class="d-md-none">
      <Swiper :x="4"/>
    </div>
    <div class="container-fluid d-flex" style="padding:3.47vw 0px 0px 0px">
      <div class="sections d-none d-md-flex flex-column " style="width: 17.5%; height: fit-content; padding:0px 70px 110px 204px; margin:92px 0px 0px 0px; border-left: 1px solid rgba(0, 0, 0, 0.15)">
        <h2>الأقسام</h2>
        <p>أدب</p>
        <p>فلسفة</p>
        <p>لغة</p>
        <p>موسيقي</p>
        <p>فن</p>
      </div>
      <div class="results" >
        <h2 class="title ">نتائج البحث عن : قرائة</h2>
        <div style="margin-top: 2.84vw;">
          <SearchResult :x="1" :article="this.articles[6]" />
          <SearchResult :x="1" :article="this.articles[6]"/>
          <SearchResult :x="1" :article="this.articles[6]"/>
          <SearchResult :x="1" :article="this.articles[6]"/>
        </div>
        <div class="d-flex justify-content-end">
            <nav aria-label="Page navigation">
              <ul class="pagination    ">
                <li class="page-item disabled">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
        </div>
      </div>

    </div>
</template>

<script>
import SearchResult from '@/components/SearchResult.vue';
import Swiper from '@/components/Swiper.vue';
    export default {
      inject: ['articles'],
        components:{
            SearchResult,Swiper
        }   
    }
</script>

<style scoped>

  .results{
    padding: 0px 15px 0px 0px;
    @media only screen and (min-width: 768px) {      
      padding: 0px 113px 0px 0px;
  
    }
  }
  .sections h2{
    font-family: Cairo;
    font-size: 32px;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 0em;
    text-align: right;
    text-decoration: underline;
    text-decoration-color: rgba(254, 206, 47, 1);
    text-underline-offset: 13px;
 
  }
  .sections p{
    font-family: Cairo;
    font-size: 20px;
    font-weight: 400;
    line-height: 37px;
    letter-spacing: 0em;
    text-align: right;
    margin: 2px 0px;
  }
  .title{
    font-family: Cairo;
    font-size: 20px;
    font-weight: 400;
    line-height: 37.48px;
    letter-spacing: 0em;
    text-align: right;
    margin-top: 0px;
    @media only screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 60px;
    }
  }


</style>