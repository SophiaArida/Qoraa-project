<template>
    <div class="box d-flex" style="padding-top: 15px;">
        <img class="m-3" :src="this.comment.img" alt="">
        <div class="text" style="margin-top: 19px;">
            <div class="d-flex flex-column">
                <h1 id="name">{{this.comment.name}}</h1>
                <p id="comment" style="margin-top: 6px;">
                    {{this.comment.comment}} 
                    <!-- &#129505; -->
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['comment'],
        mounted() {
            // alert(this.comment.name);
        },
        
    }
</script>

<style scoped>
    img{
        width: 3.47222vw; 
        height: 3.47222vw;
        /* min-width: 35px;
       min-height: 35px; */
        width: 35px;
        height: 35px;
        @media only screen and (min-width: 768px) {
            width: 50px; 
            height: 50px;
        }
        
    }
    .box{
        border-radius: 5px;
        background-color: rgba(246, 246, 246, 1);
        margin-bottom: 20px;
        width: 62.5vw;
        /* height: 13.264vw; */
        min-width: 339px;
        min-height: 121px;
        height:fit-content 
    }
    #name{
        font-family: Cairo;
        font-size: 16px;
        font-weight: 500;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: right;
        color: #383838;
        @media only screen and (min-width: 768px) {
            font-size: 24px;
            line-height: 45px;
        }
    }
    #comment{
        font-family: Cairo;
        font-size: 13px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: right;
        color: #383838CC;
        @media only screen and (min-width: 768px) {
            font-size: 16px;
            line-height: 30px;
        }
    }

</style>