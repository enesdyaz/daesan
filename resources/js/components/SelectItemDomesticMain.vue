<template>
<div stle='background: rgba(0,0,0,0)'>
    <div class='wrap_container'>

    <table style='padding: 0; margin: 0;'>     
    <!-- SELECT 1 -->
            <tr>
                <td>
                    <div style='color: white;'>Choose your interest</div>
                    <v-chip-group style='float: left;' v-model="select1" active-class="teal white--text"  > 
                        <v-chip  v-for="(item, index) in items" :key="index"  :value="item.name"  small ><v-icon style='font-size: 15px; color: #432;padding-right: 10px;'>{{ item.icon}}</v-icon>{{ item.name }} </v-chip>
                    </v-chip-group>
                </td>
            </tr>
    <!-- SELECT 1 end-->

    <!-- SELECT_2 -->
            <tr>
             
                <td>
                    
                    <div v-if="select1">
                    <div style='color: white;'>FROM</div>
                    <v-chip-group style='float: left;' v-model="select2"  active-class="teal white--text" >
                        <v-chip style='float: left;' v-for="(size, item) in ManufacturerData" :key="item" :value="size" small>  {{ size }} </v-chip>
                    </v-chip-group>
                </div>
                </td>
            </tr>
    <!-- SELECT 2 end-->

    <!-- SELECT 3 -->
            <tr>
                <td>
                    <div v-if="select2">
                        <div style='color: white'>TO</div>
                    <v-chip-group style='float: left;' v-model="select3"  active-class="teal white--text" >
                        <v-chip style='float: left;' v-for="size in ModelData" :key="size" :value="size" small> {{ size }} </v-chip>
                    </v-chip-group>
                </div>
                </td>
            </tr>
    <!-- SELECT 3 end-->
    <!-- SELECT 4 -->
        <tr>
            <td> 
                <div v-if="select1 == 'CarTransport' && select3" class='animation'>
                <div style='color: white'>PICK UP</div>
                <v-chip-group style='float: left;' v-model="select4"  active-class="teal white--text" >
                    <v-chip style='float: left;' v-for="size in ProblemData" :key="size" :value="size" small> {{ size }} </v-chip>
                </v-chip-group>    
                </div>
            </td>
        </tr>
    <!-- SELECT 4 end -->
    <!-- SELECT 5  -->
        <tr>
         
            <td>
                <div v-if="select1 == 'CarTransport' && select3" class='animation'>
                    <div style='color: white;'><i style='padding-left: 10px;margin-right: 10px;' class="fas fa-arrow-alt-circle-down"></i> DROP OFF</div>
                <v-chip-group style='float: left;' v-model="select5"  active-class="teal white--text" >
                    <v-chip style='float: left;' v-for="size in ProblemData" :key="size" :value="size" small> {{ size }} </v-chip>
                </v-chip-group>
                </div>
            </td>
        </tr>

    <!-- SELECT 6  -->
        <tr>
            <td>
                <div v-if="select1 == 'CarTransport' && select3" class='animation'>
                <div style='color:white;'>
                    <i style='padding-left: 10px;margin-right: 10px;' class="fas fa-boxes"></i> WITH POSESSIONS? 
                </div>
                <v-chip-group style='float: left;' v-model="select6"  active-class="teal white--text" small >
                    <v-chip style='float: left;' v-for="size in PossessionData" :key="size" :value="size" small> {{ size }} </v-chip>
                </v-chip-group>
                </div>
            </td>
        </tr>
        <tr>
        
            <div v-if="select1 =='CarTransport' && select6" style='margin-top: 20px;claer: both;'>
                <div style='font-size: 14px; color:white; clear: both; padding-left: 320px;'>
                    <v-btn text color='yellow'>PRICE: $950</v-btn>
                </div>
            </div>
        </tr>
    </table>

        <div v-if="select1 == 'SmallMoving' && select3" style='margin-top: 20px;'>
            <div style='color: white;'>Choose your items to deliver</div>
            <small-moving-main :from='select2' :to='select3'></small-moving-main>
        </div>

        <div style='color: white' v-if="select1 =='Parcel' && select3">
            <select-table-air-adel-kor-main></select-table-air-adel-kor-main>
        </div>

        <div style='color: white' v-if="select1 =='Pallet' && select3">
            <select-table-air-adel-kor-main></select-table-air-adel-kor-main>
        </div>
    </div>
 </div>
</template>


<style lang="scss">

@keyframes move{
    from {display: none}
    to {display: block} 
}
.animation{
    animation: move 3s;
}

.wrap_container{
    // border: 1px solid green;
    padding: 0;
    overflow: hidden;
    margin: 0 auto;
    width: 500px;

}


</style>


<script>
import SmallMovingMain from './SmallMovingMain'
import SelectTableAirAdelKorMain from './SelectTable/SelectTable-air-adel-kor-main'
export default {
    components:{
        SmallMovingMain,
        SelectTableAirAdelKorMain,
    },
    data (){
    return{
        select1: '',
        select2: '',
        select3: '',
        select4: '',
        select5: '',
        select6: '',
        // numberList: 0,
        Manufacturer: {
            Perth: ['Adelaide', 'Melbourne', 'Sydney', 'Brisbane', 'Darwin'],
            Adelaide: ['Perth', 'Melbourne', 'Sydney', 'Brisbane', 'Darwin']
        },
        items: {
                parcel: { name: 'Parcel', icon: 'fas fa-box-open' },
                pallet: { name: 'Pallet', icon: 'fas fa-pallet' },
                smallMoving: { name: 'SmallMoving', icon: 'fas fa-truck-moving' },
                carTransport: { name: 'CarTransport', icon: 'fas fa-car-side' },
    },
        ToWhere: ["home", "depot"],
        possession: ['Yes I have', 'No I don\'t']
    
    }},

    computed: {
        ManufacturerData(){
             return Object.keys(this.Manufacturer)
          }, 
            
      
        ModelData(){
            if(this.select2===''){
                return null
            }else{
                return this.Manufacturer[this.select2]

                // const aaa = this.Manufacturer[this.select1];
                // return aaa;
            }
        },
        ProblemData(){
            if(this.select3===''){
                return null
            }else{
                 return this.ToWhere
            }
        },
           PossessionData(){
            if(this.select3===''){
                return null
            }else{
                 return this.possession
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