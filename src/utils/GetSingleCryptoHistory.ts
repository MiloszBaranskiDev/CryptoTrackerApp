const GetSingleCryptoHistory = async (id: string, period: string) => {
  const singleCryptoHistory = await fetch(
    `https://api.coinstats.app/public/v1/charts?period=${period}&coinId=${id}`
  );

  const singleCryptoHistoryJson = await singleCryptoHistory.json();

  return singleCryptoHistoryJson.chart;
};

export default GetSingleCryptoHistory;
