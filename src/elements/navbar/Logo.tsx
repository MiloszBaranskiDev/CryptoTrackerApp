import styled from "styled-components";

const StyledLogo = styled.a`
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  font-size: 22px;
  color: white;
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
