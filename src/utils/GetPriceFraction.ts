const GetPriceFraction = (price: number) => {
  let priceFraction: string;

  if (price < 1) {
    const digits: string[] = Array.from(String(price));
    let indexToDisplay: number;
    let breakLoop: boolean = false;

    digits.forEach((digit: string, i: number) => {
      if (!breakLoop) {
        if (digit !== "0" && digit !== ".") {
          indexToDisplay = i + 2;
          breakLoop = !breakLoop;
        }
      }
    });

    priceFraction = price.toFixed(indexToDisplay!);
  } else {
    priceFraction = price.toFixed(2);
  }

  return priceFraction;
};

export default GetPriceFraction;
