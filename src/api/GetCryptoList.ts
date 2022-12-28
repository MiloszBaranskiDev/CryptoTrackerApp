import { ECurrencySymbol } from "enums/ECurrencySymbol";

const GetCryptoList = async (currencySymbol: ECurrencySymbol) => {
  try {
    const cryptoListData: Response = await fetch(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=0&currency=${currencySymbol}`
    );
    const cryptoListJson = await cryptoListData.json();
    return cryptoListJson.coins;
  } catch (err) {
    console.error(err);
  }
};

export default GetCryptoList;
