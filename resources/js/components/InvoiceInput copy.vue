<template>
    <v-app>

    <v-container>
        <v-row>
            <v-col cols='12' md='4' no-gutters>
                <v-card class="mx-auto" width="425px" >
                    <v-card-text>
                    <div style='border-bottom: 1px solid whitesmoke;padding-bottom: 20px;' class="subtitle-1 text--primary"><v-icon>mdi-account-arrow-right</v-icon> Sender Information</div>
                    <br>
                        <p>
                            <v-text-field  v-model="sender_name_eng" label="Name_Eng"  outlined dense             
                            hint="ex. Harry Jung"></v-text-field>   
                            <v-text-field  v-model="sender_name_kor" label="Name_Kor"  outlined dense
                            hint="ex.홍 길동"></v-text-field>   
                            <v-text-field  v-model="sender_phone" label="Phone Number"  outlined dense
                            hint="ex. 010-000-0000 korean number"></v-text-field>   
                            <v-text-field  v-model="sender_address" label="Address"  outlined dense
                            hint="ex. 서울특별시 ... korea address"></v-text-field>   
                            <v-text-field  v-model="sender_postcode" label="postcode"  outlined dense
                            hint="ex. 339-223 "></v-text-field>   
                        </p> 
                    </v-card-text>
                    <v-card-actions >
                        <v-btn  color="primary text--white accent-4" > Submit  </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>


            <v-col cols='12' md='4' no-gutters>
                <v-card class="mx-auto" width="425px" >
                    <v-card-text>
                    <div style='border-bottom: 1px solid whitesmoke;padding-bottom: 20px;' class="subtitle-1 text--primary"><v-icon>mdi-account-arrow-left</v-icon> Receiver Information</div>
                    <br>
                
                    <p>
                    <v-text-field  v-model="receiver_name_eng" label="Name_Eng"  outlined dense             
                    hint="ex. Harry Jung"></v-text-field>   
                    <v-text-field  v-model="receiver_name_kor" label="Name_Kor"  outlined dense
                    hint="ex.홍 길동"></v-text-field>   
                    <v-text-field  v-model="receiver_phone" label="Phone Number"  outlined dense
                    hint="ex. 0400-000-000 Australia number"></v-text-field>   
                    <v-text-field  v-model="receiver_address" label="Address"  outlined dense
                    hint="ex. 127 adelaide st ... Australia Address "></v-text-field>   
                    <v-text-field  v-model="receiver_postcode" label="postcode"  outlined dense
                    hint="ex. 6000 Australia Postcode "></v-text-field>   
                </p> 
                </v-card-text>
                <v-card-actions >
                    <v-btn  color="primary text--white accent-4" > Submit  </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>    

        </v-row>
    </v-container>
    </v-app>
</template>







<style lang="scss">
.table{
    width: 435px;
}
</style>