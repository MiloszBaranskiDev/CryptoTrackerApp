const GetNumberToPlainString = (num: number): string => {
  return ("" + +num).replace(
    /(-?)(\d*)\.?(\d*)e([+-]\d+)/,
    function (a, b, c, d, e) {
      return e < 0
        ? b + "0." + Array(1 - e - c.length).join(String(0)) + c + d
        : b + c + d + Array(e - d.length + 1).join(String(0));
    }
  );
};

export default GetNumberToPlainString;
