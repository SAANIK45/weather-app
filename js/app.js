//Get the api and call the function
const loadData = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url = `
    http://api.openweathermap.org/data/2.5/weather?q=${searchText}&APPID=d4a66b9266cda3c0aca81ab849bc4d0d
    `
    if(searchText.length == 0){
        const error = document.getElementById('error-message');
        error.style.display = 'block';
    }else{
        try{
            fetch(url)
            .then(res => res.json())
            .then(data => getData(data))
        }
        catch(error){
            console.log(error);
        }
       
    }
    searchField.value = ' ';
}
//get the data from function
const getData = (data) =>{
    const city = data.name;
    //convert kelvin degree to celcius 
    const kelvinDegree = data.main.temp;
    const calculateTemp = kelvinDegree - 273.15;
    const temp = calculateTemp.toFixed(2);
    const lead = data.weather[0].main;
    const img = data.weather[0].icon;
    //get the container to append data
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.textContent = ' ';
    const weatherDiv = document.createElement('div');
    weatherDiv.classList = 'weather-detail';
    weatherDiv.innerHTML = `
        <img src="http://openweathermap.org/img/wn/${img}@2x.png" alt="">
        <h1>${city}</h1>
        <h3><span>${temp}</span>&deg;C</h3>
        <h1 class="lead">${lead}</h1>
    `
    weatherContainer.appendChild(weatherDiv);
}