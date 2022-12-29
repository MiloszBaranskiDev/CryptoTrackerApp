import { useState, useEffect } from "react";
import styled from "styled-components";

import CryptoItem from "parts/CryptoList/CryptoItem";
import StyledWrapper from "elements/styled/StyledWrapper";
import SortCryptoList from "parts/CryptoList/SortCryptoList";
import Loader from "elements/Loader";
import ApiError from "elements/ApiError";

import { ICryptoItem } from "interfaces/ICryptoItem";
import { ESortOption } from "enums/ESortOption";
import { ECurrencySymbol } from "enums/ECurrencySymbol";

import GetCryptoList from "api/GetCryptoList";

interface IProps {
  currencySymbol: ECurrencySymbol;
  currentSortBy: ESortOption;
  setCurrentSortBy: (arg0: ESortOption) => void;
}

const CryptoList: React.FC<IProps> = ({
  currencySymbol,
  currentSortBy,
  setCurrentSortBy,
}) => {
  const [cryptoList, setCryptoList] = useState<object[]>();
  const [sortedCryptoList, setSortedCryptoList] = useState<ICryptoItem[]>();
  const [listToMap, setListToMap] = useState<object[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [showError, setShowError] = useState<boolean>(false);

  const loadCryptoList: VoidFunction = async () => {
    setLoading(true);
    const loadedCryptoList = await GetCryptoList(currencySymbol);
    if (loadedCryptoList === undefined || loadedCryptoList === null) {
      setShowError(true);
    } else {
      setCryptoList(await GetCryptoList(currencySymbol));
    }
    setLoading(false);
  };

  useEffect(() => {
    loadCryptoList();
    // eslint-disable-next-line
  }, [currencySymbol]);

  useEffect(() => {
    sortedCryptoList === undefined
      ? setListToMap(cryptoList!)
      : setListToMap(sortedCryptoList);
  }, [cryptoList, sortedCryptoList]);

  return (
    <StyledCryptoList>
      <StyledWrapper className="cryptoListWrapper">
        {loading && <Loader />}
        {!loading && showError ? <ApiError /> : null}
        {!loading && !showError ? (
          <>
            <SortCryptoList
              currencySymbol={currencySymbol}
              cryptoList={Object.assign([{}], cryptoList) as ICryptoItem[]}
              currentSortBy={currentSortBy}
              setCurrentSortBy={setCurrentSortBy}
              setSortedCryptoList={setSortedCryptoList}
            />
            {listToMap?.map((crypto: { [key: string]: any }) => (
              <CryptoItem
                crypto={{
                  price: crypto.price,
                  symbol: crypto.symbol,
                  id: crypto.id,
                  name: crypto.name,
                  icon: crypto.icon,
                  priceChange1h: crypto.priceChange1h,
                  priceChange1d: crypto.priceChange1d,
                  priceChange1w: crypto.priceChange1w,
                }}
                currencySymbol={currencySymbol}
                key={crypto.id}
              />
            ))}
          </>
        ) : null}
      </StyledWrapper>
    </StyledCryptoList>
  );
};

export default CryptoList;

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
