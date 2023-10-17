<template>
    <div>
        <img :src=" this.Member.img "  alt="">
        <h1 id="name">{{ this.Member.name }}</h1>
        <h4 id="role">{{ this.Member.role }}</h4>
    </div>
</template>

<script>
    export default {
        props:['Member',],

    }
</script>

<style scoped>
img{
    width: 21.527vw;
    min-width: 196px;
    border-radius: 2px;
}
#name{
    font-family: Cairo;
    font-size: 20px;
    font-weight: 600;
    line-height: 37px;
    letter-spacing: 0em;
    text-align: right;

    color: rgba(56, 56, 56, 1);
    margin-top: 5px;
    margin-bottom: 0px;
    @media only screen and (min-width: 768px) {
        font-size: 32px;
        line-height: 60px;
    }
}
#role{
    font-family: Cairo;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: right;

    color: rgba(56, 56, 56, 0.7);    
    margin-bottom: 0px;
    @media only screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 30px;        
    }
}

</style>