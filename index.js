 
function openLoginForm() {
    document.getElementById("loginModal").style.display = "block";
}

 
function closeLoginForm() {
    document.getElementById("loginModal").style.display = "none";
}

 
window.onclick = function(event) {
    var modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
 
async function fetchWeather() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=YOUR_API_KEY&units=metric');
        const data = await response.json();
        document.getElementById('weatherWidget').innerText = `Bengaluru: ${data.weather[0].description}, ${data.main.temp}°C`;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherWidget').innerText = `Could not retrieve weather data.`;
    }
}
 
window.onload = fetchWeather;
