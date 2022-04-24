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
import GetPriceFraction from "utils/GetPriceFraction";
import styled, { useTheme } from "styled-components";

interface Props {
  currency: string;
  id: string;
  period: string;
}

interface ChartData {
  labels: number[];
  datasets: [
    {
      borderWidth: number;
      borderColor: any;
      backgroundColor: any;
      data: number[];
    }
  ];
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
  const [data, setData] = useState<ChartData>(null as any);
  const theme: any = useTheme();
  const historicalPrices: number[] = [];

  const options: object = {
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
      const loadCryptoHistory: VoidFunction = async () => {
        setHistory(await GetSingleCryptoHistory(id, period));
      };
      loadCryptoHistory();
    }
  }, [id, period, currency]);

  useEffect(() => {
    if (history) {
      historicalPrices.length = 0;
      history.forEach((item: any) => {
        const historicalPrice: number = Number(GetPriceFraction(item[1]));
        if (currency === "USD") {
          historicalPrices.push(historicalPrice);
        } else {
          const fixedHistoricalPrice: number =
            historicalPrice * usdInCurrentCurrency!;
          historicalPrices.push(Number(GetPriceFraction(fixedHistoricalPrice)));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, usdInCurrentCurrency]);

  return (
    <StyledChart>
      {data !== null && <Line options={options} data={data} />}
    </StyledChart>
  );
};

export default Chart;
