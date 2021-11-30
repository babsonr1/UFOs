// import data from data.js
const tableData = data;
var tbody = d3.select("tbody");

function buildTable(data) {
    //clear existing data
    tbody.html("");
    // append row and cells for each value in the row
    data.forEach((dataRow) => {
        //append row to table body (tr)
       let row = tbody.append("tr");
       //add each value as a table cell(td)
       Object.values(dataRow).forEach((val) => {
           let cell = row.append("td");
           cell.text(val);
       });
    });
};

function handleClick(){
    //selects datetime value
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    //check to see if date was entered and filter using that date
    if (date) {
        //apply filter where table data for datetime matches filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);