import StyledSelect from "elements/layout/StyledSelect";

interface Props {
  updateCurrency: (arg0: string) => void;
}

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
