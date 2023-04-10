let jsonData = `
                [
                    {
                        "Item": "Dagger",
                        "Cost": "1 Gold",
                        "Weight": "1lbs"
                    },
                    {
                        "Item": "Crystal",
                        "Cost": "50 Gold",
                        "Weight": "1lbs"
                    },
                    {
                        "Item": "Potion Of Healing",
                        "Cost": "10 Gold",
                        "Weight": "0.5lbs"
                    }
                ]
            `

function createTableFromJSON(jsonData) {
    // Parse the JSON object into a JavaScript object
    const data = JSON.parse(jsonData);
    
    // Create an string variable with table headers to store the table HTML code
    let tableHtml = `<tr>
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Weight</th>
                    </tr>`;
    
    // Loop through the JavaScript object and append each row of data to the table HTML code
    for (let i = 0; i < data.length; i++) {
        tableHtml += '<tr>';
        tableHtml += '<td>' + data[i].Item + '</td>';
        tableHtml += '<td>' + data[i].Cost + '</td>';
        tableHtml += '<td>' + data[i].Weight + '</td>';
        tableHtml += '</tr>';
    }
    
    // Create a table element and add the Bootstrap classes to it
    const tableElement = document.createElement('table');
    tableElement.classList.add('table', 'table-striped');
    
    // Set the innerHTML of the table element to the table HTML code
    tableElement.innerHTML = tableHtml;
    
    // Add the table element to the DOM
    document.body.appendChild(tableElement);
    }

createTableFromJSON(jsonData);