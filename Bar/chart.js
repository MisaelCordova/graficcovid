var data = {
    labels: ["Jan", "Fev", "Mar","Abr","Mai","Jun",'Jul',"Ago","Set","Out","Nov","Dez"],
    datasets: [{
        label: "Confirmados",
        backgroundColor: "rgba(54, 162, 235,0.2)",
        borderColor: "rgba(54, 162, 235,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [30,25,28,31,26,23,30,25,28,31,26,23]
    },
    {
        label: "Recuperados",
        backgroundColor: "rgba(99,255,132,0.2)",
        borderColor: "rgba(99,255,132,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(99,255,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data:[25,30,26,29,31,20,25,30,26,29,31,20]
    },
    {
        label: "Óbitos",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(99,255,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data:[25,30,26,29,31,20,25,30,26,29,31,20]
    }
]
};

var options = {
    title:{
      display:true,
      text: 'Distribuição dos casos confirmados, recuperados e óbitos',
      fontSize: 18
    },
    maintainAspecRatio:false,
    scales: {
        yAxes:[{
            gridLines: {
                display: true,
                color: "rgba(255,99,132,0.2)"
            },
            ticks: {
                beginAtZero: true
            }
        }],
    xAxes:[{
        gridLines: {
            display:false
        }            
    }]
   }
};
Chart.defaults.global.defaultFontColor = 'Black';
Chart.defaults.global.defaultFontSize = 14;
Chart.Bar('chart',{
    options: options,
    data: data
});