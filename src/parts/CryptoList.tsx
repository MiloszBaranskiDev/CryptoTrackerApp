import { useState, useEffect } from "react";
import GetCryptoList from "utils/GetCryptoList";
import CryptoItem from "parts/CryptoItem";
import Wrapper from "elements/layout/Wrapper";
import styled from "styled-components";

interface Props {
  currency: string;
}

const StyledCryptoList = styled.div`
  margin: 80px 0;
`;

const CryptoList: React.FC<Props> = ({ currency }) => {
  const [cryptoList, setCryptoList] = useState<object[]>();

  useEffect(() => {
    const loadCrypto = async () => {
      setCryptoList(await GetCryptoList(currency));
    };
    loadCrypto();
  }, [currency]);

  return (
    <StyledCryptoList>
      <Wrapper>
        {cryptoList?.map((crypto: { [key: string]: any }) => (
          <CryptoItem crypto={crypto} currency={currency} key={crypto.symbol} />
        ))}
      </Wrapper>
    </StyledCryptoList>
  );
};

export default CryptoList;
