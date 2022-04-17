import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import GetSingleCryptoHistory from "utils/GetSingleCryptoHistory";
import GetSingleCryptoDetails from "utils/GetSingleCryptoDetails";
import styled, { useTheme } from "styled-components";

interface Props {
  currency: string;
  id: string;
  period: string;
}

const StyledChart = styled.div`
  padding: 25px 0 80px 0;
`;

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const Chart: React.FC<Props> = ({ currency, id, period }) => {
  const [history, setHistory] = useState<number[]>();
  const [usdInCurrentCurrency, setUsdToCurrentCurrency] = useState<number>();
  const [data, setData] = useState<any>(null);
  const theme: any = useTheme();
  const historicalPrices: number[] = [];

  const options = {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 1.65,
      },
    },
  };

  useEffect(() => {
    new Promise<{ price: number }>((resolve) => {
      resolve(GetSingleCryptoDetails("tether", currency));
    }).then((r) => setUsdToCurrentCurrency(r.price));
  }, [currency]);

  useEffect(() => {
    if (id !== undefined) {
      const loadCryptoHistory = async () => {
        setHistory(await GetSingleCryptoHistory(id, period));
      };
      loadCryptoHistory();
    }
  }, [id, period, currency]);

  useEffect(() => {
    if (history) {
      historicalPrices.length = 0;
      history.forEach((item: any) => {
        const historicalPrice: number = item[1].toFixed(2);
        if (currency === "USD") {
          historicalPrices.push(historicalPrice);
        } else {
          const fixedHistoricalPrice: any =
            historicalPrice * usdInCurrentCurrency!;
          historicalPrices.push(fixedHistoricalPrice.toFixed(2));
        }
      });

      setData({
        labels: historicalPrices,
        datasets: [
          {
            borderWidth: 1,
            borderColor: theme.colors.main,
            backgroundColor: theme.colors.main,
            data: historicalPrices,
          },
        ],
      });
    }
  }, [history, usdInCurrentCurrency]);

  return (
    <StyledChart>
      {data !== null && <Line options={options} data={data} />}
    </StyledChart>
  );
};

export default Chart;
