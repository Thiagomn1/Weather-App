const key = 'RgazGZZjLPFlQAod3TDLcgx8dBY4SJ6z';


// Get city key
const getCity = async city => {
    const baseurl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseurl + query);
    const data = await response.json();

    return data[0];

};

// Get weather info
const getWeather = async cityid => {
    const query = `http://dataservice.accuweather.com/currentconditions/v1/${cityid}?apikey=${key}`;

    const response = await fetch(query);
    const data = await response.json();

    return data[0];

};

// getCity('manchester')
//     .then(data => {
//         return getWeather(data.Key);
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err));

