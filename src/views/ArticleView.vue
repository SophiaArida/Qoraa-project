<template>
    <div class="container-fluid d-flex flex-column align-items-center">
        
        <h1 id="title">{{ this.article.title }}</h1>
        <div class="subText d-flex align-items-center ">
            <div class="dateTime">
                {{ this.article.date }}
                <img src="@/assets/dot.png" alt="" >
                {{ this.article.time }} 
            </div>
            <div class="author d-flex align-items-center">
                    <hr color="rgba(56, 56, 56, 0.5)" width="28px" size="2px" style="margin: 0px 5px;"  >
                    <h6 id="author">كتب بواسطة : {{ this.article.author }}</h6>
            </div>
        </div>

        <img id="articleImg" :src="this.article.img" :alt="this.article.index">
        
        <div class="article d-flex flex-column" style="margin-top: 60px;">
                <div class="intro">
                    {{ this.article.intro }}
                </div>
                <br>
                <div v-for="section in this.article.sections" class="section"  >
                    <div class="head">
                        {{section.head}} 
                    </div>
                    <div class="par">
                        {{section.body}}
                    </div>
                    <br>
                </div>

                <div class="LikeShare d-flex flex-column flex-md-row" style="padding-top: 6.9vw; border-top: 0.5px solid rgba(0, 0, 0, 0.2)" >
                    <like class="like" :liked="this.article.liked" :disliked="this.article.disliked" @liked="liked" @disliked="disliked" />
                    <share class="share"/>
                </div>
                <leavecomment class="leaveComment"/>
                <div v-for="comment in this.article.comments" >
                    <comment :comment="comment"/>
                </div>
        </div>
        <div class="d-none d-md-flex">
            <recommend style="margin-top: 101px;"/>
        </div>
    </div>
</template>

<script>
import like from '@/components/like.vue'
import share from '@/components/share.vue'
import leavecomment from '@/components/leaveComment.vue' 
import comment from '@/components/Comment.vue'    
import recommend from '@/components/Recommend.vue'    
    export default {
        props:['x'],
        inject: ['articles','y'],
        components: {
            like,share,leavecomment,comment,recommend
        },
        data() {
            return {
                article:{ type: Object },
            }
        },
        mounted() {
            this.article=this.articles[this.x]
        },
        methods: {
            liked(){
                this.article.liked=!this.article.liked
                if (this.article.disliked) {
                    this.article.disliked=false
                }
            },
            disliked(){
                this.article.disliked=!this.article.disliked
                if (this.article.liked) {
                    this.article.liked=false
                }
            },

        },
    }
</script>

<style scoped>
.container-fluid{
    background: linear-gradient(180deg, rgba(254, 206, 47, 0.0816) 0%, rgba(254, 206, 47, 0) 100%);
}
#title{
    font-family: Cairo;
    font-size: 32px;
    font-weight: 400;
    line-height: 59.97px;
    letter-spacing: 0em;
    text-align: center;
    color: #383838;
    margin-top: 7vw;
    text-decoration: underline;
    text-underline-offset: 27px ;
    text-decoration-thickness: 3px ;
    text-decoration-color:  rgba(254, 206, 47, 1);
    width: 62.43vw;
    min-width: 273px;
    @media only screen and (min-width: 768px) {
        font-size: 64px;
        line-height: 120px;
        text-align: right;
    }
}
.subText{
    width: 62.43vw;
    min-width: 324px;
    padding-top: 16px;
}

#author{
    font-family: Cairo;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(56, 56, 56, 0.8);
    @media only screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 30px; 
    }
}
.dateTime{
    font-family: Cairo;
    font-size: 12px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: right;
    color: rgba(56, 56, 56, 0.5);
    @media only screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 26px;  
    }
}

#articleImg{
    margin-top: 47px;      
    min-width: 290px;
    height: auto;
    width: 66.53vw;
}
.article{
    width: 62.43vw;
    min-width: 333px;
}
.intro{
    font-family: Cairo;
    font-size: 15px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: justify;
    @media only screen and (min-width: 768px) {
        font-size: 20px;
        line-height: 41px;
    }
    
}
.head{
    font-family: Cairo;
    font-size: 14px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: justify;
    @media only screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 32px;     
    }
}
.par{
    font-family: Cairo;
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: justify;
    @media only screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 32px;
         
    }
}

.LikeShare{
    margin-top:20px ;
}

.share{
    /* margin-right: 71px; */
    
}
.like{
    /* @media only screen and (min-width: 768px) { */
        margin-left: 71px;
    /* } */

}
.leaveComment{
    margin-top:53px; 
    margin-bottom: 70px;
}
    

</style>