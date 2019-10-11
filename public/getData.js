getData();
        async function getData() {
            const response = await fetch('/api');
            const data = await response.json();

            //Keyword: DOM-Element
            //Here we make the send data visible to the user on the webpage
            for (item of data){
                const root = document.createElement('div');
                const geo = document.createElement('div');
                const date = document.createElement('div');
                root.append(geo,date);
                document

                geo.textContent = `lat: ${item.lat}°, lon: ${item.lon}°\n`;
                const dateString = new Date(item.timestamp).toLocaleString();
                date.textContent = `Date: ${dateString}`;

                root.append(geo,date);
                document.body.append(root);
            }
        }