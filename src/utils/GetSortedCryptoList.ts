interface Obj {
  price?: number;
  priceChange1h?: number;
  priceChange1d?: number;
  priceChange1w?: number;
  name?: string;
}

const GetSortedCryptoList = (cryptoList: object[], sortBy: string) => {
  let sortedCryptoList: object[];

  switch (sortBy) {
    case "Price descending":
      sortedCryptoList = cryptoList?.sort((a: Obj, b: Obj) =>
        a.price! > b.price! ? 1 : -1
      );
      break;
    case "Price ascending":
      sortedCryptoList = cryptoList?.sort((a: Obj, b: Obj) =>
        a.price! < b.price! ? 1 : -1
      );
      break;
    case "1h change descending":
      sortedCryptoList = cryptoList?.sort((a: Obj, b: Obj) =>
        a.priceChange1h! > b.priceChange1h! ? 1 : -1
      );
      break;
    case "1h change ascending":
      sortedCryptoList = cryptoList?.sort((a: Obj, b: Obj) =>
        a.priceChange1h! < b.priceChange1h! ? 1 : -1
      );
      break;
    case "1d change descending":
      sortedCryptoList = cryptoList?.sort((a: Obj, b: Obj) =>
        a.priceChange1d! > b.priceChange1d! ? 1 : -1
      );
      break;
    case "1d change ascending":
      sortedCryptoList = cryptoList?.sort((a: Obj, b: Obj) =>
        a.priceChange1d! < b.priceChange1d! ? 1 : -1
      );
      break;
    case "7d change descending":
      sortedCryptoList = cryptoList?.sort((a: Obj, b: Obj) =>
        a.priceChange1w! > b.priceChange1w! ? 1 : -1
      );
      break;
    case "7d change ascending":
      sortedCryptoList = cryptoList?.sort((a: Obj, b: Obj) =>
        a.priceChange1w! < b.priceChange1w! ? 1 : -1
      );
      break;
    case "Alphabetically descending":
      sortedCryptoList = cryptoList?.sort((a: Obj, b: Obj) =>
        a.name!.toLowerCase()! > b.name!.toLowerCase()! ? 1 : -1
      );
      break;
    case "Alphabetically ascending":
      sortedCryptoList = cryptoList?.sort((a: Obj, b: Obj) =>
        a.name!.toLowerCase()! < b.name!.toLowerCase()! ? 1 : -1
      );
      break;
    default:
      sortedCryptoList = cryptoList;
      break;
  }

  return sortedCryptoList!;
};

export default GetSortedCryptoList;
