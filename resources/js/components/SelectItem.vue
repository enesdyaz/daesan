<template>
<v-app>
<div class='wrap_container'>
<!-- TITLE  -->
    <div class='subtitle-1 font-weight-bold'>
    INTERNATIONAL QUOTATION
        <hr>
    </div>
<!-- CONTENT -->
 
            
  <table>     
        <!-- SELECT 1 -->
        <tr>
            <th>
                <div style='float: left; padding-right: 80px;'><i style='padding-left: 10px;margin-right: 10px;' class="fas fa-th-large"></i> METHODS</div>
            </th>
            <td>
                <v-chip-group tyle='float: left;' v-model="select1" active-class="highlighted"  >
                    <v-chip  v-for="size in ManufacturerData" :key="size"  :value="size" small>  {{ size }} </v-chip>
                </v-chip-group>
            </td>
        </tr>
        <!-- SELECT 1 end-->

        <!-- SELECT_2 -->
        <tr>
            <th>
                <div style='float: left; padding-right: 65px;'><i style='padding-left: 10px;margin-right: 10px;' class="fas fa-plane-departure"></i> FROM</div>
            </th>
            <td>
                <div v-if="select1">
                <v-chip-group tyle='float: left;' v-model="select2" active-class="teal black--text" >
                    <v-chip style='float: left;' v-for="(size, item) in ModelData" :key="item" :value="size" small>  {{ size }} </v-chip>
                </v-chip-group>
            </div>
            </td>
        </tr>
        <!-- SELECT 2 end-->

        <!-- SELECT 3 -->
        <tr>
            <th>
                <div style='float: left; padding-right: 80px;'><i style='padding-left: 10px;margin-right: 10px;' class="fas fa-plane-arrival"></i> TO</div>
            </th>
            <td>
                <div v-if="select2">
                <v-chip-group tyle='float: left;' v-model="select3" multiple active-class="teal white--text" >
                    <v-chip tyle='float: left;' v-for="size in ProblemData" :key="size" :value="size" small> {{ size }} </v-chip>
                </v-chip-group>
            </div>
            </td>
        </tr>
        <!-- SELECT 3 end-->
    </table>
    <br>

    <div class='right-side'>
        <div v-if="select1 == 'Sea' && select2 == 'Korea' && select3 == 'Perth'">
            <select-table-ship-kor-per></select-table-ship-kor-per>
        </div>
         <div v-if="select1 == 'Sea' && select2 == 'Korea' && select3 == 'Adelaide'">
            <select-table-ship-kor-per></select-table-ship-kor-per>
        </div>
         <div v-if="select1 == 'Sea' && select2 == 'Perth' && select3 == 'Korea'">
            <select-table-ship-per-kor></select-table-ship-per-kor>
        </div>
         <div v-if="select1 == 'Sea' && select2 == 'Adelaide' && select3 == 'Korea'">
            <select-table-ship-per-kor></select-table-ship-per-kor>
        </div>


         <div v-if="select1 == 'Air' && select2 == 'Adelaide' && select3 == 'Korea'">
            <select-table-air-adel-kor></select-table-air-adel-kor>
        </div>
         <div v-if="select1 == 'Air' && select2 == 'Perth' && select3 == 'Korea'">
            <select-table-air-per-kor></select-table-air-per-kor>
        </div>
        
        <div v-if="select1 == 'Air' && select2 == 'Korea' && select3 == 'Adelaide'">
            <select-table-air-kor-peradel></select-table-air-kor-peradel>
        </div>
         <div v-if="select1 == 'Air' && select2 == 'Korea' && select3 == 'Perth'">
            <select-table-air-kor-peradel></select-table-air-kor-peradel>
        </div>




          <!-- <div v-if="select1 == 'Sea' && select2 == 'Perth' || select2=='Adelaide' && select3 == 'Korea'">
            <select-table-ship-kor-per></select-table-ship-kor-per>
        </div> -->

            <!-- <select-table-ship-per-kor></select-table-ship-per-kor>  -->
    </div>

</div>

</v-app>
</template>


<style lang="scss">
.wrap_container{
    // border: 1px solid green;
    padding: 50px;
    overflow: hidden;
    margin: 0 auto;

}


</style>


<script>
import SelectTableShipKorPer from './SelectTable/SelectTable-ship-kor-per'
import SelectTableShipPerKor from './SelectTable/SelectTable-ship-per-kor'

import SelectTableAirAdelKor from './SelectTable/SelectTable-air-adel-kor'
import SelectTableAirPerKor from './SelectTable/SelectTable-air-per-kor'
import SelectTableAirKorPerAdel from './SelectTable/SelectTable-air-kor-perAdel'
export default {
    components:{
        SelectTableShipKorPer,
        SelectTableShipPerKor,

        SelectTableAirAdelKor,
        SelectTableAirPerKor,
        SelectTableAirKorPerAdel
    },
    data (){
    return{
      select1: '',
      select2: '',
      select3: '',
      numberList: 0,
      Manufacturer: {
          Air:{
                Perth: ['Korea'],
                Adelaide: ['Korea'],
                Korea: ['Perth', 'Adelaide']
          },
          Sea:{
                Perth: ['Korea'],
                Adelaide: ['Korea'],
                Korea: ['Perth', 'Adelaide']
          }
          
      }
    
    }},
    computed: {
        ManufacturerData(){
             return Object.keys(this.Manufacturer) 
          }, 
            
      
        ModelData(){
            if(this.select1===''){
                return null
            }else{
                return Object.keys(this.Manufacturer[this.select1])

                // const aaa = this.Manufacturer[this.select1];
                // return aaa;
            }
        },
        ProblemData(){
            if(this.select2===''){
                return null
            }else{
                 return this.Manufacturer[this.select1][this.select2]
            }
        },



        ValueData(){
            if(this.select3===''){
                return null
            }else{
                this.numberList=0
                for(var i=0; i<this.select3.length;i++){
                this.numberList += Number(this.Manufacturer[this.select1][this.select2][this.select3[i]])
                }
                return this.numberList
              }
        },
        
    },
    watch: {
      select1(){
        console.log(this.select1)
        this.select2=''
        this.select3=''
      }
    }
}
</script>