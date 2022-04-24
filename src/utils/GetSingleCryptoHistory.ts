const GetSingleCryptoHistory = async (id: string, period: string) => {
  const singleCryptoHistory: Response = await fetch(
    `https://api.coinstats.app/public/v1/charts?period=${period}&coinId=${id}`
  );

  const singleCryptoHistoryJson: any = await singleCryptoHistory.json();

  return singleCryptoHistoryJson.chart;
};

export default GetSingleCryptoHistory;
