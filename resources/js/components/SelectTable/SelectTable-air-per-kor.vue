<template>
<v-app>
  <v-container>
       <i class='fas fa-plane'></i>  AIR - Perth to Korea
  </v-container>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
  >
 
  </v-data-table>
  </v-app>
</template>


<script>
  export default {
    data () {
      return {
        singleSelect: true,
        selected: [],
        headers: [
          {
            text: 'Weigh(Kg)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Price', value: 'price' },
     
        ],
        desserts: [
          {
            name: '~ 1.0',
            price: '$10'
          },
            {
            name: '~ 1.5',
            price: '$15'
          },
            {
            name: '~ 2.0',
            price: '$20'
          },
            {
            name: '~ 2.5',
            price: '$25'
          },
            {
            name: '~ 3.0',
            price: '$30'
          },
            {
            name: '~ 3.5',
            price: '$35'
          },
            {
            name: '~ 4.0',
            price: '$40'
          },
          
        ],
      }
    },
  }
</script>