<template>
    <div class="box">
        <img :src="Genre.img" alt="" >
        <div class="shadow">{{Genre.type}}</div>
    </div>
</template>

<script>
    export default {
        props:['Genre',],
        
    }
</script>

<style scoped>
img{
    width: 13.89vw;
    min-width: 105px;
}
.box {
    position: relative;
    text-align: center;
    padding: 0px;
    border-radius: 3px;

    font-family: Cairo;
    font-size: 12px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    @media only screen and (min-width: 768px) {
        font-size: 20px;
        line-height: 37px;
    }
}

.shadow {
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5); 
    width: 13.89vw;
    min-width: 105px;
    padding: 50% 0%;
    @media only screen and (min-width: 768px) {
        /* left: 50%; */
    }
}

</style>