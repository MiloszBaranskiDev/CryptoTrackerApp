import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "elements/layout/Wrapper";
import GetSingleCryptoDetails from "utils/GetSingleCryptoDetails";
import Info from "parts/SingleCrypto/Info";

interface Props {
  currency: string;
}

const SingleCrypto: React.FC<Props> = ({ currency }) => {
  const { id } = useParams();
  const [cryptoDetails, setCryptoDetails] = useState<object>({});

  useEffect(() => {
    const loadCryptoDetails = async () => {
      setCryptoDetails(await GetSingleCryptoDetails(id!, currency));
    };
    loadCryptoDetails();
  }, [id]);

  console.log(cryptoDetails);

  return (
    <Wrapper>
      <Info cryptoDetails={cryptoDetails} />
    </Wrapper>
  );
};

export default SingleCrypto;
