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

// Create function to handle action after user click
function handleClick() {
    // Create variable to hold date data (.select() selects first element that matches the string '#datetime', and .property('value') grabs and stores that data in the the date variable)
    let date = d3.select(#datetime).property("value");
    // Set default filter and save it to original table data so user can refine search from complete table
    let filteredData = tableData;
    // Apply a filter on the date variable based on a date value
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using filtered data. If no date was entered then filteredData will just be the original tableData
    buildTable(filteredData);
}

// Execute handleClick() function when the button with ID filter-btn is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);