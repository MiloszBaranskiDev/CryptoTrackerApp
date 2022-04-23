import styled from "styled-components";
import GetPriceFraction from "utils/GetPriceFraction";

interface Props {
  price?: number;
  currencySymbol: string;
}

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

const Price: React.FC<Props> = ({ price, currencySymbol }) => {
  return (
    <StyledPrice>
      <span>Price</span>
      {GetPriceFraction(price!)}
      {currencySymbol}
    </StyledPrice>
  );
};

export default Price;
