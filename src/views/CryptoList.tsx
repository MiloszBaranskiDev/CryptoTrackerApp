import { useState, useEffect } from "react";
import GetCryptoList from "utils/GetCryptoList";
import CryptoItem from "parts/CryptoList/CryptoItem";
import StyledWrapper from "elements/layout/StyledWrapper";
import SortCryptoList from "parts/CryptoList/SortCryptoList";
import Loader from "elements/Loader";
import styled from "styled-components";

interface Props {
  currency: string;
  currentSortBy: string;
  setCurrentSortBy: (arg0: string) => void;
}

const StyledCryptoList = styled.div`
  padding: 40px 0 160px 0;
  .cryptoListWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media (min-width: 500px) {
      justify-content: space-between;
    }
  }
  @media (min-width: 768px) {
    padding-top: 80px;
  }
`;

const CryptoList: React.FC<Props> = ({
  currency,
  currentSortBy,
  setCurrentSortBy,
}) => {
  const [cryptoList, setCryptoList] = useState<object[]>();
  const [sortedCryptoList, setSortedCryptoList] = useState<object[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [listToMap, setListToMap] = useState<object[]>();

  useEffect(() => {
    setLoading(true);
    const loadCrypto: VoidFunction = async () => {
      setCryptoList(await GetCryptoList(currency));
      setLoading(false);
    };
    loadCrypto();
  }, [currency]);

  useEffect(() => {
    sortedCryptoList === undefined
      ? setListToMap(cryptoList!)
      : setListToMap(sortedCryptoList);
  }, [cryptoList, sortedCryptoList]);

  return (
    <StyledCryptoList>
      <StyledWrapper className="cryptoListWrapper">
        {!loading ? (
          <>
            <SortCryptoList
              currency={currency}
              cryptoList={Object.assign([{}], cryptoList!)}
              currentSortBy={currentSortBy}
              setCurrentSortBy={setCurrentSortBy}
              setSortedCryptoList={setSortedCryptoList}
            />
            {listToMap?.map((crypto: { [key: string]: any }) => (
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
