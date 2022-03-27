import styled from "styled-components";

const StyledLogo = styled.a`
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${(props) => props.theme.colors.typography};
  margin-right: auto;
  padding-right: 10px;
  @media (min-width: 500px) {
    padding-right: 30px;
    font-size: 22px;
  }
  i {
    margin-right: 8px;
    color: ${(props) => props.theme.colors.main};
  }
`;

const Logo: React.FC = () => {
  return (
    <StyledLogo href="/#">
      <i className="fas fa-coins"></i>
      CryptoTracker
    </StyledLogo>
  );
};

export default Logo;
