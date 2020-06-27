<template>
<v-app>
<div class='wrap_container'>
<!-- TITLE  -->
    <div class='subtitle-1 font-weight-bold'>
    DOMESTIC QUOTATION
        <hr>
    </div>
<!-- CONTENT -->


  <table>     
<!-- SELECT 1 -->
        <tr>
            <th>
                <div style='float: left; padding-right: 80px;'><i style='padding-left: 10px;margin-right: 10px;' class="fas fa-th-large"></i> ITEMS</div>
            </th>
            <td>
                <v-chip-group style='float: left;' v-model="select1" active-class="teal white--text"  >
                    <v-chip  v-for="(item, index) in items" :key="index"  :value="item.name"  small ><v-icon style='font-size: 15px; color: #432;padding-right: 10px;'>{{ item.icon}}</v-icon>{{ item.name }} </v-chip>
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
                <v-chip-group style='float: left;' v-model="select2"  active-class="teal white--text" >
                    <v-chip style='float: left;' v-for="(size, item) in ManufacturerData" :key="item" :value="size" small>  {{ size }} </v-chip>
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
                <v-chip-group style='float: left;' v-model="select3"  active-class="teal white--text" >
                    <v-chip style='float: left;' v-for="size in ModelData" :key="size" :value="size" small> {{ size }} </v-chip>
                </v-chip-group>
            </div>
            </td>
        </tr>
<!-- SELECT 3 end-->
<!-- SELECT 4 -->
    <tr>
        <th>
            <div v-if="select1 == 'CarTransport' && select3">
                <div style='float: left; padding-right: 80px;'><i style='padding-left: 10px;margin-right: 10px;' class="fas fa-arrow-alt-circle-up"></i> PICK UP</div>
            </div>
        </th>
        <td> 
            <div v-if="select1 == 'CarTransport' && select3">
            <v-chip-group style='float: left;' v-model="select4"  active-class="teal white--text" >
                <v-chip style='float: left;' v-for="size in ProblemData" :key="size" :value="size" small> {{ size }} </v-chip>
            </v-chip-group>    
            </div>
        </td>
    </tr>
<!-- SELECT 4 end -->
<!-- SELECT 5  -->
    <tr>
        <th>
            <div v-if="select1 == 'CarTransport' && select3">
            <div style='float: left; padding-right: 80px;'><i style='padding-left: 10px;margin-right: 10px;' class="fas fa-arrow-alt-circle-down"></i> DROP OFF</div>
            </div>
        </th>
        <td>
            <div v-if="select1 == 'CarTransport' && select3">
            <v-chip-group style='float: left;' v-model="select5"  active-class="teal white--text" >
                <v-chip style='float: left;' v-for="size in ProblemData" :key="size" :value="size" small> {{ size }} </v-chip>
            </v-chip-group>
            </div>
        </td>
    </tr>

<!-- SELECT 6  -->
    <tr>
        <th>
            <div v-if="select1 == 'CarTransport' && select3">
            <div style='float: left; padding-right: 80px;'><i style='padding-left: 10px;margin-right: 10px;' class="fas fa-boxes"></i> WITH POSESSIONS? </div>
            </div>
        </th>
        <td>
            <div v-if="select1 == 'CarTransport' && select3">
            <v-chip-group style='float: left;' v-model="select6"  active-class="teal white--text" small >
                <v-chip small >Yes, I have</v-chip>
                <v-chip small>No, only Car</v-chip>            
            </v-chip-group>
            </div>
        </td>
    </tr>

</table>
    <div v-if="select1 == 'SmallMoving' && select3">
        <small-moving :from='select2' :to='select3'></small-moving>
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
import SmallMoving from './SmallMoving'
export default {
    components:{
        SmallMoving,
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
        ToWhere: ["home", "depot"]
    
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