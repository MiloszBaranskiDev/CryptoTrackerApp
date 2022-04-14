import { useState, useEffect } from "react";
import GetSingleCryptoHistory from "utils/GetSingleCryptoHistory";

interface Props {
  name?: string;
  period: string;
}

const Chart: React.FC<Props> = ({ name, period }) => {
  const [history, updateHistory] = useState<number[]>();

  useEffect(() => {
    if (name !== undefined) {
      const loadCryptoHistory = async () => {
        updateHistory(
          await GetSingleCryptoHistory(
            name.toLowerCase().split(" ").join("-"),
            period
          )
        );
      };
      loadCryptoHistory();
    }
  }, [name, period]);

  // if (history) {
  //   history.forEach((item: any) => {
  //     console.log(item[1].toFixed(2));
  //   });
  // }

  return (
    <div>
      <p></p>
    </div>
  );
};

export default Chart;
