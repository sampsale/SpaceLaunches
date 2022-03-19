
// developement api
// https://lldev.thespacedevs.com/2.2.0/launch/upcoming/

//production api
// https://ll.thespacedevs.com/2.2.0/launch/upcoming
fetch(`https://lldev.thespacedevs.com/2.2.0/launch/upcoming/`, { mode: 'cors' })
    .then(function (response) {
        return response.json();
    })
    .then(function (responseJson) {
        data = responseJson;

        nextTenLaunches(data.results)
    })
    .catch(function (error) {
        console.log(error)
    })




function nextTenLaunches(data) {
    console.log(data)
    let launches = '<div class="table-responsive m-0 p-0"><table class="table table-dark ">';
    launches = launches + '<thead><tr><th scope="col">Mission</th><th scope="col">Vehicle</th><th scope="col">Description</th><th scope="col">Launch</th><th scope="col">Image</th></tr></thead>'



    data.forEach((element, index) => {
        console.log(element)
        let date = new Date(element.window_start)
        let unixdate = Math.floor(date.getTime())

        let rocket = element.name.substr(0, element.name.indexOf('|'));
        let mission = element.name.substr(element.name.indexOf('|') + 1);
        let description = ""
        if (element.mission != null ) {
            description = element.mission.description
        }
        console.log(mission)
        console.log(rocket)

        launches = launches + `<tr><td>${mission}</td><td>${rocket}</td><td>${description}</td><td><div id='countdown${index}'></td><td><img class='tableimage' src=${element.image}></img></td><tr>`
        countDown(unixdate, index)
    });


    launches = launches + '</table></div>'
    document.getElementById('nextten').innerHTML = launches

}

function countDown(unixdate, index) {
    let x = setInterval(function () {
        let now = new Date().getTime();
        let distance = unixdate - now

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);



        document.getElementById(`countdown${index}`).innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById(`countdown${index}`).innerHTML = "LAUNCHED!";
        }

    }, 1000);

}

// fetch(`https://ll.thespacedevs.com/2.2.0/launch/?mode=list&search=SpaceX` , {mode: 'cors'})
// .then(function (response) {
//     return response.json();
// })
// .then(function (responseJson) {
//     data = responseJson;
//     console.log(data)
// })
// .catch(function (error) {
//     console.log(error)
// })