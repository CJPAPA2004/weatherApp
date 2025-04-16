// http://api.weatherapi.com/v1/current.json?key=f17e1e1f614444769d620313251404&q=Austin&aqi=no

const temperatureField = document.querySelector('.temp p'); // Select the <p> inside .temp
const locationField = document.querySelector('.time_location p'); // First <p> (location)
const dateandTimeField = document.querySelectorAll('.time_location p')[1]; // Second <p> (date and time)
const conditionField = document.querySelector('.condition p'); // Select the <p> inside .condition
const searchField = document.querySelector('.search_area');
const form = document.querySelector('form');




form.addEventListener('submit', searchForLocation)

let target = 'Dallas'

const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=f17e1e1f614444769d620313251404&q=${targetLocation}&aqi=no`

    const res = await fetch(url)

    const data = await res.json()

    console.log(data)

    let locationName = data.location.name
    let time = data.location.localtime
    let temp = data.current.temp_f
    let condition = data.current.condition.text

    updateDetails(temp, locationName, time, condition);
} 

function updateDetails(temp, locationName, time, condition){
    temperatureField.innerText = temp;
    locationField.innerText = locationName;
    dateandTimeField.innerText = time;
    conditionField.innerText = condition;
}

function searchForLocation(e){
    e.preventDefault()
    target = searchField.value

    fetchResults(target)
}

fetchResults(target)