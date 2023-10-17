<template>
  <div class="container">
    <div class="first row">
      <div class="col-12 col-md-5">
        <p id="p1">لمحة عن</p>
        <p id="p2">قُرَّاءْ</p>
      </div>
      <div class="col-12 col-md-7">
        <img id="logo" src="@/assets/aboutlogo.png" alt="">
        <center>
          <p id="par" >تقدم قُرَّاءْ تدريبات أكاديمية وتخصصية ومهارية لكل لجنة خاصة بوظيفتها. مثال: لجنة الإعلام يأخذ الشخص المُنضم حديثاً للجنة تدريبات في المجال الإعلامي، ولجنة الإعلام لها أقسام وهى: - التصميم - التسويق - التصوير - فحسب اختياره للقسم الذي يريد التدريب فيه يأخذ تدريبات أكاديمية، وعملية داخله، ليكون قادراً على تأدية المهام الخاصة بهذا القسم، وهكذا في باقي اللجان.</p>
        </center>
      </div>
    </div>
    <div class="image row" style="margin-top: 32px;">
      <img src="members/grouppic.png" alt="">
    </div>
    <div class="third row">
      <div class="col-12 col-md-6 d-flex flex-column align-items-start">
        <h4>اهدفنا</h4>
        <p class="p3">
          تحقيق التنمية الثقافية واالجتماعية كجزء من التنمية المستدامة.<br>
          ممارسة اللغة العربية الفصيحة من خالل ورش اللغة.<br>
          لقاءات مع نماذج مشرفة وإبراز دورهم في المجتمع.<br>
        </p>
      </div>
      <div class="col-12 col-md-6 d-flex flex-column align-items-start">
        <h4>رؤيتنا</h4>
        <p class="p3">
          نطمح إلى تشجيع ثقافة القراءة وإثراء المعرفة في المجتمع العربي. نسعى لأن نصبح المصدر الرئيسي والموجه لكل محبي القراءة في العالم العربي، ونسهم في بناء جيل قارئ مثقف ومبدع.
        </p>
      </div>
    </div>
    <div class="partners row">
      <h1 id="partners">شركاء <span id="gradient">النجاح</span></h1>
      <div class="box d-flex justify-content-around align-items-center">
        <img src="@/assets/partners/alexuni1.png" alt="" width="17.23%" height="53.76%" style="min-width: 87px; min-height: 38px;">
        <img src="@/assets/partners/mdarj.png" alt="" width="8.54%" height="53.76%"  style="min-width: 43.43px; min-height: 38px;">
        <img src="@/assets/partners/mezza.png" alt="" width="8.69%" height="53.76%" style="min-width: 42.13px; min-height: 38px;">
        <img src="@/assets/partners/arabisk.png" alt="" width="7.69%" height="53.76%" style="min-width: 38px; min-height: 38px;">
      </div>
    </div>
    <div class="team row">
      <h1 id="team">فريق <span id="gradient">العمل</span></h1>
      <div class="swip">
        <Swiper :x="3"/>
      </div>
    </div>
  </div> 
</template>

<script>
import Swiper from '@/components/Swiper.vue';

export default {
  components:{
    Swiper
  },
}
</script>

<style scoped>
  .first{
    margin-top: 6.94vw;
  }

  #p1{
    font-family: Cairo;
    font-size: 48px;
    font-weight: 400;
    line-height: 77px;
    letter-spacing: 0em;
    text-align: center;
    color: #383838;
    @media only screen and (min-width: 768px) {
      font-size: 128px;
      line-height: 205px;
      text-align: left;
    }
  }
  #p2{
    /* width: fit-content; */
    font-family: Cairo;
    font-size: 48px;
    font-weight: 400;
    line-height: 77px;
    letter-spacing: 0em;
    text-align: center;
    background:linear-gradient(105.95deg, #5367FF 21.1%, #E553FF 51.33%);    
    background-clip: text;
    color: transparent;
    @media only screen and (min-width: 768px) {
      font-size: 128px;
      line-height: 205px;
      text-align: left;
    }
  }
  #logo{
    min-width:86px ;
    width: 9.72vw;
  }
  #par{
    font-family: Cairo;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: justify;
    color: rgba(56, 56, 56, 0.7);
    width: 41vw;
    min-width: 340px;
    margin-top: 26px;
    @media only screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 37px;
      
    }
  }
  .third{
    margin-top: 7vw;
  }
  h4{

    font-family: Cairo;
    font-size: 24px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
    align-self: center;
    color: rgba(56, 56, 56, 1);
    text-decoration: underline;
    text-underline-offset: 14px;
    text-decoration-thickness: 1px ;
    text-decoration-color:  rgba(254, 206, 47, 1);
    @media only screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 51px;
    }
  }
  .p3{
    font-family: Cairo;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: justify;
    width: 340px;
    color: rgba(56, 56, 56, 0.7);
    align-self: center;
    @media only screen and (min-width: 768px) {
      width: 614px;
      font-size: 24px;
      line-height: 38px;
      text-align: right;
    }



  }

  #partners{
    font-family: Cairo;
    font-size: 24px;
    font-weight: 600;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: center;
    color:  #383838;
    margin-top: 4.3vw;
    @media only screen and (min-width: 768px) {
      font-size: 48px;
      line-height: 90px;
    }
  }
  .box{
    width: 90.3vw;
    height: 12.9vw;
    border-radius: 3px;
    min-width: 340px;
    min-height: 85px;
    background: #D9D9D91F;
    margin: 25px;
  }
  #team{
    font-family: Cairo;
    font-size: 24px;
    font-weight: 600;
    line-height: 45px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(56, 56, 56, 1);
    margin-top: 6.25vw;
    margin-bottom: 3.125vw;
    @media only screen and (min-width: 768px) {
      font-size: 48px;
      line-height: 90px;
    }

  }
  #gradient{
    background: radial-gradient(154.41% 2027.94% at 13.03% 0%, #5367FF 0%, #E553FF 100%); 
    background-clip: text;
    color: transparent;
  }
  .swip{
    padding: 0px 0px 11.11vw 0px;
  }
</style>


