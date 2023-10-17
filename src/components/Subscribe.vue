<template>
    <div class="container">
        <h1>اشترك ليصلك جميع المقالات</h1>
        <p>
            ابقي علي اطلاع مع مقالتنا فور نزولها مع خدمة الرسائل البريدية<br>
            هذه الخدمة مجانية تماماً 
            <div class="d-flex flex-row-reverse justify-content-center" style="margin-top: 3.1vw; margin-bottom: 4.86vw;">
                <input type="email" class="form-control" name="email" id="email" placeholder="البريد الإلكتروني">
                <button type="submit" class="btn btn-primary">أشترك</button>
            </div>
        </p>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container{
    border-top: 0.5px;
    border-bottom: 0.5px;
    border-left: 0px;
    border-right: 0px;
    /* border: 0.5px 0px 0.5px 0px; */
    border-style: solid;
    border-color:rgba(0, 0, 0, 0.2);
}
h1{
    font-family: Cairo;
    font-size: 20px;
    font-weight: 400;
    line-height: 37px;
    letter-spacing: 0em;
    text-align: center;

    margin-top: 2.85vw;
    @media only screen and (min-width: 768px) {
        font-size: 48px;
        line-height: 90px;
    }
}
p{
    font-family: Cairo;
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: center;

    color: rgba(56, 56, 56, 0.8);
    margin-top: 1.53vw;
    
    @media only screen and (min-width: 768px) {
        font-size: 20px;
        line-height: 37px;        
    }
}
button{
    font-family: Cairo;
    font-size: 10px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;

    background: rgba(81, 101, 253, 1);
    color: rgba(255, 255, 255, 1);
    @media only screen and (min-width: 768px) {
        font-size: 24px;
        font-weight: 700;
        line-height: 45px;
    }
    width: 12.847vw; 
    height: 5.278vw;
    min-width: 70.02px;
    min-height: 28.77px;
    border-radius: 2px;
    
}
input{
    font-family: Cairo;
    font-size: 10px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: right;
    color: rgba(56, 56, 56, 0.31);
    
    @media only screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 45px;
    }
    width: 37.986vw; 
    height: 5.278vw;
    min-width: 207.06px;
    min-height: 28.77px;
    border-radius: 2px;
}

</style>