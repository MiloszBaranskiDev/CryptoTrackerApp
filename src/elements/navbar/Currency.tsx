import styled from "styled-components";

const Select = styled.select`
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  border-color: transparent !important;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 50px;
  font-weight: 600;
  transition: color 0.3s;
  color: white;
  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
  option {
    color: ${(props) => props.theme.colors.main};
    font-weight: 600;
  }
`;

const Currency: React.FC = () => {
  const currencies = ["usd", "eur", "pln"];

  return (
    <Select>
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </Select>
  );
};

export default Currency;
