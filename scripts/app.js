const form = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Forecast();
const wrapper = document.querySelector('.wrapper');

const updateUI = data => {

    const { cityDetails, weather} = data;

    // Update Template
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

};

form.addEventListener('submit', event => {
    event.preventDefault();

    // Get city
    const city = form.city.value.trim().toLowerCase();
    form.reset();

    // Update interface with the city
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));

    wrapper.classList.remove('glassempty');
    wrapper.classList.add('glass');
    localStorage.setItem('location', city);

});

if(localStorage.getItem('location')){
    forecast.updateCity(localStorage.getItem('location'))
        .then(data => updateUI(data))
        .catch(err => console.log(err));
        wrapper.classList.remove('glassempty');
        wrapper.classList.add('glass');

}