import { useState, useEffect } from "react";
import GetSingleCryptoHistory from "utils/GetSingleCryptoHistory";

interface Props {
  name?: string;
}

const Chart: React.FC<Props> = ({ name }) => {
  const [period, updatePeriod] = useState<string>("24h");
  const [history, updateHistory] = useState<object>({});

  useEffect(() => {
    const loadCryptoHistory = async () => {
      updateHistory(await GetSingleCryptoHistory(name!, period));
    };
    loadCryptoHistory();
  }, [period]);

  console.log(history);

  return (
    <div>
      <p> 24h, 1w, 1m, 3m, 6m, 1y, all</p>
    </div>
  );
};

export default Chart;
