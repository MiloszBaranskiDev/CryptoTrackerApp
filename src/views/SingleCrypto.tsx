import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ApiError from "elements/ApiError";
import StyledWrapper from "elements/styled/StyledWrapper";
import Info from "parts/SingleCrypto/Info";
import PeriodSwitcher from "parts/SingleCrypto/PeriodSwitcher";
import Chart from "parts/SingleCrypto/Chart";
import Loader from "elements/Loader";

import { ECurrencySymbol } from "enums/ECurrencySymbol";
import { EPeriod } from "enums/EPeriod";
import { ICryptoDetails } from "interfaces/ICryptoDetails";

import GetSingleCryptoDetails from "api/GetSingleCryptoDetails";

interface IProps {
  currencySymbol: ECurrencySymbol;
}

const SingleCrypto: React.FC<IProps> = ({ currencySymbol }) => {
  const { id } = useParams() as { id: string };
  const [cryptoDetails, setCryptoDetails] = useState<ICryptoDetails>();
  const [period, updatePeriod] = useState<EPeriod>(EPeriod.day);
  const [loading, setLoading] = useState<boolean>(true);
  const [showError, setShowError] = useState<boolean>(false);

  const loadCryptoDetails = async () => {
    setLoading(true);
    const loadedDetails = await GetSingleCryptoDetails(id!, currencySymbol);
    if (loadedDetails === undefined || loadedDetails === null) {
      setShowError(true);
    } else {
      setCryptoDetails({
        symbol: loadedDetails.symbol,
        name: loadedDetails.name,
        icon: loadedDetails.icon,
        twitterUrl: loadedDetails.twitterUrl,
        websiteUrl: loadedDetails.websiteUrl,
        price: loadedDetails.price,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    loadCryptoDetails();
    // eslint-disable-next-line
  }, [id, currencySymbol]);

  return (
    <StyledWrapper>
      {loading && <Loader />}
      {!loading && showError ? <ApiError /> : null}
      {!loading && !showError ? (
        <>
          <Info
            cryptoDetails={cryptoDetails!}
            currencySymbol={currencySymbol}
          />
          <PeriodSwitcher currentPeriod={period} updatePeriod={updatePeriod} />
          <Chart currencySymbol={currencySymbol} id={id} period={period} />
        </>
      ) : null}
    </StyledWrapper>
  );
};

export default SingleCrypto;
