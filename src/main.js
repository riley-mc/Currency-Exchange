import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { CurrencyExchange } from './js/currencyexchange.js';

function getCurrencyExchange(response, conversionCurrency, usdCurrency)  {
  if (response.result === "Success")  {
    let conversionNumber = response.conversion_rates[conversionCurrency];
    $("#result").html(`Your currency in JPY is: ${response.conversion_rates.JPY}`);
  } else {
    $("#result1").html(`there was an error: ${response['error-type']}`);
  }
}


async function apiCall(conversionCurrency, usdCurrency) {
  const response = await CurrencyExchange.getCurrencyExchange();
  getCurrencyExchange(response, conversionCurrency, usdCurrency);
}

$("#submit").submit(function(event) {
  event.preventDefault();
  const usdCurrency = $("#usd").val();
  const currency = $("#convertTo").val();
  apiCall(currency, usdCurrency);
  $("#currency").html(currency);
});