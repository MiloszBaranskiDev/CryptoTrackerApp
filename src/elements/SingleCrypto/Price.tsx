import styled from "styled-components";

import { ECurrencySymbol } from "enums/ECurrencySymbol";

import GetCurrencySign from "utils/GetCurrencySign";
import GetCurrencyPrice from "utils/GetCurrencyPrice";

interface IProps {
  price: number;
  currencySymbol: ECurrencySymbol;
}

const Price: React.FC<IProps> = ({ price, currencySymbol }) => {
  return (
    <StyledPrice>
      {GetCurrencyPrice(price)}
      {GetCurrencySign(currencySymbol)}
    </StyledPrice>
  );
};

export default Price;

const StyledPrice = styled.p`
  font-size: 34px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.typography};
  margin-top: 20px;
  flex-basis: 100%;
`;
