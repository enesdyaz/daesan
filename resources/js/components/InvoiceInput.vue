<template>
    <v-app>
        <v-container>
            <v-parallax height="200" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" >
                <v-row align="center" justify="center" >
                    <v-col class="text-center" cols="12">
                        <h1 class="display-1 font-weight-thin mb-4">QUOTATION FORM</h1>
                        <h4 class="subheading">Build your application today!</h4>
                    </v-col>
                </v-row>
            </v-parallax>
<!-- Sender Form -->
            <div class='wrap'>
                <div class='header'>
                    <div class='section-left' style='padding: 30px;'>
                        <div style='border-bottom: 1px solid whitesmoke;padding-bottom: 20px;' class="subtitle-1 text--primary"><v-icon>mdi-account-arrow-right</v-icon> Sender Information</div>
                        <p>
                            <v-row>
                                <v-col cols='12' md='1'></v-col>
                                <v-col cols='12' md='5'>
                                    <v-text-field  v-model="sender_name_eng" label="Name(eng)" dense hint="ex.Harry Jung"></v-text-field>  
                                </v-col>
                                <v-col cols='12' md='5'>
                                    <v-text-field  v-model="sender_name_kor" label='Name(kor)' dense hint="ex.홍 길동"></v-text-field>
                                </v-col>
                                <v-col cols='12' md='1'></v-col>
                            </v-row>
                            <v-row style='margin-top: -20px;'>
                                <v-col cols='12' md='1'></v-col>
                                <v-col cols='12' md='10'>
                                    <v-text-field  v-model="sender_address" label="Address" dense hint="ex. 서울특별시 ... korea address"></v-text-field>                                 </v-col>
                                <v-col cols='12' md='1'></v-col>
                            </v-row>

                            <v-row style='margin-top: -20px;'>
                                <v-col cols='12' md='1'></v-col>
                                <v-col cols='12' md='4'>
                                    <v-text-field  v-model="sender_postcode" label="postcode" dense hint="ex. 339-223 "></v-text-field>                                  </v-col>
                                <v-col cols='12' md='6'>
                                    <v-text-field  v-model="sender_phone" label="Phone Number" dense hint="ex. 010-000-0000 korean number"></v-text-field>  
                                </v-col>
                            </v-row>
                        </p> 
                    </div>

<!-- Receiver Form -->
                    <div class='section-right'  style='padding: 30px;'>
                        <div style='border-bottom: 1px solid whitesmoke;padding-bottom: 20px;' class="subtitle-1 text--primary"><v-icon>mdi-account-arrow-left</v-icon> Receiver Information</div>
                        <p>
                            <v-row>
                                <v-col cols='12' md='1'></v-col>
                                <v-col cols='12' md='5'>
                                    <v-text-field  v-model="sender_name_eng" label="Name(eng)" dense hint="ex.Harry Jung"></v-text-field>  
                                </v-col>
                                <v-col cols='12' md='5'>
                                    <v-text-field  v-model="sender_name_kor" label='Name(kor)' dense hint="ex.홍 길동"></v-text-field>
                                </v-col>
                                <v-col cols='12' md='1'></v-col>
                            </v-row>
                            <v-row style='margin-top: -20px;'> 
                                <v-col cols='12' md='1'></v-col>
                                <v-col cols='12' md='10'>
                                    <v-text-field  v-model="sender_address" label="Address" dense hint="ex.128 broadway blvd australia address"></v-text-field>                                 </v-col>
                                <v-col cols='12' md='1'></v-col>
                            </v-row>

                            <v-row style='margin-top: -20px;'>
                                <v-col cols='12' md='1'></v-col>
                                <v-col cols='12' md='4'>
                                    <v-text-field  v-model="sender_postcode" label="postcode" dense hint="ex. 6000 "></v-text-field>                                  </v-col>
                                <v-col cols='12' md='6'>
                                    <v-text-field  v-model="sender_phone" label="Phone Number" dense hint="ex.0401-222-222"></v-text-field>  
                                </v-col>
                            </v-row>
                        </p> 
                    </div>
                </div>

 <!-- Item Details Form -->               
                <div class='item-detail'>
                    
                    <div style='border-bottom: 1px solid whitesmoke;padding-left: 20px;' class="subtitle-1 text--primary"><v-icon>mdi-view-list-outline</v-icon> ITEM LIST</div>
                    <v-row no-gutters style='margin-left: 30px;padding: 30px;'>
                        <v-col cols='12' md='1'>
                                <v-text-field v-model='brand' label="Brand" hint="ex.gmarket, ebay" outlined ></v-text-field>
                        </v-col>
                        <v-col cols='12' md='1'>
                                <v-text-field v-model='category' label="category" hint="ex. cloth, furniture, electronics .." outlined ></v-text-field>
                        </v-col>
                        <v-col cols='12' md='2'>
                                <v-text-field v-model='item' label="item" hint="ex. shoe, notebook .." outlined ></v-text-field>
                        </v-col>
                        <v-col cols='12' md='2'>
                                <v-text-field v-model='courier' label="courier" hint="ex. Coopang, CJ, Lotte .." outlined ></v-text-field>
                        </v-col>
                        <v-col cols='12' md='2'>
                                <v-text-field v-model='trackingNumber' label="trackingNumber" hint="ex.0020300022" outlined ></v-text-field>
                        </v-col>
                        <v-col cols='12' md='1'>
                                <v-text-field v-model='quantity' label="quantity" hint="ex. 2" outlined ></v-text-field>
                        </v-col>
                        <v-col cols='12' md='1'>
                                <v-text-field v-model='price' label="price" hint="ex. $20" outlined ></v-text-field>
                        </v-col>
                        <v-col cols='12' md='1'></v-col>
                        <v-col cols='12' md='1'>
                            <v-btn @click='addItem' style='height: 55px' color='primary'><v-icon>mdi-plus</v-icon></v-btn>
                        </v-col>
                    </v-row>

<!-- Item List ------------>
                    <div style='width: 80%; margin: 0 auto;'>
                            <v-simple-table>
                                <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th>index</th>
                                        <th>brand</th>
                                        <th>category</th>
                                        <th>item</th>
                                        <th>courier</th>
                                        <th>tracking number</th>
                                        <th>quantity</th>
                                        <th>price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for='(item, index) in items' :key='index'>
                                        <td>{{index+1}}</td>
                                        <td>{{item.brand}}</td>
                                        <td>{{item.category}}</td>
                                        <td>{{item.item}}</td>
                                        <td>{{item.courier}}</td>
                                        <td>{{item.trackingNumber}}</td>
                                        <td>{{item.quantity}}</td>
                                        <td>{{item.price}}</td>
                                        <td><v-btn @click='itemDelete(index)'>delete</v-btn></td>
                                    </tr>
                                </tbody>
                                </template>
                            </v-simple-table>
                            
                    </div>
                    <br><br><br>

                        <div style='text-align: center;'><v-btn @click='reset' color='warning' style='display: inline-block; margin-right: 10px;'> Reset </v-btn><v-btn @click='submitform' color='primary' style='display: inline-block'>submit</v-btn></div>
                </div>
               
            </div> <!-- wrap_end -->

        </v-container>
    </v-app>
</template>

<script>
export default {
    data(){
        return{
            brand:'',
            category: '',
            item:'',
            courier: '',
            trackingNumber:'',
            quantity:'',
            price:'',
            items: [] 
        }
    },

    methods: {
        addItem(){
            this.items.push({
                brand: this.brand,
                category: this.category,
                item: this.item,
                courier: this.courier,
                trackingNumber: this.trackingNumber,
                quantity: this.quantity,
                price: this.price,
            })

            this.brand=''
            this.category=''    
            this.item=''
            this.courier=''
            this.trackingNumber=''
            this.quantity=''
            this.price=''
        },
        itemDelete(index){
            const itemlist = this.items.indexOf(index)
            confirm('Are you sure you want to delete this item?') && this.items.splice(itemlist, 1)
        },
        reset(){
            this.items = ''
        },
        submitform(){
            alert('An email will be send to a customer and the supplier with PDF file including the content customer put in')
        }
    }
}
</script>


<style lang="scss">
v-col{
    margin: 0; padding: 0;
}
v-textfield{
    margin: 0; padding: 0;
}

.wrap{
    
    height: 50vh;
    .header{
        
        height: 30vh;
        overflow: hidden;
        .section-left{width: 50%; float: left;}
        .section-right{width: 50%; float: left;}
    }
    .item-detail{
        height: 20vh;
    }
}
</style>