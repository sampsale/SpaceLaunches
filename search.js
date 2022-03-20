

function searchAgency() {
    let agency = document.getElementById('agency').value;
    console.log(agency)

    fetch(`https://lldev.thespacedevs.com/2.2.0/agencies/?search=${document.getElementById('agency').value}`, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (responseJson) {
            data = responseJson;
            displayAgency(data)
        })
        .catch(function (error) {
            console.log(error)
        })

}


async function searchSpacecraft() {

    fetch(`https://lldev.thespacedevs.com/2.2.0/spacecraft/?search=${document.getElementById('spacecraft').value}`, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (responseJson) {
            craftdata = responseJson;
            displaySpaceCraft(craftdata)
        })
        .catch(function (error) {
            console.log(error)
        })


}

function displaySpaceCraft(data) {
    console.log(data.results)
    let launchers = '<div class="table-responsive m-0 p-0"><table class="table table-dark">';
    launchers = launchers + `<tr><th scope="col">Launcher</th><th>Description</th></tr>`
    data.results.forEach(element => {
        console.log(element)
        launchers = launchers + `<tr><td>${element.name}</td><td>${element.description}</td></tr>`
    });

    launchers = launchers + '</table></div>'
    document.getElementById('spacecrafttable').innerHTML = launchers
}

function displayAgency(data) {
    console.log(data.results[0])
    document.getElementById('agencies').innerHTML = `<p> Agency: ${data.results[0].name}</p><p>Founding date: ${data.results[0].founding_year} </p><p>Launchers: ${data.results[0].launchers} </p><p>Admin: ${data.results[0].administrator} </p><img class='searchImage' src=${data.results[0].image_url}></img>`
}