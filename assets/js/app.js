let cityForm = document.querySelector('.cityForm');
let city = document.querySelector('.city');
let dataContainer = document.querySelector('.data-from-api');
let apiURL = 'https://api.weatherapi.com/v1/current.json?key=91665f0529b242f791e135755210611&q=';

cityForm.addEventListener('submit', (event) => {

    let cityName = city.value;
    let newApiURL = apiURL + cityName;

    fetch(newApiURL)
        .then((response) => {
            return response.json();
        })

        .then((data) => {

            let view = ''
            view += `<div class="main-info">`;

            //icon
            view += `<div class="icon">`;
            view += `<img src="${data.current.condition.icon}" alt="${data.current.condition.text}">`;
            view += `</div>`;

            //temp
            view += `<div class="temp">`;
            view += `${data.current.temp_c} <sup>o</sup>C`;
            view += `</div >`;
            view += `<div class="info">`;
            view += `<p>Humidity: <b>${data.current.humidity}%</b></p>`;
            view += `<p>Wind: <b>${data.current.wind_kph} km/h</b></p>`;
            view += `<p>Feels like: <b>${data.current.feelslike_c} <sup>o</sup>C</b></p>`;
            view += `</div >`;
            dataContainer.innerHTML = view;
        })

    // disable refresh page
    event.preventDefault();
})