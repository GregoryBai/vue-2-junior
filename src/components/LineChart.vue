<script>
import { Line } from "vue-chartjs"
export default {
  extends: Line,
  props: {
    chartData: Object,
    options: Object,
  },

  methods: {
    renderLineChart() {
      this.renderChart(
        {
          labels: this.chartData.labels,
          datasets: [
            {
              label: "Visits",
              data: this.chartData.data,
              fill: true,
              borderColor: "#f50057",
              backgroundColor: "rgba(240,0,87,0.3)",
              borderWidth: 4,
            },
          ],
        },
        this.options
      )
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.renderLineChart()
    })
  },
}
</script>
