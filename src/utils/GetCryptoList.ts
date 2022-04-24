const GetCryptoList = async (currency: string) => {
  const cryptoListData: Response = await fetch(
    `https://api.coinstats.app/public/v1/coins?skip=0&limit=0&currency=${currency}`
  );

  const cryptoListJson: any = await cryptoListData.json();

  return cryptoListJson.coins;
};

export default GetCryptoList;
