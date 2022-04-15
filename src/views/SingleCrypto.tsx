import { useState, useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import StyledWrapper from "elements/layout/StyledWrapper";
import GetSingleCryptoDetails from "utils/GetSingleCryptoDetails";
import Info from "parts/SingleCrypto/Info";
import PeriodSwitcher from "parts/SingleCrypto/PeriodSwitcher";
import Chart from "parts/SingleCrypto/Chart";

interface Props {
  currency: string;
}

const SingleCrypto: React.FC<Props> = ({ currency }) => {
  const { id } = useParams() as { id: string };
  const [cryptoDetails, setCryptoDetails] = useState<object>({});
  const [period, updatePeriod] = useState<string>("24h");

  useEffect(() => {
    const loadCryptoDetails = async () => {
      setCryptoDetails(await GetSingleCryptoDetails(id!, currency));
    };
    loadCryptoDetails();
  }, [id, currency]);

  return (
    <StyledWrapper>
      <Info cryptoDetails={cryptoDetails} currency={currency} />
      <PeriodSwitcher updatePeriod={updatePeriod} />
      <Chart id={id} period={period} />
    </StyledWrapper>
  );
};

export default SingleCrypto;
