import { ECurrencySymbol } from "enums/ECurrencySymbol";

enum ESign {
  usd = "$",
  eur = "€",
  pln = "zł",
}

interface ICurrency {
  symbol: ECurrencySymbol;
  sign: ESign;
}

const currencies: ICurrency[] = [
  {
    symbol: ECurrencySymbol.usd,
    sign: ESign.usd,
  },
  {
    symbol: ECurrencySymbol.eur,
    sign: ESign.eur,
  },
  {
    symbol: ECurrencySymbol.pln,
    sign: ESign.pln,
  },
];

const GetCurrencySign = (currencySymbol: ECurrencySymbol) => {
  return currencies.find((currency) => currency.symbol === currencySymbol)!
    .sign!;
};

export default GetCurrencySign;
