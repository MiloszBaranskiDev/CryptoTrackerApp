import styled from "styled-components";
import StyledWrapper from "elements/StyledWrapper";
import Logo from "elements/Navbar/Logo";
import CurrencySwitcher from "elements/Navbar/CurrencySwitcher";
import Icons from "elements/Navbar/Icons";
import ThemeSwitcher from "elements/Navbar/ThemeSwitcher";

interface Props {
  updateCurrency: (arg0: string) => void;
  updateIsDarkMode: (arg0: boolean) => void;
  isDarkMode: boolean;
}

const StyledNavbar = styled.div`
  background-color: ${(props) => props.theme.colors.bgc};
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.colors.main};
  padding: 24px 0;
  .navbarWrapper {
    display: flex;
    align-items: center;
  }
`;

const Navbar: React.FC<Props> = ({
  updateCurrency,
  updateIsDarkMode,
  isDarkMode,
}) => {
  return (
    <StyledNavbar>
      <StyledWrapper className="navbarWrapper">
        <Logo />
        <CurrencySwitcher updateCurrency={updateCurrency} />
        <ThemeSwitcher
          isDarkMode={isDarkMode}
          updateIsDarkMode={updateIsDarkMode}
        />
        <Icons />
      </StyledWrapper>
    </StyledNavbar>
  );
};

export default Navbar;
