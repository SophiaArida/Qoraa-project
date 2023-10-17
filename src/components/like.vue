<template>
    <div class="box d-flex justify-content-between">
            <p id="like">هل اعجبك المقال :</p>
            <div @click="this.$emit('disliked');">
                <!-- dislike -->
                <svg v-if="!this.disliked" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <g clip-path="url(#clip0_73_1002)">
                        <path d="M17.25 12.75H21.75V0.75H17.25V12.75Z" stroke="#383838" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                        <path d="M17.25 12.75L13.5 16.5L12 21.75C10.3432 21.75 9 20.4068 9 18.75V12.75H5.25C3.59325 12.75 2.25 11.4068 2.25 9.75L3.54075 2.00325C3.6615 1.28025 4.28775 0.75 5.0205 0.75H17.25V12.75Z" stroke="#383838" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_73_1002">
                        <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24 24)"/>
                        </clipPath>
                    </defs>
                </svg>
                <!-- (DISLIKE FILLED) -->
                <svg v-if="this.disliked" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M16.5 13H21V1H16.5V13Z" fill="#383838" stroke="#383838" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round" />
                    <path d="M16.5 13L12.75 16.75L11.25 22C9.59325 22 8.25 20.6568 8.25 19V13H4.5C2.84325 13 1.5 11.6567 1.5 10L2.79075 2.25325C2.9115 1.53025 3.53775 1 4.2705 1H16.5V13Z" fill="#383838" stroke="#383838" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <line x1="16.2001" y1="17" x2="16.2001" y2="3.93402e-08" stroke="white" stroke-width="1.8"/>
                </svg>
            </div>
            
            <!-- like -->
            <div @click="this.$emit('liked');">
                <svg v-if="!this.liked" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <g clip-path="url(#clip0_73_998)">
                        <path d="M6.75 11.25H2.25V23.25H6.75V11.25Z" stroke="#383838" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                        <path d="M6.75 11.25L10.5 7.5L12 2.25C13.6568 2.25 15 3.59325 15 5.25V11.25H18.75C20.4068 11.25 21.75 12.5932 21.75 14.25L20.4592 21.9968C20.3385 22.7198 19.7122 23.25 18.9795 23.25H6.75V11.25Z" stroke="#383838" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_73_998">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                <!-- (LIKE FILLED) -->
                <svg v-if="this.liked" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-top: 11;">
                    <path d="M5.5 10H1V22H5.5V10Z" fill="#383838" stroke="#383838" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <path d="M5.5 10L9.25 6.25L10.75 1C12.4068 1 13.75 2.34325 13.75 4V10H17.5C19.1567 10 20.5 11.3433 20.5 13L19.2092 20.7467C19.0885 21.4697 18.4622 22 17.7295 22H5.5V10Z" fill="#383838" stroke="#383838" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                    <line x1="5.7999" y1="6" x2="5.7999" y2="23" stroke="white" stroke-width="1.8"/>
                </svg>
            </div>

    </div>
</template>

<script>
    export default {
        props: ['liked','disliked'],
        
    }
</script>

<style scoped>
.box{
    width: 261.5px;
    height: 37px;
}
#like{
    color: #383838;
    font-family: Cairo;
    font-size: 20px;
    font-weight: 500;
    line-height: 37px;
    letter-spacing: 0em;
    text-align: right;
}
svg{
    margin-top: 10px;
}

</style>