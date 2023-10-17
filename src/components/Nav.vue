<template>
    <nav class="nav sticky-top" style="background-color: white; box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.15); width: 100%; height: 85px;">
        
        <div class="container d-none d-md-flex justify-content-start align-content-center"  >
            
            <div class="d-flex align-items-center justify-content-between" style="margin-right: 0px; margin-left: 173px; width: 412px;">
                <button class="btn btn-primary " >تطوع معنا</button>
                <router-link to="/searchResult">
                    <div class="searchBar d-flex align-items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin: 10px;">
                            <g opacity="0.5">
                                <path d="M10.3636 3C8.90722 3 7.48354 3.43187 6.2726 4.24099C5.06167 5.05011 4.11786 6.20015 3.56052 7.54567C3.00319 8.89119 2.85737 10.3718 3.14149 11.8002C3.42562 13.2286 4.12693 14.5406 5.15675 15.5704C6.18657 16.6003 7.49863 17.3016 8.92703 17.5857C10.3554 17.8698 11.836 17.724 13.1815 17.1667C14.527 16.6093 15.6771 15.6655 16.4862 14.4546C17.2953 13.2437 17.7272 11.82 17.7272 10.3636C17.7271 8.41069 16.9512 6.5378 15.5703 5.15688C14.1894 3.77597 12.3165 3.00012 10.3636 3Z" stroke="#383838" stroke-miterlimit="10"/>
                                <path d="M15.8574 15.8574L21 21.0001" stroke="#383838" stroke-miterlimit="10" stroke-linecap="round"/>
                            </g>
                        </svg>
                        <input class="form-control" type="search" placeholder="بحث"  aria-label="Search" style="background-color:transparent; border: 0px; padding:8px 0px;">
                    </div>
                </router-link>
            </div>

            <div class="d-flex justify-content-between align-items-center" style="width: 326px; margin-right: 0px; margin-left: 309px;">
                <router-link class="link" to="/" >الرئيسية</router-link>
                <router-link class="link" to="/about">من نحن</router-link>
                <router-link class="link" to="/ContactUs">راسلنا</router-link>                
            </div>

            <div class="logo">
                <img src="@/assets/logoo.png" alt="logo" width="80" height="68">
            </div>
        </div>

        <div class="container d-flex d-md-none justify-content-between align-items-center" style="height: 85px;">
            <div @click="showMenu">
                <svg width="28" height="19" viewBox="0 0 28 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0005 18.5134C9.92981 18.5134 5.85908 18.5156 1.78945 18.5112C0.988234 18.5101 0.342659 18.0495 0.0960482 17.3311C-0.142891 16.6357 0.0730301 15.88 0.642976 15.4106C1.03317 15.0881 1.49132 15.0048 1.98235 15.0059C7.80128 15.0092 13.6202 15.0081 19.4391 15.0081C21.6652 15.0081 23.8924 15.0026 26.1185 15.0103C27.3723 15.0146 28.1977 16.0018 27.9412 17.1633C27.7636 17.9683 27.0622 18.5112 26.1722 18.5123C23.6721 18.5167 21.1731 18.5145 18.673 18.5145C17.1155 18.5145 15.558 18.5145 14.0005 18.5134Z" fill="#383838"/>
                    <path d="M14.0428 0.00234251C18.0862 0.00234251 22.1295 0.00234251 26.1717 0.00234251C26.8885 0.00234251 27.4399 0.300674 27.7796 0.936817C28.103 1.54225 28.0668 2.14987 27.6908 2.72021C27.3018 3.31029 26.7208 3.5121 26.0336 3.511C21.7448 3.50662 17.4559 3.50881 13.1671 3.50881C9.42409 3.50881 5.68218 3.5099 1.93917 3.50881C0.949434 3.50881 0.232616 2.98893 0.0473836 2.14878C-0.202516 1.01688 0.606372 0.00892544 1.79011 0.00453825C4.15319 -0.00313934 6.51627 0.00124799 8.87935 0.00124799C10.6002 0.00234479 12.322 0.00234251 14.0428 0.00234251Z" fill="#383838"/>
                    <path d="M13.9949 11.0011C9.96251 11.0011 5.93124 11.0022 1.89887 11C0.939827 11 0.251507 10.5065 0.0553142 9.69483C-0.218698 8.56513 0.573746 7.53305 1.75419 7.51988C3.28428 7.50343 4.81545 7.51549 6.34664 7.51549C12.9207 7.51549 19.4949 7.51549 26.069 7.51549C27.1179 7.51549 27.8106 8.0617 27.9662 9.00275C28.1273 9.97451 27.4017 10.9265 26.4175 10.9825C25.7358 11.0209 25.0518 11 24.3679 11C20.9109 11.0022 17.4529 11.0011 13.9949 11.0011Z" fill="#383838"/>
                </svg>
            </div>
            <div class="logo">
                <img src="@/assets/logoo.png" alt="logo" width="42" height="36">
            </div>
        </div>
        <div v-if="isMobile" class="menu d-md-none d-flex flex-column justify-content-start" style="background-color:white; box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);  width: 100vw; padding: 34px 24px 64px 0px ;">
            <div class="d-flex flex-column " style="">
                <router-link class="link" to="/" @click="showMenu" >الرئيسية</router-link>
                <br>
                <router-link class="link" to="/about" @click="showMenu">من نحن</router-link>
                <br>
                <router-link class="link" to="/ContactUs" @click="showMenu">راسلنا</router-link>                
            </div>
            <button class="btn btn-primary" style="width: 155px; height: 49px; margin-top: 35px;" >تطوع معنا</button>
        </div>
    </nav>

</template>

<script>
    export default {
        data() {
            return {
                isMobile: false
            }
        },
        methods: {
            showMenu(){
                this.isMobile=!this.isMobile
            }
        },
        
    }
</script>

<style scoped>
    button{
        width: 155px;
        height: 43px;
        border-radius: 2px;
        font-family: Cairo;
        font-size: 16px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: center;
        background: rgba(81, 101, 253, 1);
        color: rgba(255, 255, 255, 1);
    }
    .searchBar{
        width: 237px;
        height: 43px;
        border-radius: 2px;
        background: rgba(238, 238, 238, 1);
    }
    .link{
        font-size: 20px; 
        font-weight: 400;
        line-height: 37px;
        letter-spacing: 0em;
        text-decoration-line: none;
        color: #383838;
        text-align: right;
        
    }

    nav a {
        font-size: 20px; 
        font-weight: 400;
        line-height: 37px;
        letter-spacing: 0em;
        text-decoration-line: none;
        color: #383838;
        
    }
     
    nav a.router-link-exact-active {
        color: #5165FD;
    }   

</style>