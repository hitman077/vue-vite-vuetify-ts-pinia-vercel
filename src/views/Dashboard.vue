<template>
  <div class="pa-md-8">
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <apexchart 
          height="400"
          type="area"
          :options="chartOptions"
          :series="series"/>
      </v-col>
      <v-col cols="12" sm="6">
        <apexchart 
          height="400"
          type="line"
          :options="chartOptions"
          :series="series"/>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" sm="6">
        <apexchart 
          height="400"
          type="bar"
          :options="chartOptions"
          :series="series"/>
      </v-col>
      <v-col cols="12" sm="6">
        <apexchart 
          height="400"
          type="scatter"
          :options="chartOptions"
          :series="series"/>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts';

const chartOptions = {
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  }
}
const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91]
  }
]

</script>

<style scoped>

</style>