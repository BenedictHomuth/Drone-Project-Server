getData();
        async function getData() {
            const response = await fetch('/api');
            const data = await response.json();

            //Create a table from item
              function createTable() {
                var myTableDiv = document.getElementById("myTable");
              
                var table = document.createElement('table');
                table.border = '1';

                //Start th
                var tableRow = document.createElement('tr');

                var tableHeadOne = document.createElement('th');
                var tableHeadTwo = document.createElement('th');
                var tableHeadThree = document.createElement('th');

                tableHeadOne.appendChild(document.createTextNode("Latitude"));
                tableHeadTwo.appendChild(document.createTextNode("Longitude"));
                tableHeadThree.appendChild(document.createTextNode("Time"));

                tableRow.appendChild(tableHeadOne);
                tableRow.appendChild(tableHeadTwo);
                tableRow.appendChild(tableHeadThree);
                
                table.appendChild(tableRow);           
                //End th

                var tableBody = document.createElement('tbody');
                table.appendChild(tableBody);

                for(item of data){
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