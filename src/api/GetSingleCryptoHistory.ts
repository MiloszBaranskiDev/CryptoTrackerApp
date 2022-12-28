import { EPeriod } from "enums/EPeriod";

const GetSingleCryptoHistory = async (id: string, period: EPeriod) => {
  try {
    const singleCryptoHistory: Response = await fetch(
      `https://api.coinstats.app/public/v1/charts?period=${period}&coinId=${id}`
    );
    const singleCryptoHistoryJson = await singleCryptoHistory.json();
    return singleCryptoHistoryJson.chart;
  } catch (err) {
    console.error(err);
  }
};

export default GetSingleCryptoHistory;
