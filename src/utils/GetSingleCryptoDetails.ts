const GetSingleCryptoDetails = async (id: string, currency: string) => {
  try {
    const singleCryptoDetails: Response = await fetch(
      `https://api.coinstats.app/public/v1/coins/${id}?currency=${currency}`
    );
    const singleCryptoJson: any = await singleCryptoDetails.json();
    return singleCryptoJson.coin;
  } catch (err) {
    console.error(err);
  }
};

export default GetSingleCryptoDetails;
