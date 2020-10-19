<template>
  <div>
    <h2 class="analytics__header">Аналитика</h2>
    <main class="analytics__main">
      <line-chart :chart-data="chartData" :options="options"></line-chart>
    </main>
  </div>
</template>

<script>
import LineChart from "@/components/LineChart"
import dayjs from "dayjs"
import chartDataModel, { taskData } from "../helpers/chart-data"

export default {
  data() {
    return {
      options: chartDataModel.options,
      chartData: {
        labels: [],
        data: [],
        lineChartReady: false,
      },
    }
  },

  components: {
    LineChart,
  },
  methods: {
    processData(arr) {
      arr.forEach((obj) => {
        this.chartData.labels.push(dayjs(obj.date).format("MMM D"))
        this.chartData.data.push(obj.visits)
      })
    },
  },

  mounted() {
    this.processData(taskData)
  },
}
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";
.analytics__header {
  -webkit-user-select: none;
  -moz-user-select: none;
  margin: 10px;
  text-align: center;
  font-family: $font-primary;
  color: $text-dark;
  letter-spacing: 1px;
}

.analytics__main {
  max-height: 90vh;
  margin: 20px 50px;
}
</style>
