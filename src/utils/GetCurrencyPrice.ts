import GetNumberToPlainString from "./GetNumberToPlainString";
import GetPriceFraction from "./GetPriceFraction";

const GetCurrencyPrice = (price: number): number | string => {
  const digits: string[] = Array.from(String(price));
  const hasLetter: boolean = digits.some((letter) => letter === "e");

  return hasLetter ? GetNumberToPlainString(price) : GetPriceFraction(price);
};

export default GetCurrencyPrice;
