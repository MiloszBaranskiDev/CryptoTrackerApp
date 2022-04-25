const GetCryptoList = async (currency: string) => {
  try {
    const cryptoListData: Response = await fetch(
      `https://api.coinstats.app/public/v1/coins?skip=0&limit=0&currency=${currency}`
    );
    const cryptoListJson: any = await cryptoListData.json();
    return cryptoListJson.coins;
  } catch (err) {
    console.error(err);
  }
};

export default GetCryptoList;
