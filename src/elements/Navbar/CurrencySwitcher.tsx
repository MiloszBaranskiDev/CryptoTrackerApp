import StyledSelect from "elements/styled/StyledSelect";

import { ECurrencySymbol } from "enums/ECurrencySymbol";

interface IProps {
  updateCurrencySymbol: (arg0: ECurrencySymbol) => void;
}

const CurrencySwitcher: React.FC<IProps> = ({ updateCurrencySymbol }) => {
  return (
    <StyledSelect
      onChange={(e) => updateCurrencySymbol(e.target.value as ECurrencySymbol)}
    >
      {(Object.keys(ECurrencySymbol) as (keyof typeof ECurrencySymbol)[]).map(
        (symbol) => (
          <option key={ECurrencySymbol[symbol]} value={ECurrencySymbol[symbol]}>
            {ECurrencySymbol[symbol]}
          </option>
        )
      )}
    </StyledSelect>
  );
};

export default CurrencySwitcher;
