//alert("hello!!!");
function updateCityTime() {
  let chicagoCityElement = document.querySelector("#chicagoCity");
  if (chicagoCityElement) {
    let chicagoDateElement = chicagoCityElement.querySelector(".date");
    let chicagoTimeElement = chicagoCityElement.querySelector(".time");

    let chicagoTimeZone = moment().tz("America/Chicago");
    //console.log(chicagoTimeZone);
    chicagoDateElement.innerHTML = chicagoTimeZone.format("MMMM Do YYYY");
    chicagoTimeElement.innerHTML = chicagoTimeZone.format("HH:mm:ss:SS[<small>]A[</small>]");
  }


  //hongkong city
  let hongkongCityElement = document.querySelector("#hongkongCity");
  if (hongkongCityElement) {
    let hongkongDateElement = hongkongCityElement.querySelector(".date");
    let hongkongTimeElement = hongkongCityElement.querySelector(".time");

    let hongkongTimeZone = moment().tz("Asia/Hong_Kong");
    //console.log(hongkongTimeZone);
    hongkongDateElement.innerHTML = hongkongTimeZone.format("MMMM Do YYYY");
    hongkongTimeElement.innerHTML = hongkongTimeZone.format("HH:mm:ss:SS[<small>]A[</small>]");

  }

}


//this function update the city date and time
function updateCity(event) {
  //console.log(event.target.value);
  let timeZone = event.target.value;
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

            <div class="time">${citytime.format("HH:mm:ss")}<small>${citytime.format("A")}</small></div>
          </div>          
  `

};
updateCityTime();
setInterval(updateCityTime, 1000);


let citiesSelectElement = document.querySelector("#cities");
citiesSelectElement.addEventListener("change", updateCity);
