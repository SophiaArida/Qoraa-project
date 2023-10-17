<template>
    <div class="container" >
        <h6 id="readmore">إقرأ المزيد</h6>
        <h1 id="title">مواضيع ذات صلة</h1>
        <div class="articles row d-flex  justify-content-between">
            <div class="col-0 col-md-4 d-flex justify-content-center">
                <Article :isBig="false" :isHome="false" :article="this.articles[0]"/>
            </div>
            <div class="col-md-4 d-flex justify-content-center">
                <Article :isBig="false" :isHome="false" :article="this.articles[1]"/>
            </div>
            <div class="col-md-4 d-flex justify-content-center">
                <Article :isBig="false" :isHome="false" :article="this.articles[2]"/>
            </div>
        </div>
    </div>
    
</template>

<script>
    import Article from '@/components/article.vue';
    export default {
        inject: ['articles'],
        components: {
            Article,
        }
    }
</script>

<style scoped>
.container{
    border-top: 0.5px solid rgba(0, 0, 0, 0.4)
}

#readmore{
    font-family: Cairo;
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: justified;
    color: #383838CC;
    padding-top: 59px;
    margin-bottom: 0px;
}
#title{
    font-family: Cairo;
    font-size: 24px;
    font-weight: 600;
    line-height: 49px;
    letter-spacing: 0em;
    text-align: center;
    color: #383838;
    padding-top: 0px;
}
.articles{
    margin-top: 40px;
}


</style>