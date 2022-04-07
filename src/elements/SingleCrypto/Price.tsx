import styled from "styled-components";
import GetCurrencySymbol from "utils/GetCurrencySymbol";

interface Props {
  price?: number;
  currency: string;
}

const StyledPrice = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.typography};
  margin-top: 20px;
  flex-basis: 100%;
`;

const Price: React.FC<Props> = ({ price, currency }) => {
  return (
    <StyledPrice>
      {price?.toFixed(2)}
      {GetCurrencySymbol(currency)}
    </StyledPrice>
  );
};

export default Price;
