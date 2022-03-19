

fetch(`http://api.open-notify.org/iss-now.json`, { mode: 'cors' })
    .then(function (response) {
        return response.json();
    })
    .then(function (responseJson) {
        data = responseJson;
        initMap(data.iss_position)
    })
    .catch(function (error) {
        console.log(error)
    })



function initMap(location) {
    const iss = { lat: parseInt(location.latitude), lng: parseInt(location.longitude) };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: iss,
    });
    const marker = new google.maps.Marker({
        position: iss,
        map: map,
    });
}