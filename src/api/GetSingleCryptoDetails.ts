import { ECurrencySymbol } from "enums/ECurrencySymbol";

const GetSingleCryptoDetails = async (
  id: string,
  currencySymbol: ECurrencySymbol
) => {
  try {
    const singleCryptoDetails: Response = await fetch(
      `https://api.coinstats.app/public/v1/coins/${id}?currency=${currencySymbol}`
    );
    const singleCryptoJson = await singleCryptoDetails.json();
    return singleCryptoJson.coin;
  } catch (err) {
    console.error(err);
  }
};

export default GetSingleCryptoDetails;
