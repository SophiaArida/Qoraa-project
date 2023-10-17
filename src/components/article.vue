<template>
    <router-link :to="{path:'/article/' + this.article.index}" style="text-decoration: none;">
        <div class="normal" :class="{Big:this.isBig,Home:this.isHome}" >
            <div class="container d-flex flex-column align-content-between justify-content-start" >
                <img class="articleImg" :src="this.article.img" alt=""  >
        
                <div class="subText d-flex justify-content-between">
                    <div class="dateTime">
                        {{ this.article.date }}
                        <img src="@/assets/dot.png" alt="" >
                        {{ this.article.time }}
                    </div>
                    <p class="author" style="margin: 0px;" >كتب بواسطة : {{ this.article.author }}</p>
                </div> 
                <h1 id="title">{{ this.article.title }}</h1>
            </div>
        </div>
    </router-link>

</template>

<script>
    import ArticleView from '@/views/ArticleView.vue'
    export default {
        components:{
            ArticleView
        },
        props:['isBig','isHome','article'],
        data() {
            return {
                test:"Sophia",
            }
        },
        provide(){
            return{
                // y: this.article.index,
                y: 5,
            }
        },
        methods: {
            
        },
    }

</script>

<style scoped>

    .normal{
        width:29vw;
        min-width: 119px;
        .articleImg{
            width: 27.36vw;
            min-width: 119px;
            border-radius: 2px;
        }
        .subText{
            font-family: Cairo;
            font-size: 8px;
            font-weight: 400;
            line-height: 15px;
            letter-spacing: 0em;
            text-align: left;

            color: rgba(56, 56, 56, 0.5);
            text-decoration: none;
            margin: 9px 0px 0px 0px;
            @media only screen and (min-width: 768px) {
                font-size: 12px;
                line-height: 22px;
            }
        }
        .dateTime{
            display: none;
            @media only screen and (min-width: 768px) {
                display: inline;
            }
        }
        #title{
            font-family: Cairo;
            font-size: 12px;
            font-weight: 400;
            line-height: 22px;
            letter-spacing: 0em;
            text-align: right;

            color: rgba(56, 56, 56, 1);
            margin: 0px;
            @media only screen and (min-width: 768px) {
                font-size: 20px;
                line-height: 37px;   
            }
        }
    }

    .Home{
        width:50%;
        .container{
            width:fit-content;
            margin: 10px 0px ;
            padding: 0px;
        }
        .articleImg{
            width: 394px;
            width: 27.36vw;
            min-width: 160px;
            border-radius: 2px;
        }
        .subText{
            /* small */
            font-family: Cairo;
            font-size: 8px;
            font-weight: 400;
            line-height: 15px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(56, 56, 56, 0.5);
            margin: 10px 0px 0px 0px;
            @media only screen and (min-width: 768px) {
                font-size: 12px;
                line-height: 22px;
            }
        }
        .dateTime{
            display: none;
            @media only screen and (min-width: 768px) {
                display: inline;
            }
        }
        #title{
            font-family: Cairo;
            font-size: 14px;
            font-weight: 400;
            line-height: 26px;
            letter-spacing: 0em;
            text-align: right;
            color: rgba(56, 56, 56, 1);
            @media only screen and (min-width: 768px) {
                font-size: 16px;
                line-height: 30px;
            }
        }
    }
    
    .Big{
        width: 100%; 
        .container{
            margin: 10px 0px;
        }
        .articleImg{
            width: 100%;
            border-radius: 2px;
        }
        .subText{
            font-family: Cairo;
            font-size: 10px;
            font-weight: 400;
            line-height: 19px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(56, 56, 56, 0.5); 
            @media only screen and (min-width: 768px) {
                font-size: 14px;
                line-height: 26px;
            }  
        }
        .dateTime{
            display: inline;
        }
        #title{
            font-family: Cairo;
            font-size: 16px;
            font-weight: 400;
            line-height: 30px;
            letter-spacing: 0em;
            text-align: right;
            text-decoration-line: none;
            color: rgba(56, 56, 56, 1);
            @media only screen and (min-width: 768px) {
                font-size: 36px;
                line-height: 67px;
            }
        }
    }
    

</style>