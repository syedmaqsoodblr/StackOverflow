 google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses', 'Profit', 'Loss'],
          ['2014', 1000, 400, 200, 100],
          ['2015', 1170, 460, 250, 100],
          ['2016', 660, 1120, 300, 233],
          ['2017', 1030, 540, 350, 322]
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          },
          bars: 'horizontal' // Required for Material Bar Charts.
        };

        var chart = new google.charts.Bar(document.getElementById('multiCol_barchart_material'));
        chart.draw(data, google.charts.Bar.convertOptions(options));

    google.visualization.events.addListener(chart, 'select', selectHandler);

    function selectHandler() {
          var selection = chart.getSelection();

          var Rowlabel = data.getColumnLabel(0);
          var Rowvalue = data.getValue(selection[0].row, 0);
          var Columnlabel = data.getColumnLabel(selection[0].column);
          var Columnvalue = data.getValue(selection[0].row, selection[0].column)
          alert(Rowlabel+ "=" +Rowvalue + ", " + Columnlabel + Columnvalue);
    }

}