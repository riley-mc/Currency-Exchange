export default class CurrencyExchange {
  static async getCurrencyExchange()  {
    try {
      const currencyExchange = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      if (!currencyExchange.ok) {
        throw Error(currencyExchange.statusText);
      }
      return currencyExchange.json();
    } catch (error) {
      return error.message;
    }
  }
}