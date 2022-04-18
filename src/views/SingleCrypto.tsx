import { useState, useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import StyledWrapper from "elements/layout/StyledWrapper";
import GetSingleCryptoDetails from "utils/GetSingleCryptoDetails";
import Info from "parts/SingleCrypto/Info";
import PeriodSwitcher from "parts/SingleCrypto/PeriodSwitcher";
import Chart from "parts/SingleCrypto/Chart";
import Loader from "elements/Loader";

interface Props {
  currency: string;
}

const SingleCrypto: React.FC<Props> = ({ currency }) => {
  const { id } = useParams() as { id: string };
  const [cryptoDetails, setCryptoDetails] = useState<object>({});
  const [period, updatePeriod] = useState<string>("24h");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const loadCryptoDetails = async () => {
      setCryptoDetails(await GetSingleCryptoDetails(id!, currency));
      setLoading(false);
    };
    loadCryptoDetails();
  }, [id, currency]);

  return (
    <StyledWrapper>
      {!loading ? (
        <>
          <Info cryptoDetails={cryptoDetails} currency={currency} />
          <PeriodSwitcher currentPeriod={period} updatePeriod={updatePeriod} />
          <Chart currency={currency} id={id} period={period} />
        </>
      ) : (
        <Loader />
      )}
    </StyledWrapper>
  );
};

export default SingleCrypto;
