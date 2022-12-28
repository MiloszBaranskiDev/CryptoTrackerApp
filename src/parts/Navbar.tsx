import styled from "styled-components";

import StyledWrapper from "elements/styled/StyledWrapper";
import Logo from "elements/Navbar/Logo";
import CurrencySwitcher from "elements/Navbar/CurrencySwitcher";
import Icons from "elements/Navbar/Icons";
import ThemeSwitcher from "elements/Navbar/ThemeSwitcher";

import { ECurrencySymbol } from "enums/ECurrencySymbol";

interface IProps {
  updateCurrencySymbol: (arg0: ECurrencySymbol) => void;
  updateIsDarkMode: (arg0: boolean) => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<IProps> = ({
  updateCurrencySymbol,
  updateIsDarkMode,
  isDarkMode,
}) => {
  return (
    <StyledNavbar>
      <StyledWrapper className="navbarWrapper">
        <Logo />
        <CurrencySwitcher updateCurrencySymbol={updateCurrencySymbol} />
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

const StyledNavbar = styled.div`
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.colors.bgc};
  border-bottom: 2px solid;
  border-color: ${(props) => props.theme.colors.main};
  padding: 24px 0;
  .navbarWrapper {
    display: flex;
    align-items: center;
  }
`;
