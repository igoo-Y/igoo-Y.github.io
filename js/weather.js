const API_KEY = "963e7ec8a8f35502687fb540d91dc2b1"

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}°C`;
    });

};

function onGeoError(){
    alert("위치정보 제공에 동의하면 현재 날씨를 확인할 수 있습니다.");
};

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);