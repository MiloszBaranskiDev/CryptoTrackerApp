import { ESortOption } from "enums/ESortOption";
import { ICryptoItem } from "interfaces/ICryptoItem";

const GetSortedCryptoList = (
  cryptoList: ICryptoItem[],
  sortBy: ESortOption
) => {
  let sortedCryptoList: ICryptoItem[];

  switch (sortBy) {
    case ESortOption.priceDescending:
      sortedCryptoList = cryptoList?.sort((a, b) =>
        a.price > b.price ? 1 : -1
      );
      break;
    case ESortOption.priceAscending:
      sortedCryptoList = cryptoList?.sort((a, b) =>
        a.price < b.price ? 1 : -1
      );
      break;
    case ESortOption.hourDescending:
      sortedCryptoList = cryptoList?.sort((a, b) =>
        a.priceChange1h > b.priceChange1h ? 1 : -1
      );
      break;
    case ESortOption.hourAscending:
      sortedCryptoList = cryptoList?.sort((a, b) =>
        a.priceChange1h < b.priceChange1h ? 1 : -1
      );
      break;
    case ESortOption.dayDescending:
      sortedCryptoList = cryptoList?.sort((a, b) =>
        a.priceChange1d > b.priceChange1d ? 1 : -1
      );
      break;
    case ESortOption.dayAscending:
      sortedCryptoList = cryptoList?.sort((a, b) =>
        a.priceChange1d < b.priceChange1d ? 1 : -1
      );
      break;
    case ESortOption.weekDescending:
      sortedCryptoList = cryptoList?.sort((a, b) =>
        a.priceChange1w > b.priceChange1w ? 1 : -1
      );
      break;
    case ESortOption.weekAscending:
      sortedCryptoList = cryptoList?.sort((a, b) =>
        a.priceChange1w < b.priceChange1w ? 1 : -1
      );
      break;
    case ESortOption.alphabeticallyDescending:
      sortedCryptoList = cryptoList?.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      );
      break;
    case ESortOption.alphabeticallyAscending:
      sortedCryptoList = cryptoList?.sort((a, b) =>
        a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
      );
      break;
    default:
      sortedCryptoList = cryptoList;
      break;
  }

  return sortedCryptoList!;
};

export default GetSortedCryptoList;
