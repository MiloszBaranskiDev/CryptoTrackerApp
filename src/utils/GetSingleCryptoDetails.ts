const GetSingleCryptoDetails = async (id: string, currency: string) => {
  let singleCryptoDetails = await fetch(
    `https://api.coinstats.app/public/v1/coins/${id}?currency=${currency}`
  );

  let singleCryptoJson = await singleCryptoDetails.json();

  return singleCryptoJson.coin;
};

export default GetSingleCryptoDetails;
