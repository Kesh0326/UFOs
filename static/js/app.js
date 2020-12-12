// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Create function to store data in a table
function buildTable(data) {
    // Clear existing data in table
    tbody.html("");
    // Create forEach function to loop through the table
    data.forEach(dataRow) => {
        // Create a variable to add a row to the table
        let row = tbody.append("tr");
        // Reference an object from the array of UFO sightings and put each sighting in its own row of data
        Object.values(dataRow).forEach((val) => {
            // Create a variable to add data to the row
            let cell = row.append("td");
            // Add values 
            cell.text(val);
        });
    });
}