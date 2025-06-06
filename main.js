document.getElementById("checkweather").addEventListener("click", getWeather);

async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {

        const res = await fetch(url);
        const data = await res.json();

        if (res.ok) {
            document.getElementById("result").textContent = `Temp in ${data.name} is ${data.main.temp} °C`;
        } else {
            document.getElementById("result").textContent = "City not found.";
        }
        
    } catch (error) {
        console.error("Fetch Error:", error);
        document.getElementById("result").textContent = "An error occured, unable to fetch data.";
    }
}