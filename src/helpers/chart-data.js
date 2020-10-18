export default {
  chartData: {
    labels: [
      "Babol",
      "Cabanatuan",
      "Daegu",
      "Jerusalem",
      "Fairfield",
      "New York",
      "Gangtok",
      "Buenos Aires",
      "Hafar Al-Batin",
      "Idlib",
    ],
    datasets: [
      {
        label: "Visits",
        data: [600, 1150, 342, 6050, 2522, 3241, 1259, 157, 1545, 9841],
        fill: true,
        borderColor: "#f50057",
        backgroundColor: "rgba(240,0,87,0.3)",
        borderWidth: 4,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            display: true,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: true,
    },
    responsive: true,
    maintainAspectRatio: false,
  },
}

export const taskData = [
  { date: "2020-07-01", visits: 213 },
  { date: "2020-07-02", visits: 249 },
  { date: "2020-07-03", visits: 179 },
  { date: "2020-07-04", visits: 170 },
  { date: "2020-07-05", visits: 184 },
  { date: "2020-07-06", visits: 202 },
  { date: "2020-07-07", visits: 198 },
  { date: "2020-07-08", visits: 168 },
  { date: "2020-07-09", visits: 176 },
  { date: "2020-07-10", visits: 171 },
  { date: "2020-07-11", visits: 190 },
  { date: "2020-07-12", visits: 154 },
  { date: "2020-07-13", visits: 246 },
  { date: "2020-07-14", visits: 250 },
  { date: "2020-07-15", visits: 227 },
  { date: "2020-07-16", visits: 140 },
  { date: "2020-07-17", visits: 170 },
  { date: "2020-07-18", visits: 125 },
  { date: "2020-07-19", visits: 106 },
  { date: "2020-07-20", visits: 207 },
  { date: "2020-07-21", visits: 222 },
  { date: "2020-07-22", visits: 198 },
  { date: "2020-07-23", visits: 204 },
  { date: "2020-07-24", visits: 213 },
  { date: "2020-07-25", visits: 145 },
  { date: "2020-07-26", visits: 166 },
  { date: "2020-07-27", visits: 163 },
  { date: "2020-07-28", visits: 135 },
  { date: "2020-07-29", visits: 45 },
]
