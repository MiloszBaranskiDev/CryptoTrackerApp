import { Link } from "react-router-dom";
import styled from "styled-components";

import Price from "elements/CryptoItem/Price";
import Identyfication from "elements/CryptoItem/Identification";
import Changes from "elements/CryptoItem/Changes";

import GetCurrencySign from "utils/GetCurrencySign";

import { ICryptoItem } from "interfaces/ICryptoItem";
import { ECurrencySymbol } from "enums/ECurrencySymbol";

interface IProps {
  crypto: ICryptoItem;
  currencySymbol: ECurrencySymbol;
}

const CryptoItem: React.FC<IProps> = ({ crypto, currencySymbol }) => {
  return (
    <StyledCryptoItem>
      <Link to={`/crypto/${crypto.id}`}>
        <Identyfication
          symbol={crypto.symbol}
          name={crypto.name}
          icon={crypto.icon}
        />
        <Price
          price={crypto.price}
          currencySymbol={GetCurrencySign(currencySymbol)}
        />
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

const StyledCryptoItem = styled.div`
  flex-basis: 100%;
  background-color: ${(props) => props.theme.colors.bgc};
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.typography};
  border-radius: 18px;
  a {
    border-radius: inherit;
    border: 2px solid transparent;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    text-decoration: none;
    color: unset;
    padding: 20px;
    transition: border-color 0.3s;
    &:hover {
      border-color: ${(props) => props.theme.colors.main};
    }
  }
  @media (min-width: 500px) {
    width: 49%;
    flex-basis: 49%;
  }
  @media (min-width: 768px) {
    width: 32%;
    flex-basis: 32%;
  }
  @media (min-width: 1260px) {
    width: 24%;
    flex-basis: 24%;
  }
`;
