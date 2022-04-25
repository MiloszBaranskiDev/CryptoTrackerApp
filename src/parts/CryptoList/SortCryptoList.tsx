import StyledSelect from "elements/layout/StyledSelect";
import { useEffect } from "react";
import styled from "styled-components";
import GetSortedCryptoList from "utils/GetSortedCryptoList";

interface Props {
  cryptoList?: object[];
  currency: string;
  currentSortBy: string;
  setCurrentSortBy: (arg0: string) => void;
  setSortedCryptoList: (arg0: object[]) => void;
}

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

const SortCryptoList: React.FC<Props> = ({
  cryptoList,
  currency,
  currentSortBy,
  setSortedCryptoList,
  setCurrentSortBy,
}) => {
  const sortOptions: string[] = [
    "Default",
    "Price descending",
    "Price ascending",
    "1h change descending",
    "1h change ascending",
    "1d change descending",
    "1d change ascending",
    "7d change descending",
    "7d change ascending",
    "Alphabetically descending",
    "Alphabetically ascending",
  ];

  const sortHandler: (arg0: string) => void = (sortBy: string) => {
    setCurrentSortBy(sortBy);
    setSortedCryptoList(GetSortedCryptoList(cryptoList!, sortBy));
  };

  useEffect(() => {
    sortHandler(currentSortBy);
  }, [currency]);

  return (
    <StyledSort>
      <p>Sort by:</p>
      <StyledSelect
        defaultValue={currentSortBy}
        onChange={(e) => sortHandler(e.target.value)}
      >
        {sortOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </StyledSelect>
    </StyledSort>
  );
};

export default SortCryptoList;
