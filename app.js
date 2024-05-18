// ------------------------------- date and time-------

// ----------------- time variable ------------
let showTime = document.querySelector('.time')
// let m = document.querySelector('.minutes')
// let s = document.querySelector('.seconds')
// let p = document.querySelector('.pm')
// ------------------ end time variables ---------------

//-------------------- date variable --------------------
let showDate = document.querySelector('.date')
// let dy = document.querySelector('.day')
// let y = document.querySelector('.year')
// let mn = document.querySelector('.month')

//-------------------- end  date variable --------------------


function showtimeAndDate() {
      let time = new Date()

      //----------------- time coding ------------------------
      let hours = time.getHours()
      // console.log(hours);
      let minutes = time.getMinutes()
      let seconds = time.getSeconds()

      //----------- CONDITIONS --------------
      let pm = hours > 12 ? 'PM' : 'AM';
      hours = hours > 12 ? hours - 12 : hours;
      hours = hours == '00' ? 12 : hours
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      // h.innerHTML = hours
      // m.innerHTML = minutes
      // s.innerHTML = seconds
      // pm.innerHTML = pm
      showTime.innerHTML = `${hours} : ${minutes} ${seconds} - ${pm}`
      // ------------- end time ----------------------

      // -------------------- date coding -------------

      let daysName = [
            '', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
      ]
      let monthsName = [
            'Janurary', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'
      ]
      let date = time.getDate()
      let days = time.getDay()
      days = daysName[days]
      let month = time.getMonth()
      month = monthsName[month]
      let year = time.getFullYear()

      // dt.innerHTML = date
      // dy.innerHTML = days
      // mn.innerHTML = month
      // y.innerHTML = year
      showDate.innerHTML = `${date}-${month}-${year}`
      // ----------------------- end date ----------------------
      
      setTimeout(showtimeAndDate, 1000)
}

showtimeAndDate()
// ----------------------------------------- end date and time------------------------------


// ------------------------------------------- wheather aapi ---------------------------------

let form = document.querySelector('#wheatherForm')
let section2 = document.querySelector('.container')
let search = document.querySelector('.bx-search')


let cityinput = document.querySelector('#input')
let cityname = document.querySelector('.cityName')
let currentCityTemp = document.querySelector('.temp')
let currentCityWheatherType = document.querySelector('.dayType')
let currentCityHumidity = document.querySelector('.humidity')
let currentCityWindSpeed = document.querySelector('.wind')
// let weekDay1 = document.querySelector('')
// let weekDay2 = document.querySelector('')
// let weekDay3 = document.querySelector('')
// let weekDay4 = document.querySelector('')
// let weekDay5 = document.querySelector('')
// let weekDay6 = document.querySelector('')

// '''''''''''''''''''''''''''''''''''''''''''''[''''''''''''''''']
// let userName = prompt('Enter you name :');
// userName = userName.toLocaleUpperCase()
// alert(`Welcome! ${userName}`)
search.addEventListener("click", function() {
      section2.scrollIntoView({ behavior: "smooth" });
});

form.addEventListener('submit', (event) => {

      event.preventDefault();

      // -------------------------------  CITY NAME ----------------------------------
      
      let city = cityinput.value;
      console.log(city);
      cityname.innerHTML = city
      
      // -------------- API ----------------------
      
      const APIKey = '750b9f971f71bda4db3e75d05c60f22d';
      const APIKey2 = '1f3c4c2b3c4eb23fd91aa203c8be8e70'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;
      const url2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey2}`
      const main = document.querySelector('.container')
      main.classList.add('hide');

      // fetch(url2)
      // .then(response => response.json())
      // .then(data => {
      //       // console.log(data.list[1]);
      // })
      fetch(url)
            .then(response => response.json())
            .then(data => {
                  console.log(data); // Check the data in the console

                  // const weatherDiv = document.getElementById('#wheathertype');

                  // Extract relevant data
                  let temp = data.main.temp;
                  let weatherDescription = data.weather[0].description;
                  const humidity = data.main.humidity;
                  const windSpeed = data.wind.speed;

                  console.log(weatherDescription);
                  temp = Math.floor(temp - 273)
                  // weatherDescription = weatherDescription.
                  currentCityTemp.innerHTML = `${temp} ℃`
                  currentCityHumidity.innerHTML = `${humidity} %` 
                  currentCityWindSpeed.innerHTML = `${windSpeed} km/h`
                  currentCityWheatherType.innerHTML = weatherDescription.toUpperCase()

                  // Create HTML content
      //        const weatherContent = `<p>Temperature: ${(temp - 273.15).toFixed(2)}°C</p>
      //       <p>Weather: ${weatherDescription}</p>
      //       <p>Humidity: ${humidity}%</p>
      //       <p>Wind Speed: ${windSpeed} m/s</p>
      //   `;
            

                  // Insert the content into the weatherDiv
                  // weatherDiv.innerHTML = weatherContent;
            })
            .catch(error => {
                  console.error('Error fetching the weather data:', error);
            });


})

//https://api.https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=750b9f971f71bda4db3e75d05c60f22d.org/data/3.0/onecall?lat=33.44&lon=-94.04&appid=750b9f971f71bda4db3e75d05c60f22d