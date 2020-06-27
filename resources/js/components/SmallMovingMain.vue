<template>
<div>
    <v-container >
            <!-- bed -->
                <div class='badge'>
                <v-badge :content="bed" :value="bed" color="green" overlap style='position: relative;' small>
                    <button  @click="bed = 0" ><v-icon class='icon'>fas fa-times</v-icon></button>
                    <v-btn small class="mx-1" color="primary" @click="bed++" style='height: 40px;' ><v-icon small>fas fa-bed</v-icon> <span class='span_name'>BED</span></v-btn>
                </v-badge>
                </div>
                <!-- bed -->

 
                <!-- chair -->
                 <div class='badge'>
                <v-badge :content="chair" :value="chair" color="green" overlap style='position: relative;' small>
                <button @click="chair = 0"><v-icon  class='icon'>fas fa-times</v-icon></button>
                <v-btn class="mx-1" color="primary" @click="chair++" style='height: 40px;' ><v-icon small>fas fa-chair</v-icon><span class='span_name'>Chair</span></v-btn>
                </v-badge>
                </div>
                <!-- chair -->
 
                <!-- fridge -->
                 <div class='badge'>
                <v-badge :content="fridge" :value="fridge" color="green" overlap style='position: relative;' small>
                <button @click="fridge = 0"><v-icon  class='icon'>fas fa-times</v-icon></button>
                <v-btn class="mx-1" color="primary" @click="fridge++" style='height: 40px;' ><v-icon small>mdi-fridge</v-icon><span class='span_name'>Fridge</span></v-btn>
                </v-badge>
                </div>
                <!-- fridge -->
 
                <!-- mattress -->
                 <div class='badge'>
                <v-badge :content="mattress" :value="mattress" color="green" overlap style='position: relative;' small>
                <button @click="mattress = 0"><v-icon  class='icon'>fas fa-times</v-icon></button>
                <v-btn class="mx-1" color="primary" @click="mattress++" style='height: 40px;' ><v-icon small>mdi-page-layout-header</v-icon><span class='span_name'>Matress</span></v-btn>
                </v-badge>
                </div>
                <!-- mattress -->
 
                <!-- sofa -->
                 <div class='badge'>
                <v-badge :content="sofa" :value="sofa" color="green" overlap style='position: relative;' small >
                <button @click="sofa = 0"><v-icon  class='icon'>fas fa-times</v-icon></button>
                <v-btn class="mx-1" color="primary" @click="sofa++" style='height: 40px;' ><v-icon small>mdi-sofa</v-icon><span class='span_name'>sofa</span></v-btn>
                </v-badge>
                </div>
                <!-- sofa -->
 
                <!-- wardrobe -->
                 <div class='badge'>
                <v-badge :content="wardrobe" :value="wardrobe" color="green" overlap style='position: relative;' small>
                <button @click="wardrobe = 0"><v-icon  class='icon'>fas fa-times</v-icon></button>
                <v-btn class="mx-1" color="primary" @click="wardrobe++" style='height: 40px;' ><v-icon small>mdi-wardrobe</v-icon><span class='span_name'>war<br>drobe</span></v-btn>
                </v-badge>
                </div>
                <!-- wardrobe -->
 
                <!-- table -->
                 <div class='badge'>
                <v-badge :content="table" :value="table" color="green" overlap style='position: relative;' small>
                <button @click="table = 0"><v-icon  class='icon'>fas fa-times</v-icon></button>
                <v-btn class="mx-1" color="primary" @click="table++" style='height: 40px;' ><v-icon small>mdi-table-furniture</v-icon><span class='span_name'>table</span></v-btn>
                </v-badge>
                </div>
                <!-- table -->
 
                <!-- washing_machine -->
                 <div class='badge'>
                <v-badge :content="washing_machine" :value="washing_machine" color="green" overlap style='position: relative;' small>
                <button @click="washing_machine = 0"><v-icon  class='icon'>fas fa-times</v-icon></button>
                <v-btn class="mx-1" color="primary" @click="washing_machine++" style='height: 40px;' ><v-icon small>mdi-washing-machine</v-icon><span class='span_name'>washing<br>machine</span></v-btn>
                </v-badge>
                </div>
                <!-- washing_machine -->
                <!-- mirror -->
                 <div class='badge'>
                <v-badge :content="mirror" :value="mirror" color="green" overlap style='position: relative;' small>
                <button @click="mirror = 0"><v-icon  class='icon'>fas fa-times</v-icon></button>
                <v-btn class="mx-1" color="primary" @click="mirror++" style='height: 40px;' ><v-icon small>mdi-mirror</v-icon><span class='span_name'>mirror</span></v-btn>
                </v-badge>
                </div>
                <!-- mirror -->    
                <!-- dishwasher -->
                 <div class='badge'>
                <v-badge :content="dishwasher" :value="dishwasher" color="green" overlap style='position: relative;' small>
                <button @click="dishwasher = 0"><v-icon  class='icon'>fas fa-times</v-icon></button>
                <v-btn class="mx-1" color="primary" @click="dishwasher++;" style='height: 40px;' ><v-icon small>mdi-dishwasher</v-icon><span class='span_name'>dish <br>washer</span></v-btn>
                </v-badge>
                </div>
                <!-- dishwasher -->   
    </v-container>
    <div style='font-size: 14px; color:white; clear: both; padding-left: 320px;'>
        <v-btn text color='yellow'>PRICE: ${{result}}</v-btn>
    </div>

    </div>
</template>


<style lang="scss" scoped>

.badge{
    padding: 10px;
    float: left;
    text-align: left;
    width: 140px;
}


.span_name{
    padding-left: 4px; font-size: 0.7rem;
}
.icon{
    background: #E09cbb; 
    padding: 4px; 
    width: 14px; 
    height: 14px;
    position: absolute; 
    top: -7px; 
    color: white; 
    font-size: 12px; 
    border-radius: 50%; 
    left: 1px;
    z-index: 2;
}

</style>
<script>
export default {
 props: {
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        }
    },
data () {
    return {
    bed: 0,
    chair: 0,
    fridge: 0,
    mattress: 0,
    sofa: 0,
    wardrobe: 0,
    table: 0,
    washing_machine: 0,
    mirror: 0,
    dishwasher: 0,
    }
},
watch: {
    bed: function(hook){
        console.log(this.bed)
    }
},
computed: {
    result() {
        return (this.bed * 10) + (this.chair * 8) + (this.fridge * 5) + (this.mattress * 20) + (this.sofa * 25) + (this.wardrobe * 30) + (this.table * 10) + (this.washing_machine * 25) +
        (this.mirror * 5) + (this.dishwasher * 15)
    }
}
}
</script>