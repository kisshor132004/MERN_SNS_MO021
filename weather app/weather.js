const api = {
    base: 'https://api.openweathermap.org/data/2.5/weather?',
    key: '14d73e357ba7b973963db285a1f84842'
}
 

const city = document.getElementById('city');
 

city.addEventListener('keypress', function(event){
    // console.log(event)
    if(event.key === 'Enter' ){
        getWeather(city.value);
       
    }
});
 

function getWeather(city){
    fetch(`${api.base}q=${city}&units=metric&appid=${api.key}`)
   .then(response => response.json())
   .then(data => {
        console.log(data);
        displaytemperatur(data);
        displaycountry(data);
        displayWeather(data);
    });
}


function displaycountry(data){
    const country = data.name;
    document.getElementById('country').innerText = country ;
};
function displayWeather(data){
    
    const weather = data.weather[0].main; 
    document.getElementById('weather').innerText = `${weather}🌥️` ;
};
function displaytemperatur(data){
    const temp = data.main.temp;
    document.getElementById('temp').innerText = `${temp}°C` ;
};

function displayarea(data){
    const area = data.sys.country;
    document.getElementById('area').innerText = `${area}°C` ;
};
// let backgroundimage;
// if ( discription.including ('clear')){
//     backgroundimage = url(/icon/cloud\ r.gif)
// }
// else( discription.including ('rain')){
//     backgroundimage = url(/icon/cloud\ r.gif)
// }







