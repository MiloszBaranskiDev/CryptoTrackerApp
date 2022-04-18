import { useState, useEffect } from "react";
import GetCryptoList from "utils/GetCryptoList";
import CryptoItem from "parts/CryptoList/CryptoItem";
import StyledWrapper from "elements/layout/StyledWrapper";
import SortCryptoList from "parts/CryptoList/SortCryptoList";
import Loader from "elements/Loader";
import styled from "styled-components";

interface Props {
  currency: string;
}

const StyledCryptoList = styled.div`
  padding: 80px 0;
  .cryptoListWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media (min-width: 500px) {
      justify-content: space-between;
    }
  }
`;

const CryptoList: React.FC<Props> = ({ currency }) => {
  const [cryptoList, setCryptoList] = useState<object[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const loadCrypto = async () => {
      setCryptoList(await GetCryptoList(currency));
      setLoading(false);
    };
    loadCrypto();
  }, [currency]);

  return (
    <StyledCryptoList>
      <StyledWrapper className="cryptoListWrapper">
        {!loading ? (
          <>
            <SortCryptoList />
            {cryptoList?.map((crypto: { [key: string]: any }) => (
              <CryptoItem crypto={crypto} currency={currency} key={crypto.id} />
            ))}
          </>
        ) : (
          <Loader />
        )}
      </StyledWrapper>
    </StyledCryptoList>
  );
};

export default CryptoList;
