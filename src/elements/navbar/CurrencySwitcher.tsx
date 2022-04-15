import styled from "styled-components";

interface Props {
  updateCurrency: (arg0: string) => void;
}

const StyledSelect = styled.select`
  cursor: pointer;
  outline: none;
  border-color: transparent !important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  font-weight: 600;
  transition: color 0.3s;
  color: ${(props) => props.theme.colors.typography};
  font-size: 16px;
  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
  option {
    color: ${(props) => props.theme.colors.main};
    font-weight: 600;
  }
`;

const CurrencySwitcher: React.FC<Props> = ({ updateCurrency }) => {
  const currencies = ["USD", "EUR", "PLN"];

  return (
    <StyledSelect onChange={(e) => updateCurrency(e.target.value)}>
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </StyledSelect>
  );
};

export default CurrencySwitcher;
