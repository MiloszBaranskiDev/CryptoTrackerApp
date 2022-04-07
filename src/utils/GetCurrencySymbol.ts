const GetCurrencySymbol = (currency: string) => {
  let currencySymbol: string;

  if (currency === "USD") {
    currencySymbol = "$";
  } else if (currency === "EUR") {
    currencySymbol = "€";
  } else {
    currencySymbol = "zł";
  }

  return currencySymbol;
};

export default GetCurrencySymbol;
