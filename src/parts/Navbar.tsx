import styled from "styled-components";
import Wrapper from "elements/layout/Wrapper";
import Logo from "elements/Navbar/Logo";
import Currency from "elements/Navbar/Currency";
import Icons from "elements/Navbar/Icons";
import Theme from "elements/Navbar/Theme";

interface Props {
  updateCurrency: (arg0: string) => void;
}

const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.colors.gray};
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.colors.main};
  padding: 24px 0;
  .navbarWrapper {
    display: flex;
    align-items: center;
  }
`;

const Navbar: React.FC<Props> = ({ updateCurrency }) => {
  return (
    <StyledNavbar>
      <Wrapper className="navbarWrapper">
        <Logo />
        <Currency updateCurrency={updateCurrency} />
        <Theme />
        <Icons />
      </Wrapper>
    </StyledNavbar>
  );
};

export default Navbar;
