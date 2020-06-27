<template>
<v-app>
  <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>Quotation App</v-toolbar-title>
    </v-toolbar>
    <v-tabs horizontal>
      <v-tab>
        <v-icon left>mdi-account</v-icon>
        International
      </v-tab>
      <v-tab>
        <v-icon left>mdi-lock</v-icon>
        Domestic
      </v-tab>
      <v-tab>
        <v-icon left>mdi-access-point</v-icon>
        Option 3
      </v-tab>


      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>

                <select-item></select-item>
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
                <select-item-domestic></select-item-domestic>
            </p>

          </v-card-text>
        </v-card>
      </v-tab-item>


      <v-tab-item>
        <v-card flat>
          <v-card-text>
           3
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</v-app>
</template>

<script>
import selectItem from './SelectItem'
import selectItemDomestic from './SelectItemDomestic'
import SmallMoving from './SmallMoving'

export default {
    components: {
        selectItem,
        selectItemDomestic,
        SmallMoving


    }
}
</script>