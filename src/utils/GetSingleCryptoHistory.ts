const GetSingleCryptoHistory = async (name: string, period: string) => {
  let singleCryptoHistory = await fetch(
    `https://api.coinstats.app/public/v1/charts?period=${period}&coinId=${name}`
  );

  let singleCryptoHistoryJson = await singleCryptoHistory.json();

  return singleCryptoHistoryJson.chart;
};

export default GetSingleCryptoHistory;
