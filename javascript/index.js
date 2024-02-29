//alert("hello!!!");
//this function update city's date and time as soon page load and also update time every one second 
function updateCityTime() {
  let newyorkCityElement = document.querySelector("#newyorkCity");
  if (newyorkCityElement) {
    let newyorkDateElement = newyorkCityElement.querySelector(".date");
    let newyorkTimeElement = newyorkCityElement.querySelector(".time");

    let newyorkTimeZone = moment().tz("America/New_York");
    //console.log(newyorkTimeZone);
    newyorkDateElement.innerHTML = newyorkTimeZone.format("MMMM Do YYYY");
    newyorkTimeElement.innerHTML = newyorkTimeZone.format("HH:mm:ss [<small>]A[</small>]");
  }
  //london  city
  let londonCityElement = document.querySelector("#londonCity");
  if (londonCityElement) {
    let londonDateElement = londonCityElement.querySelector(".date");
    let londonTimeElement = londonCityElement.querySelector(".time");

    let londonTimeZone = moment().tz("Europe/London");
    //console.log(londonTimeZone);
    londonDateElement.innerHTML = londonTimeZone.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTimeZone.format("HH:mm:ss [<small>]A[</small>]");
  }
  //tokyo city
  let tokyoCityElement = document.querySelector("#tokyoCity");
  if (tokyoCityElement) {
    let tokyoDateElement = tokyoCityElement.querySelector(".date");
    let tokyoTimeElement = tokyoCityElement.querySelector(".time");

    let tokyoTimeZone = moment().tz("Asia/Tokyo");
    //console.log(tokyoTimeZone);
    tokyoDateElement.innerHTML = tokyoTimeZone.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTimeZone.format("HH:mm:ss [<small>]A[</small>]");

  }
  //dubai city
  let dubaiCityElement = document.querySelector("#dubaiCity");
  if (dubaiCityElement) {
    let dubaiDateElement = dubaiCityElement.querySelector(".date");
    let dubaiTimeElement = dubaiCityElement.querySelector(".time");

    let dubaiTimeZone = moment().tz("Asia/Dubai");
    //console.log(dubaiTimeZone);
    dubaiDateElement.innerHTML = dubaiTimeZone.format("MMMM Do YYYY");
    dubaiTimeElement.innerHTML = dubaiTimeZone.format("HH:mm:ss [<small>]A[</small>]");
  }
}


//this function get the time zone of selected city and show the update current time and date
function showSelectedCityDateAndTime(event) {
  //console.log(event.target.value);
  let timeZone = event.target.value;
  if (timeZone === "current") {
    timeZone = moment.tz.guess();
  }
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let citytime = moment().tz(timeZone);
  //console.log(citytime);
  let cityListElement = document.querySelector("#cityList");
  cityListElement.innerHTML = `  
  <div class="city" >
            <div>
              <h2>
                ${cityName}
              </h2>
              <div class="date">${citytime.format("MMMM D YYYY")}</div>
            </div>

            <div class="time">${citytime.format("HH:mm:ss")} <small>${citytime.format("A")}</small></div>
          </div>    
          <a href="/">Back to All Cities</a>      
  `
};

updateCityTime();
setInterval(updateCityTime, 1000);

let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", showSelectedCityDateAndTime);
