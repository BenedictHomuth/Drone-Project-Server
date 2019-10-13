
async function getData() {
    const response = await fetch('/api');
    const data = await response.json();

    //Create a table from item
    function createTable() {
        var myTableDiv = document.getElementById("myTable");

        var table = document.createElement('table');
        table.border = '1';

        //Table Head
        var tableRow = document.createElement('tr');
        var theadArr = ['Latitude','Longitude', 'Time'];
        for(var i = 0; i < theadArr.length; i++){
            var tHead = document.createElement('th');    
            tHead.appendChild(document.createTextNode(theadArr[i]));
            tableRow.appendChild(tHead);
        }
        table.appendChild(tableRow);
        //Table Head end

        var tableBody = document.createElement('tbody');
        table.appendChild(tableBody);

        for (item of data) {
            var tr = document.createElement('tr');
            tableBody.appendChild(tr);

            var tdOne = document.createElement("td");
            var tdTwo = document.createElement("td");
            var tdThree = document.createElement("td");

            tdOne.width = '220';
            tdTwo.width = '220';
            tdThree.width = '220';

            tdOne.appendChild(document.createTextNode(`${item.lat}`));
            tdTwo.appendChild(document.createTextNode(` ${item.lon}`));

            const dateString = new Date(item.timestamp).toLocaleString();
            tdThree.appendChild(document.createTextNode(dateString));

            tr.appendChild(tdOne);
            tr.appendChild(tdTwo);
            tr.appendChild(tdThree);
        }
        myTableDiv.appendChild(table);
    }
    createTable();
}
getData();
