import styled from "styled-components";
import Price from "elements/CryptoItem/Price";
import Identyfication from "elements/CryptoItem/Identification";
import Changes from "elements/CryptoItem/Changes";

interface Props {
  crypto: {
    price?: number;
    symbol?: string;
    name?: string;
    icon?: string;
    priceChange1h?: number;
    priceChange1d?: number;
    priceChange1w?: number;
  };
  currency: string;
}

const StyledCryptoItem = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray};
  margin-bottom: 16px;
  padding: 20px;
  color: white;
  border-radius: 18px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border-color 0.3s;
  &:hover {
    border-color: ${(props) => props.theme.colors.main};
  }
`;

const CryptoItem: React.FC<Props> = ({ crypto, currency }) => {
  let currencySymbol: string;
  if (currency === "USD") {
    currencySymbol = "$";
  } else if (currency === "EUR") {
    currencySymbol = "€";
  } else {
    currencySymbol = "zł";
  }

  return (
    <StyledCryptoItem>
      <Identyfication
        symbol={crypto.symbol}
        name={crypto.name}
        icon={crypto.icon}
      />
      <Price price={crypto.price} currencySymbol={currencySymbol} />
      <Changes
        changeHour={crypto.priceChange1h}
        changeDay={crypto.priceChange1d}
        changeWeek={crypto.priceChange1w}
      />
    </StyledCryptoItem>
  );
};

export default CryptoItem;
