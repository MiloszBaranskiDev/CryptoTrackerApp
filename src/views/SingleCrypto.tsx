import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "elements/layout/Wrapper";
import GetSingleCryptoDetails from "utils/GetSingleCryptoDetails";
import Info from "parts/SingleCrypto/Info";
import PeriodSwitcher from "parts/SingleCrypto/PeriodSwitcher";
import Chart from "parts/SingleCrypto/Chart";

interface Props {
  currency: string;
}

interface CryptoDetailsObject {
  name?: string;
}

const SingleCrypto: React.FC<Props> = ({ currency }) => {
  const { id } = useParams();
  const [cryptoDetails, setCryptoDetails] = useState<CryptoDetailsObject>({});
  const [period, updatePeriod] = useState<string>("24h");

  useEffect(() => {
    const loadCryptoDetails = async () => {
      setCryptoDetails(await GetSingleCryptoDetails(id!, currency));
    };
    loadCryptoDetails();
  }, [id, currency]);

  // console.log(cryptoDetails);

  return (
    <Wrapper>
      <Info cryptoDetails={cryptoDetails} currency={currency} />
      <PeriodSwitcher updatePeriod={updatePeriod} />
      <Chart name={cryptoDetails.name} period={period} />
    </Wrapper>
  );
};

export default SingleCrypto;
