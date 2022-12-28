import styled from "styled-components";

import Identification from "elements/SingleCrypto/Identification";
import Links from "elements/SingleCrypto/Links";
import Price from "elements/SingleCrypto/Price";

import { ECurrencySymbol } from "enums/ECurrencySymbol";
import { ICryptoDetails } from "interfaces/ICryptoDetails";

interface IProps {
  cryptoDetails: ICryptoDetails;
  currencySymbol: ECurrencySymbol;
}

const Info: React.FC<IProps> = ({ cryptoDetails, currencySymbol }) => {
  return (
    <>
      {cryptoDetails && (
        <>
          <StyledInfo>
            <Identification
              symbol={cryptoDetails.symbol}
              name={cryptoDetails.name}
              icon={cryptoDetails.icon}
            />
            <Links
              twitter={cryptoDetails.twitterUrl}
              website={cryptoDetails.websiteUrl}
            />
            <Price
              price={cryptoDetails.price}
              currencySymbol={currencySymbol}
            />
          </StyledInfo>
        </>
      )}
    </>
  );
};

export default Info;

const StyledInfo = styled.div`
  padding: 35px 0;
  display: flex;
  flex-wrap: wrap;
`;
