<template>
    <v-app>
        <div class='bg-image'>
            <div class='header'>
                <div class='header-1'>
                    <div class="wrap">
                        <div class='header-item header-a'><v-icon color='primary'>mdi-cellphone</v-icon> 08 9258 8807</div>
                        <div class='header-item header-c'><v-icon color='primary'>mdi-email-outline</v-icon> info@daesanglobal.com.au</div>
                        <div class='header-item header-d'><v-icon color='primary'>mdi-clock-time-three-outline</v-icon> MON-FRI : 9AM - 5PM</div>
                        <div class='header-item header-e'><img width='10%' src='../../image/icons/kakao.png'> daesanglobal</div>
                    </div>
                </div>

                <div class='header-2'>
                    <div class='header2-a'>
                        <img src="../../image/daesan-logo.png" alt="">
                    </div>
                    <div class='header2-b'>
                        <v-tabs  class= 'pt-10' right background-color='rgba(0,0,0,0)'>
                            <v-tab class='font-weight-bold'>HOME</v-tab>
                            <v-tab class='font-weight-bold'>ABOUT</v-tab>
                            <v-tab class='font-weight-bold'>QUOTE</v-tab>
                            <v-tab class='font-weight-bold'>CONTACT</v-tab>
                            <v-tab class='font-weight-bold'>SERVICE</v-tab>
                        </v-tabs>
                    </div>
                </div>

                <v-container style='width: 1200px; margin-top: 60px;padding-left: 60px;'>
                    <v-carousel style='float: left; width: 520px;' cycle  class="main-left pt-100"   height='340' :show-arrows="false" hide-delimiter-background hide-delimiters>
                        <v-carousel-item> 
                            <v-card dark style='float: left;width: 540px; height: 340px'  color='rgb(47,68,91, 0.6)'>
                                <v-card-text>
                                <br>
                                <div id='line'></div>
                                <br>
                                <p class="display-2" style='color: white;'>
                                    Daesan Global Logitics
                                </p>
                                <br>
                                <div class="display-1" style='color: white'>
                                    고객의 소중한 마음까지<br> 전달 하겠습니다.
                                </div>
                                </v-card-text>
                            </v-card>
                        </v-carousel-item>

                        <v-carousel-item>
                            <v-card dark style='float: left; width: 540px;'   height='340'  color='rgb(47,68,91, 0.6)'>
                                <v-card-text>
                                <br>
                                <div id='line'></div>
                                <br>
                                <p class="display-2" style='color: white;'>
                                    Tracking Service
                                </p>
                                <br>
                                <div class="display-1" style='color: white'>
                                    고객님의 소중한 상품에 대한<br> 실시간 배송정보를 <br>확인할수 있습니다.
                                </div>
                                </v-card-text>
                            </v-card>
                        </v-carousel-item>

                        <v-carousel-item>
                            <v-card dark style='float: left; width: 540px;'   height='340'  color='rgb(47,68,91, 0.6)'>
                                <v-card-text>
                                <br>
                                <div id='line'></div>
                                <br>
                                <p class="display-2" style='color: white;'>
                                    Quick Quotation
                                </p>
                                <br>
                                <div class="display-1" style='color: white'>
                                    실시간으로 원하시는 배송 가격을 <br>확인할 수 있습니다. 
                                </div>
                                </v-card-text>
                            </v-card>
                        </v-carousel-item>
                    </v-carousel>


                    <v-card id='quickmove' style='float: left; width: 500px; background: rgb(47,68,91, 0.6); margin-left: 40px;
                      animation-name: quickmove; animation-duration: 4s;'>
                        <v-card-text>
                            <div style='color: white;padding: 10px;'>QUICK QUOTATION</div>
                            <div style='width: 460px; padding: 6px; border: 1px solid white; border-radius: 8px;'>
                                <select-item-domestic-main></select-item-domestic-main>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-container>


                
            </div>
    </div>
</v-app>
</template>




<script>

import SelectItemDomesticMain from './SelectItemDomesticMain'
export default {
    components: {
         SelectItemDomesticMain,
    },
    data () {
        return {
        }
    },

}
</script>




<style lang="scss">
    .bg-image{
        height: 100vh;
        background-image: url("../../image/bg-2.jpg");
        background-position: center;
        background-size: cover;
    
        .header{
                
                .header-1{
                    background: rgba(47,68,91, 0.8);
                    .wrap{ 
                        overflow: hidden;
                        height: 5vh;
                        margin: 0 auto;
                        width: 1000px;
                        .header-item{
                            color: white;
                            width: 250px; height: 100%;
                            float: left;
                            line-height: 5vh;
                            text-align: center;
                        }
                    }
                }
                .header-2{
                    border-bottom: 1px solid whitesmoke;
                    background: rgba(255,255,255,0.3);
                    height: 10vh;
                    width: 1200px;
                    margin: 0 auto;
                    overflow: hidden;
                    .header2-a{
                        width: 30%;
                        float: left;
                    }
                    .header-2b{
                        border: 1px solid red;
                        width: 70%;
                        float: left;
                        line-height: 120px;
                        padding-top: 30px;
                        .header2-wrap{
                            padding-top: 40px;
                        }
                    }
                }
            }
            .section{
                height: 80%;
            }
            
           
    }
    #line{
        width: 140px;
        height: 5px;
        background-color: red;
        position: relative;
        animation-name: example;
        animation-duration: 4s;
    }
    @keyframes example {
    0%   {background-color:red; left:0px; top:0px;}
    55%  {background-color:blue; left:300px; top:0px;}
    100%  {background-color:red; left:0px; top:0px;}
    }
    @keyframes quickmove {
    0%   {opacity: 0; left: 100px;}
    55%  {opacity: 1; left: 0px;}
    }
  

    .footer{
        border: 1px solid green;
        border: 20vh;
    }
</style>

