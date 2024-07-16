let KEY = "1b70d5a3d8f7548af6551bc567d1ab55"

let getData = async (city) => {

    let bace = "https://api.openweathermap.org/data/2.5/weather"
    let query = `?q=${city}&units=metric&appid=${KEY}`
    let API = bace + query;
    let request = await fetch(API);
    let data = await request.json();

    return data;
}   