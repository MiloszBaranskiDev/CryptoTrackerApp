import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.h1`
  font-weight: 600;
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-right: auto;
  padding-right: 10px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.typography};
  }
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
    <StyledLogo>
      <NavLink to="/">
        <i className="fas fa-coins"></i>
        CryptoTracker
      </NavLink>
    </StyledLogo>
  );
};

export default Logo;
