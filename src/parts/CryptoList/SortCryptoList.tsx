import StyledSelect from "elements/layout/StyledSelect";
import styled from "styled-components";

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
    text-align: end;
  }
`;

const SortCryptoList: React.FC = () => {
  const sortOptions: string[] = [
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

  return (
    <StyledSort>
      <p>Sort by:</p>
      <StyledSelect>
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
