import { useEffect } from "react";
import styled from "styled-components";

import StyledSelect from "elements/styled/StyledSelect";

import { ICryptoItem } from "interfaces/ICryptoItem";
import { ECurrencySymbol } from "enums/ECurrencySymbol";
import { ESortOption } from "enums/ESortOption";

import GetSortedCryptoList from "utils/GetSortedCryptoList";

interface IProps {
  cryptoList: ICryptoItem[];
  currencySymbol: ECurrencySymbol;
  currentSortBy: ESortOption;
  setCurrentSortBy: (arg0: ESortOption) => void;
  setSortedCryptoList: (arg0: ICryptoItem[]) => void;
}

const SortCryptoList: React.FC<IProps> = ({
  cryptoList,
  currencySymbol,
  currentSortBy,
  setSortedCryptoList,
  setCurrentSortBy,
}) => {
  const sortHandler: (arg0: ESortOption) => void = (sortBy: ESortOption) => {
    setCurrentSortBy(sortBy);
    setSortedCryptoList(GetSortedCryptoList(cryptoList, sortBy));
  };

  useEffect(() => {
    sortHandler(currentSortBy);
  }, [currencySymbol]);

  return (
    <StyledSort>
      <p>Sort by:</p>
      <StyledSelect
        defaultValue={currentSortBy}
        onChange={(e) => sortHandler(e.target.value as ESortOption)}
      >
        {(Object.keys(ESortOption) as (keyof typeof ESortOption)[]).map(
          (option) => (
            <option key={ESortOption[option]} value={ESortOption[option]}>
              {ESortOption[option]}
            </option>
          )
        )}
      </StyledSelect>
    </StyledSort>
  );
};

export default SortCryptoList;

const StyledSort = styled.div`
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 25px;
  p {
    color: ${(props) => props.theme.colors.typography};
    margin-bottom: 4px;
  }
  select {
    direction: rtl;
  }
`;
