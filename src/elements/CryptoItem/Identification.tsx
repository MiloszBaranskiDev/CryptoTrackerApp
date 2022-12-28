import styled from "styled-components";

interface IProps {
  symbol: string;
  name: string;
  icon: string;
}

const Identification: React.FC<IProps> = ({ symbol, name, icon }) => {
  return (
    <StyledIdentification>
      <img src={icon} alt={name} />
      <p className="cryptoName">{name}</p>
      <p className="cryptoId">{symbol}</p>
    </StyledIdentification>
  );
};

export default Identification;

const StyledIdentification = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 100%;
  margin-bottom: 20px;
  text-align: center;
  @media (min-width: 500px) and (max-width: 1259px) {
    flex-direction: column;
    *:not(:last-child) {
      margin-bottom: 6px !important;
    }
  }
  img {
    width: 40px;
    height: 40px;
  }
  .cryptoName {
    color: ${(props) => props.theme.colors.main};
    font-weight: 600;
    margin: 0 auto;
    padding: 0 10px;
  }
  .cryptoId {
    color: ${(props) => props.theme.colors.typography_light};
  }
`;
