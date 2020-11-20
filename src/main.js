import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './currencyexchange';

function getCurrencyExchange(response)  {
  if (response.result === "Success")  {
    console.log("Success");
    $("#result").html(`Your currency in JPY is: ${response.conversion_rates.JPY}`);
  } else {
    console.log(response);
    $("#result1").html(`there was an erro: ${response['error-type']}`);
  }
}


$(document).ready(function () {
  $('#currencyExchange')
}
















$(document).ready(function() {
  $('#TODO').submit(function(event) {
    event.preventDefault();
  });
});