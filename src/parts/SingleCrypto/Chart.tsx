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
import styled, { useTheme } from "styled-components";

interface Props {
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

const Chart: React.FC<Props> = ({ id, period }) => {
  const [history, updateHistory] = useState<number[]>();
  const theme: any = useTheme();

  const historicalPrices: number[] = [];

  useEffect(() => {
    if (id !== undefined) {
      const loadCryptoHistory = async () => {
        updateHistory(await GetSingleCryptoHistory(id, period));
      };
      loadCryptoHistory();
    }
  }, [id, period]);

  if (history) {
    history.forEach((item: any) => {
      historicalPrices.push(item[1].toFixed(2));
    });
  }

  const options = {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 1.5,
      },
    },
  };

  const data = {
    labels: historicalPrices,
    datasets: [
      {
        borderWidth: 1,
        borderColor: theme.colors.main,
        backgroundColor: theme.colors.main,
        data: historicalPrices,
      },
    ],
  };

  return (
    <StyledChart>
      <Line options={options} data={data} />
    </StyledChart>
  );
};

export default Chart;
