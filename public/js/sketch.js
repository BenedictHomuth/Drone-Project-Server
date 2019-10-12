 //Here we geolocate the user
        //This is client-side code. 
        //Might implement the leaflet example from Shiffmann later
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async position => { 
            const lat = position.coords.latitude;
            document.getElementById('latitude').textContent = lat;
            const lon = position.coords.longitude;
            document.getElementById('longitude').textContent = lon;
           
            //Here I create an object which then is send back to the server.
            const data = {lat , lon};
            
            //This is an object that holds information about the data and structures of the package
            //More on that look at mozilla developer 'Using fetch'
            //https://developer.mozilla.org/de/docs/Web/API/Fetch_API/Using_Fetch
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            const response = await fetch('/api', options);
            const backMsg = await response.json();
            console.log(backMsg);
            });
        } else {
            console.log('geolocation not available');
        }    