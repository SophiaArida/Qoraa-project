<template>
    <div>
<div class="container">
    <div class="row d-flex">
        <div class="col-12 col-md-6" style="padding: 0px;">
            <p id="title">أترك تعليقاً:</p>
            <div class="mb-3">
              <input type="text" name="name" id="name" class="form-control" placeholder="الأسم">
            </div>
            <div class="mb-3">
              <input type="email" class="form-control" name="email" id="email"  placeholder="البريد الإلكتروني">
            </div>
            <div class="mb-3">
              <textarea class="form-control" name="comment" id="comment" rows="3" placeholder="التعليق"></textarea>
            </div>
            <div class="d-flex">
                <button type="submit" class="btn btn-primary">إرسل</button>
            </div>
        </div>
    </div>
</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #title{
        font-family: Cairo;
        font-size: 16px;
        font-weight: 500;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: right;
        color: #383838;
        @media only screen and (min-width: 768px) {
            font-size: 20px;
            line-height: 37px;
        }
    }
    input{
        border-radius: 2px;
        background: #F6F6F6;
        text-align: right;
        width: 31.11vw;
        min-width: 340px;
        height: 3.472vw;
        min-height: 36px;
    }
    textarea{
        border-radius: 2px;
        background: #F6F6F6;
        text-align: right;
        width: 31.11vw;
        min-width: 340px;
        min-height: 81px;
        height: 7.43vw;
    }
    button{
        border-radius: 2px;
        background: #5165FD;
        color: #FFFFFF;
        min-width: 117.49px;
        min-height: 32.6px;
        width: 10.764vw;
        height: 2.986vw;
        font-family: Cairo;
        font-weight: 400;
        letter-spacing: 0em;
        text-align: center;
        font-size: 14px;
        line-height: 26px;
        @media only screen and (min-width: 768px) {
            font-size: 16px;
            line-height: 30px;

        }
    }

</style>