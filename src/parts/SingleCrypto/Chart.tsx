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
import styled, { useTheme } from "styled-components";

import GetSingleCryptoHistory from "api/GetSingleCryptoHistory";
import GetSingleCryptoDetails from "api/GetSingleCryptoDetails";

import { EPeriod } from "enums/EPeriod";
import { ECurrencySymbol } from "enums/ECurrencySymbol";
import { ITheme } from "interfaces/ITheme";

import GetNumberToPlainString from "utils/GetNumberToPlainString";

import Loader from "elements/Loader";
import ApiError from "elements/ApiError";

interface IProps {
  currencySymbol: ECurrencySymbol;
  id: string;
  period: EPeriod;
}

interface IChartData {
  labels: number[];
  datasets: [
    {
      borderWidth: number;
      borderColor: string;
      backgroundColor: string;
      data: number[];
    }
  ];
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

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

const Chart: React.FC<IProps> = ({ currencySymbol, id, period }) => {
  const theme = useTheme() as ITheme;
  const [history, setHistory] = useState<number[]>();
  const [usdInCurrentCurrency, setUsdToCurrentCurrency] = useState<number>();
  const [data, setData] = useState<IChartData>(null as any);
  const [loading, setLoading] = useState<boolean>(true);
  const [showError, setShowError] = useState<boolean>(false);

  const historicalPrices: string[] = [];

  const loadCryptoHistory: VoidFunction = async () => {
    setLoading(true);
    const loadedCryptoHistory = await GetSingleCryptoHistory(id, period);
    if (loadedCryptoHistory === undefined || loadedCryptoHistory === null) {
      setShowError(true);
    } else {
      setHistory(loadedCryptoHistory.map((obj: number[]) => obj[1]));
    }
    setLoading(false);
  };

  useEffect(() => {
    new Promise<{ price: number }>((resolve) => {
      resolve(GetSingleCryptoDetails("tether", currencySymbol));
    }).then((r) => setUsdToCurrentCurrency(r.price));
  }, [currencySymbol]);

  // fix error about memory leak
  // eslint-disable-next-line
  const [didMount, setDidMount] = useState<boolean>(false);
  useEffect(() => {
    setDidMount(true);
    if (id !== undefined) {
      loadCryptoHistory();
    }
    return () => setDidMount(false);
    // eslint-disable-next-line
  }, [id, period, currencySymbol]);

  useEffect(() => {
    if (history) {
      historicalPrices.length = 0;
      history.forEach((price: number) => {
        historicalPrices.push(
          currencySymbol === ECurrencySymbol.usd
            ? GetNumberToPlainString(price)
            : GetNumberToPlainString(price * usdInCurrentCurrency!)
        );
      });

      setData({
        labels: historicalPrices as any,
        datasets: [
          {
            borderWidth: 1,
            borderColor: theme.colors.main,
            backgroundColor: theme.colors.main,
            data: historicalPrices as any,
          },
        ],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, usdInCurrentCurrency]);

  return (
    <StyledChart>
      {loading && <Loader />}
      {!loading && showError ? <ApiError /> : null}
      {!loading && !showError ? (
        <>{data !== null && <Line options={options} data={data} />}</>
      ) : null}
    </StyledChart>
  );
};

export default Chart;

const StyledChart = styled.div`
  padding: 25px 0 160px 0;
`;
