// Load Charts and the corechart and barchart packages.
google.charts.load('current', { 'packages': ['corechart'] });

// Draw the pie chart and bar chart when Charts is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Mushrooms', 3],
        ['Onions', 1],
        ['Olives', 1],
        ['Zucchini', 1],
        ['Pepperoni', 2]
    ]);

    //piechart code starts
    var piechart_options = {
        title: 'Pie Chart: How Much Pizza I Ate Last Night',
        width: 400,
        height: 300
    };
    var piechart = new google.visualization.PieChart(document.getElementById('reports_piechart_div'));
    piechart.draw(data, piechart_options);

    //columnchart code starts
    var columnchart_options = {
        title: 'Barchart: How Much Pizza I Ate Last Night',
        width: 400,
        height: 300,
        legend: 'none'
    };
    var columnchart = new google.visualization.ColumnChart(document.getElementById('reports_columnchart_div'));
    columnchart.draw(data, columnchart_options);


    //bar code starts
    var barchart = new google.visualization.BarChart(document.getElementById('reports_barchart_div'));
    barchart.draw(data, columnchart_options);

    //onclick chart
    // Listen for the 'select' event, and call my function selectHandler() when
    // the user selects something on the chart.
    google.visualization.events.addListener(columnchart, 'select', selectHandler);

    function selectHandler() {
        var selection = columnchart.getSelection();
        var lat = data.getValue(selection[0].row, 0);
        var lon = data.getValue(selection[0].row, 1);
        alert(lat + ", " + lon);
    }

}