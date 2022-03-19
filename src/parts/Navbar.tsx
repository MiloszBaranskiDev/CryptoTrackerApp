import styled from "styled-components";
import Logo from "elements/navbar/Logo";
import Currency from "elements/navbar/Currency";
import Icons from "elements/navbar/Icons";
import Wrapper from "elements/layout/Wrapper";

const StyledNavbar = styled.div`
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.colors.main};
  padding: 20px 0;
`;

const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      <Wrapper>
        <Logo />
        <Currency />
        <Icons />
      </Wrapper>
    </StyledNavbar>
  );
};

export default Navbar;
