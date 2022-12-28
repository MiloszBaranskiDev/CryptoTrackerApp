import styled from "styled-components";

import GetCurrencyPrice from "utils/GetCurrencyPrice";

interface IProps {
  price: number;
  currencySymbol: string;
}

const Price: React.FC<IProps> = ({ price, currencySymbol }) => {
  return (
    <StyledPrice>
      <span>Price</span>
      {GetCurrencyPrice(price)}
      {currencySymbol}
    </StyledPrice>
  );
};

export default Price;

const StyledPrice = styled.p`
  flex-basis: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 600;
  span {
    margin-bottom: 3px;
    color: ${(props) => props.theme.colors.typography_light};
    font-weight: 400;
  }
`;
