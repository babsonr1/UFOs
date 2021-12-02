// from data.js
var tableData = data;
filteredData = tableData;

// get table references
var tbody = d3.select("tbody");

function buildTable() {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  filteredData.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {


    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this);
    // 4b. Save the value that was changed as a variable.
    let elementValue = changedElement.property("value");
    // 4c. Save the id of the filter that was changed as a variable.
    let filterID = changedElement.attr("id");
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue != "") {
        filters[filterID] = elementValue;
    } else {
        delete filters[filterID];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
		
	ctr = 0;
	for (i=0; i < tableData.length; i++) {
		addFlag = true; 
		
		if (filters.datetime != undefined) {
			if (tableData[i].datetime.toUpperCase() != filters.datetime.toUpperCase()) {
				addFlag = false;
			}
		}
		
		if (filters.city != undefined) {
			if (tableData[i].city.toUpperCase() != filters.city.toUpperCase()) {
				addFlag = false;
			}  
		}
	
		if (filters.state != undefined) {
			if (tableData[i].state.toUpperCase() != filters.state.toUpperCase()) {
				addFlag = false;
			}
		}
		
		if (filters.country != undefined) {
			if (tableData[i].country.toUpperCase() != filters.country.toUpperCase()) {
				addFlag = false;
			}
		}
		
		if (filters.shape != undefined) {
			if (tableData[i].shape.toUpperCase() != filters.shape.toUpperCase()) {
				addFlag = false;
			}
		}
		
		if (addFlag) {
	
			filteredData[ctr++] = tableData[i];
		}	
	}	
	filteredData = filteredData.slice(0,ctr);
	buildTable();

  // 10. Finally, rebuild the table using the filtered data
  //buildTable(filteredData.slice(0,10));
  }  
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(filteredData);
