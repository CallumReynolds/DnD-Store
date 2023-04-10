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
    let data = JSON.parse(jsonData);
    let table = document.createElement('table');
  
    // create header row
    let headerRow = table.insertRow();
    for (let key in data[0]) {
      let headerCell = document.createElement('th');
      let headerText = document.createTextNode(key);
      headerCell.appendChild(headerText);
      headerRow.appendChild(headerCell);
    }
  
    // create data rows
    for (let i = 0; i < data.length; i++) {
      let row = table.insertRow();
      for (let key in data[i]) {
        let cell = row.insertCell();
        let cellText = document.createTextNode(data[i][key]);
        cell.appendChild(cellText);
      }
    }
  
    return table;
}

let table = createTableFromJSON(jsonData);

document.getElementById('items').appendChild(table);