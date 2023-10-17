<template>
    <router-link :to="{path:'/article/' + this.article.index}" style="text-decoration: none;">
        <!--In SearchView-->
        <div v-if="x===1" class="container">
            <div class="row d-flex align-items-center">
                <div class="col-6">
                    <img class="img1" :src="this.article.img" alt="">
                </div>
                <div class="para1 col-6">
                    <div class="author d-flex align-items-center">
                        <hr color="rgba(56, 56, 56, 0.5)" width="" size="2px" style="margin: 0px 5px;"  >
                        <h6 id="author">كتب بواسطة : {{ this.article.author }}</h6>
                    </div>
                    <h1 id="title1">{{ this.article.title }}</h1>
                    <p class="d-md-flex d-none" id="summary1" >{{ this.article.summary }}</p>
                    <p class="d-md-none" id="summary1" >{{ this.article.summaryshort }}</p>
                    <div class="subText d-flex justify-content-between">
                        <div class="dateTime">
                            {{ this.article.date }}
                            <img src="@/assets/dot.png" alt="" >
                            {{ this.article.time }}
                        </div>
                        <h6 id="type">{{ this.article.type }}</h6>
                    </div>
                </div>
            </div>
        </div>
        <!--In HomeView-->
        <div v-if="x==2" class="container-fluid"  >
            <div class="row">
                <div class="col-6">
                    <img class="img2" :src="this.article.img" alt="">
                </div>
                <div class="para2 col-6" >
                    <div class="author d-flex align-items-center" >
                        <hr color="rgba(56, 56, 56, 0.5)" width="" size="2px" style="margin: 0px 5px;"  >
                        <h6 id="author">كتب بواسطة : {{ this.article.author }}</h6>
                    </div>
                    <h1 id="title2"> {{ this.article.title }}</h1>
                    <p class="d-md-flex d-none" id="summary2" >{{ this.article.summary }}</p>
                    <p class="d-md-none" id="summary2" >{{ this.article.summaryshort }} <span id="readMore">أقرأ المزيد</span></p>
                    <h6 class="d-none d-md-flex" id="readMore">أقرأ المزيد</h6>
                    <div class="dateTime">
                        {{ this.article.date }}
                        <img src="@/assets/dot.png" alt="" >
                        {{ this.article.time }}
                    </div>
                </div>
            </div>
        </div>
    </router-link>

</template>

<script>
    export default {
        props:['x','article'],
        
    }
</script>

<style scoped>
.container{
    width: 67.36vw;
    border-radius: 2px;

    border: 1px;
    margin-bottom: 2.78vw;
    min-width: 340px;
    padding-right: 0px;
}
.img1{
    width: 33.33vw; 
    min-width: 182px;
}
.para1{
    padding-right: 21px;
    @media only screen and (min-width: 768px) {
        padding-right: 40px;
    }
}
hr{
    width: 2vw;
}
#author{
    font-family: Cairo;
    font-size: 8px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #38383880;  
    margin-bottom: 0px;
    @media only screen and (min-width: 768px) {
        font-size: 16px;
        line-height: 30px;
    }
}
#title1{

font-family: Cairo;
font-size: 16px;
font-weight: 400;
line-height: 30px;
letter-spacing: 0em;
text-align: right;
color: #383838;
margin-bottom: 0px;
@media only screen and (min-width: 768px) {      
    font-size: 32px;
    line-height: 60px;
}
} 
#summary1{
    font-family: Cairo;
    font-size: 10px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: right;
    color: #38383880;
    margin-bottom: 0px;
    @media only screen and (min-width: 768px) {      
        font-size: 16px;
        line-height: 30px;
    }
}
#type,#readMore{
    font-family: Cairo;
    font-size: 10px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(81, 101, 253, 1);
    @media only screen and (min-width: 768px) {      
        font-size: 16px;
        line-height: 30px;
    }
    
}
.dateTime{
    font-family: Cairo;
    font-size: 8px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: right;
    color: #38383880;
    @media only screen and (min-width: 768px) {      
        margin-top: 32px;
        font-size: 14px;
        line-height: 26px;  
    }
}


.container-fluid{
    margin-bottom: 3.68vw;   
}
.img2{
    width: 44.44vw;
    min-width: 182px;
}
.para2{
    padding-right: 21px;
    @media only screen and (min-width: 768px) {
        padding-right: 63.5px;
    }
}
#title2{
    font-family: Cairo;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: right;

    color: rgba(56, 56, 56, 1);
    margin-bottom: 0px;
    @media only screen and (min-width: 768px) {      
        font-size: 36px;
        line-height: 67px;
    }

}  
#summary2{
    font-family: Cairo;
    font-size: 10px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: right;

    color: rgba(56, 56, 56, 0.5);
    width: 41.67vw;
    min-width: 150px;
    margin-bottom: 5px;
    @media only screen and (min-width: 768px) {      
        margin-top: 4px;
        margin-bottom: 14px;
        font-size: 20px;
        line-height: 37px;
    }
}



</style>