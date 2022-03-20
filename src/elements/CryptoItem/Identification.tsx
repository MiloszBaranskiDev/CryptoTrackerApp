import styled from "styled-components";

interface Props {
  symbol?: string;
  name?: string;
  icon?: string;
}

const StyledIdentification = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
  }
  .cryptoName {
    color: ${(props) => props.theme.colors.main};
    font-weight: 600;
  }
  .cryptoId {
    color: rgba(152, 152, 152, 0.7);
  }
`;

const Identification: React.FC<Props> = ({ symbol, name, icon }) => {
  return (
    <StyledIdentification>
      <img src={icon} alt={name} />
      <p className="cryptoName">{name}</p>
      <p className="cryptoId">{symbol}</p>
    </StyledIdentification>
  );
};

export default Identification;
