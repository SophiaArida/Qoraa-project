<template>
        <div class="row">
            <div class="background col-12 col-md-6" >
                <div class=" blur ">
                        <div class="title">تواصل معنا</div>
                        <p>
                            نحن نتطلع لسماع أخباركم والاستماع إلى ما لديكم لتقولوه. <br>
                            لا تترددوا في التواصل معنا
                        </p>
                        <img src="@/assets/contactUsLogo.png" alt="Logo">
                </div>
            </div>
    
            <div class="form col-12 col-md-6">
                <div class="mb-3 d-flex flex-column">
                  <label for="" class="form-label">الأسم</label>
                  <input type="text" name="name" id="name" class="form-control">
                </div>
                <div class="mb-3 d-flex flex-column">
                  <label for="" class="form-label">البريد الإلكتروني</label>
                  <input type="email" class="form-control" name="email" id="email">
                </div>
                <div class="mb-3 d-flex flex-column">
                  <label for="" class="form-label">عنوان الرسالة</label>
                  <input type="text" name="title" id="title" class="form-control">
                </div>
                <div class="mb-3 d-flex flex-column">
                  <label for="" class="form-label">الرسالة</label>
                  <textarea class="form-control" name="message" id="message" rows="3"></textarea>
                </div>
                <div class="d-flex">
                    <button type="button" class="btn btn-primary ">إرسل</button>              
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.row{
    margin: 0px;
}
.title{
    font-family: Cairo;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: center;
    color: #383838;
    font-size: 32px;
    line-height: 51px;
    @media only screen and (min-width: 768px) {
        font-size: 64px;
        line-height: 102px;
    }
}

p{
    font-family: Cairo;
    font-weight: 400;
    letter-spacing: 0em;
    text-align: center;
    color: #383838BD;
    font-size: 14px;
    line-height: 22px;
    @media only screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 38px;
    }
}
img{
    width: 28.472vw;
    min-width: 118px;
}

label{
    font-family: Cairo;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: right;
    color: #3F3F3F;
    width: 38.333vw; 
    min-width: 339.52px;     
    @media only screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 45px;
        
    }
}

input,textarea{
    background: #F6F6F6;
    border-radius: 2px;
    width: 38.333vw; 
    min-width: 339.52px;
    height: 3.611vw;
    min-height: 40px;
}
textarea{
    height: 10.41vw;
    min-height: 92.26px;
}

button{
    width: 10.764vw;
    min-width: 117.49px;
    height: 2.986vw;
    min-height: 32.6px;
    border-radius: 2px;
    background: #5165FD;
    margin-bottom: 30px;

    font-size: 14px;
    font-weight: 400;
    line-height: 10px;
    letter-spacing: 0em;
    text-align: center;
    color: #FFFFFF;
    @media only screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 30px;
    }
}

.background {
    padding: 0px;
    @media only screen and (min-width: 768px) {
        background:linear-gradient(238.57deg,rgba(238, 214, 0, 0.78),white,white,white,white, rgba(81, 101, 253, 0.78)); 
        border-radius: 30px;
    }
}

.blur {
    @media only screen and (min-width: 768px) {
        background: linear-gradient(238.57deg, rgba(239, 239, 239, 0.59) 28.75%, rgba(239, 239, 239, 0) 76.96%);
        backdrop-filter: blur(8px); 
        border-radius: 10px;
        width: 100%;
        height: 100%;
        padding: 100px 0px 160px 0px;
    }
}
.form{
    padding: 0px 25px;
    @media only screen and (min-width: 768px) {
        padding: 100px 83px 160px 0px;
    }
}

</style>