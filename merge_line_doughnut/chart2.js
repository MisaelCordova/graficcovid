var data = {
   type:'pie',
   labels: ['Recuperados','Monitorados','ÓBITOS'],
    datasets: [{
        
        backgroundColor: [
            'rgba(54, 162, 235,0.2)',
            'rgba(210,105,30,0.2)',
            'rgba(220,20,60,0.2)'
          ],
        borderColor: [
            'rgba(54, 162, 235,1)',
            'rgba(210,105,30,1)',
            'rgba(220,20,60,1)'
          ],
        borderWidth: 2,
        hoverBackgroundColor: [
            'rgba(54, 162, 235)',
            'rgba(210,105,30,1)',
            'rgba(220,20,60)'
          ],
        hoverBorderColor: "rgba(54, 162, 235,1)",
        data: [6812,158,115]
    },
]
};

var options = {
    title:{
      display:true,
      text: 'Distribuição de Recuperados, em monitoramento e óbitos',
      fontSize: 18
    },
    maintainAspecRatio:false,
  
};
Chart.defaults.global.defaultFontColor = 'Black';
Chart.defaults.global.defaultFontSize = 14;
Chart.Doughnut('chart2',{
    options: options,
    data: data
});