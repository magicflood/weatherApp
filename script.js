let form = document.getElementById("form");
let incity = document.getElementById("city");
let bod = document.querySelector("body")
let a = document.getElementById("box")

a.style.display = "none"


let weatherCity = async (city) => {
    let data = await getData(city);
    console.log(data);

    if (city === data.name) {
        a.style.display = "block"
        a.innerHTML = `
        <h4>${city}</h4>
        <p class="state">${data.weather[0].main}</p>
         <p>TEMP <span>${data.main.temp}</span> °C</p>
        `;
    } else {
        a.innerHTML = `
         <h4>Shahar nimini to'g'ri yozing!</h4>
        `;
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let cityName = form.city.value.trim();
    form.reset();
    weatherCity(cityName);
    bod.appendChild(a);
});





