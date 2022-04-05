import styled from "styled-components";
import Identification from "elements/SingleCrypto/Identification";

interface Props {
  cryptoDetails: {
    symbol?: string;
    name?: string;
    icon?: string;
  };
}

const StyledInfo = styled.div`
  padding: 35px 0;
`;

const Info: React.FC<Props> = ({ cryptoDetails }) => {
  return (
    <StyledInfo>
      <Identification
        symbol={cryptoDetails.symbol}
        name={cryptoDetails.name}
        icon={cryptoDetails.icon}
      />
    </StyledInfo>
  );
};

export default Info;
