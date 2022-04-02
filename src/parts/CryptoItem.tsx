import { Link } from "react-router-dom";
import styled from "styled-components";
import Price from "elements/CryptoItem/Price";
import Identyfication from "elements/CryptoItem/Identification";
import Changes from "elements/CryptoItem/Changes";

interface Props {
  crypto: {
    price?: number;
    symbol?: string;
    id?: string;
    name?: string;
    icon?: string;
    priceChange1h?: number;
    priceChange1d?: number;
    priceChange1w?: number;
  };
  currency: string;
}

const StyledCryptoItem = styled.div`
  flex-basis: 100%;
  background-color: ${(props) => props.theme.colors.bgc};
  margin-bottom: 20px;
  padding: 20px;
  color: ${(props) => props.theme.colors.typography};
  border-radius: 18px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border-color 0.3s;
  &:hover {
    border-color: ${(props) => props.theme.colors.main};
  }
  a {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    text-decoration: none;
    color: unset;
  }
  @media (min-width: 500px) {
    flex-basis: 49%;
    width: 49%;
  }
  @media (min-width: 768px) {
    flex-basis: 32%;
    width: 32%;
  }
  @media (min-width: 1260px) {
    flex-basis: 24%;
    width: 24%;
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
      <Link to={`/crypto/${crypto.id}`}>
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
      </Link>
    </StyledCryptoItem>
  );
};

export default CryptoItem;
