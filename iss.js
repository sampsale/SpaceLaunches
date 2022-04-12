


let token = config.GoogleApiKey;

var script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${token}&callback=fetchData`;
script.async = true;


function fetchData() {
    fetch(`http://api.open-notify.org/iss-now.json`, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (responseJson) {
            data = responseJson;
            console.log(data)
            initMap(data.iss_position)
        })
        .catch(function (error) {
            console.log(error)
        })

}



function initMap(location) {
    console.log(location)
    try {
        const iss = { lat: parseInt(location.latitude), lng: parseInt(location.longitude) };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 3,
            center: iss,
        });
        const marker = new google.maps.Marker({
            position: iss,
            map: map,
        });
    } catch(err){
        document.getElementById("map").innerHTML = "Error loading MAP, API-key might be expired or you don't have it if you got this from GitHub"
    }
   
}

document.head.appendChild(script);