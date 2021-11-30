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
}