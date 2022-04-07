import styled from "styled-components";
import Identification from "elements/SingleCrypto/Identification";
import Links from "elements/SingleCrypto/Links";
import Price from "elements/SingleCrypto/Price";

interface Props {
  cryptoDetails: {
    symbol?: string;
    name?: string;
    icon?: string;
    twitterUrl?: string;
    websiteUrl?: string;
    price?: number;
  };
  currency: string;
}

const StyledInfo = styled.div`
  padding: 35px 0;
  display: flex;
  flex-wrap: wrap;
`;

const Info: React.FC<Props> = ({ cryptoDetails, currency }) => {
  return (
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
      <Price price={cryptoDetails.price} currency={currency} />
    </StyledInfo>
  );
};

export default Info;
