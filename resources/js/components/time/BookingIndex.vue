<template>
    <v-app>
    booking:
        <v-row justify="center">
            <v-date-picker @change = 'onChange' v-model="picker"></v-date-picker>
        </v-row > 

        <v-chip-group v-for='(s, i) in select.time' :key='i'  active-class="teal white--text" v-model='pickerTime'>
            <v-chip color='primary' :disabled='s.book' :value='s.hour' @click='onClick(select, i)'>{{s.hour}}</v-chip>
        </v-chip-group>



        <div v-if='showTable'>
      
            <v-card class="mx-auto" max-width="344" >
                <v-card-text>
                <div>First Name</div>
                <p>
                      <v-text-field
                        v-model="firstname"
                        label="First name"
                        required
                    ></v-text-field>
                </p>
                <p>Last Name</p>
               <p>
                     <v-text-field
                    v-model="lastname"
                    label="Last name"
                    required
                ></v-text-field>
               </p>
               <p>{{picker}} : {{pickerTime}}</p>
                </v-card-text>
                <v-card-actions>
                <v-btn
                    text
                    color="deep-purple accent-4"
                    @click='click'
                >
                    Booking
                </v-btn>
                </v-card-actions>
            </v-card>

        </div>
     

    </v-app>
</template>




<script>

export default {
    data(){
        return{
            picker: '',
            pickerTime: '',
            booking: [{date: '2020-06-10', time: [ {hour: '09:00', book: false} , {hour: '10:00', book: false}]}],
            select: [],
            showTable: false,
            firstname:'',
            lastname: '',
            i: '',
        }
    },

    methods:{
        click(){
            this.select.time[this.i].book=true
        },
        onClick(select, i){
            this.i = i
            console.log(this.i)
            console.log(this.select)
            this.showTable = true
            console.log('onclick', select);
            // select.time[i].book = true
        },
        onChange(d){
            console.log('chip', this.booking[0].time)
            const result = this.booking.find(({date}) => date == d)

            this.select = result
            console.log("select", this.select)
            console.log(result)
            if(result){
                console.log('wow find')
                console.log(result.date)
            }else{
                var timeObject = [ 
                    {hour: '08:00', book: false}, 
                    {hour: '09:00', book: false}, 
                    {hour: '10:00', book: false}, 
                    {hour: '11:00', book: false}, 
                    {hour: '12:00', book: false}, 
                    {hour: '13:00', book: false}, 
                    {hour: '14:00', book: false}, 
                    {hour: '15:00', book: false}, 
                    {hour: '16:00', book: false}, 
                    {hour: '17:00', book: false}, 
                ]

                var text = { date: d, time: timeObject}
                this.booking.push(text)



                const result = this.booking.find(({date}) => date == d)
                this.select = result
                console.log("select", this.select)

                console.log(this.booking)
            }
             
      
                    
          
            // console.log(this.booking[0].time[0].hour)
            // console.log(this.booking[0].time[0].book)
            // console.log(this.booking[0].date)

        }
    }
}
</script>