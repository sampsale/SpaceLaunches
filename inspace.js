fetch(`http://api.open-notify.org/astros.json`, { mode: 'cors' })
    .then(function (response) {
        return response.json();
    })
    .then(function (responseJson) {
        data = responseJson;
        console.log(data)
        inSpace(data)
    })
    .catch(function (error) {
        console.log(error)
    })

function inSpace(data){
    console.log(data.people)
    document.getElementById('numberofpeople').innerHTML = data.number;

    let inspace = '<div class="table-responsive m-0 p-0"><table class="table table-dark ">';
    inspace = inspace + '<thead><tr><th scope="col">Name</th><th scope="col">Spacecraft</th></tr></thead>';

    data.people.forEach(element => {
        inspace = inspace + `<tr><td>${element.name}</td><td>${element.craft}</td>`
    });
    inspace = inspace + '</table></div>'

    document.getElementById("peopleinspace").innerHTML=inspace;
}