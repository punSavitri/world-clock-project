//alert("hello!!!");
function updateCityTime() {
  let chicagoCityElement = document.querySelector("#chicagoCity");
  let chicagoDateElement = chicagoCityElement.querySelector(".date");
  let chicagoTimeElement = chicagoCityElement.querySelector(".time");

  let chicagoTimeZone = moment().tz("America/Chicago");
  //console.log(chicagoTimeZone);
  chicagoDateElement.innerHTML = chicagoTimeZone.format("MMMM Do YYYY");
  chicagoTimeElement.innerHTML = chicagoTimeZone.format("HH:mm:ss[<small>]A[</small>]");

  //hongkong city
  let hongkongCityElement = document.querySelector("#hongkongCity");
  let hongkongDateElement = hongkongCityElement.querySelector(".date");
  let hongkongTimeElement = hongkongCityElement.querySelector(".time");

  let hongkongTimeZone = moment().tz("Asia/Hong_Kong");
  //console.log(hongkongTimeZone);
  hongkongDateElement.innerHTML = hongkongTimeZone.format("MMMM Do YYYY");
  hongkongTimeElement.innerHTML = hongkongTimeZone.format("HH:mm:ss[<small>]A[</small>]");

}
updateCityTime();
setInterval(updateCityTime, 1000);
