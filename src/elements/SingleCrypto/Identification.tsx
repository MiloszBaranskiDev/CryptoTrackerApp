import styled from "styled-components";

interface Props {
  symbol?: string;
  name?: string;
  icon?: string;
}

const StyledIdentification = styled.div`
  display: flex;
  align-items: center;
`;

const StyledColumn = styled.div`
  h1,
  h2 {
    margin-left: 12px;
  }
  h1 {
    font-size: 30px;
    color: ${(props) => props.theme.colors.typography};
  }
  h2 {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.typography_light};
  }
`;

const Identification: React.FC<Props> = ({ symbol, name, icon }) => {
  return (
    <StyledIdentification>
      <StyledColumn>
        <img src={icon} alt={name} />
      </StyledColumn>
      <StyledColumn>
        <h1>{name}</h1>
        <h2>{symbol}</h2>
      </StyledColumn>
    </StyledIdentification>
  );
};

export default Identification;
