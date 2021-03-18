var data = {
    labels: ["06/04", "13/04", "20/04","27/04","05/05","11/05",
    "25/05","01/06","08/06","15/06","22/06","29/06","06/07",
    "13/07","20/07","27/07","03/08","10/08","17/08","24/08",
    "31/08","07/09","14/09","21/09","28/09","05/10","12/10",
    "19/10","26/10","03/11","09/11","16/11","23/11","16/11",
    "23/11","30/11","07/12","15/12","21/12","28/12","04/01",
    "11/01","18/01","25/01","01/02","08/02","12/02","22/02","01/03","08/03","15/03"],
    datasets: [{
        label: "Numero de casos",
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(0,127,255,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [4,0,0,4,2,1,19,23,11,13,11,4,13,23,43,67,131,241,369,319,234,302,101,76,
            29,17,19,2,47,79,163,140,238,381,436,316,261,310,204,277,392,256,282,157,129,94,172,228,219,226]
    },
  
]
};

var options = {
    title:{
      display:true,
      text: 'Testagem de Casos positivos por semana',
      fontSize: 18
    },
    maintainAspecRatio:false,
    scales: {
        yAxes:[{
            gridLines: {
                display: true,
                color: "rgba(0,127,255,0.2)"
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
Chart.Line('chart',{
    options: options,
    data: data
});