import React from "react"
import ReactApexChart from "react-apexcharts"

const barchart = () => {
  const series = [
    {
      data: [380, 430, 450, 475, 550],
    },
  ]
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },

    colors: ["#34c38f"],
    grid: {
      borderColor: "#f1f1f1",
    },
    xaxis: {
      categories: [
        "Address Change",
        "Contact Update",
        "Member Update",
        "Team Update",
        "Policies Update", 
      ],
    },
  }

  return (
    <ReactApexChart options={options} series={series} type="bar" height="350" />
  )
}

export default barchart
