const loadData = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const key = 'd4a66b9266cda3c0aca81ab849bc4d0d';
    const url = `
    http://api.openweathermap.org/data/2.5/weather?q=${searchText}&APPID=d4a66b9266cda3c0aca81ab849bc4d0d
    `
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}