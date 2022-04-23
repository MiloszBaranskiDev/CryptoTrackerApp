const GetCryptoList = async (currency: string) => {
  const cryptoListData = await fetch(
    `https://api.coinstats.app/public/v1/coins?skip=0&limit=0&currency=${currency}`
  );

  const cryptoListJson = await cryptoListData.json();

  return cryptoListJson.coins;
};

export default GetCryptoList;
