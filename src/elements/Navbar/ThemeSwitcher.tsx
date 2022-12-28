import styled from "styled-components";

interface IProps {
  isDarkMode: boolean;
  updateIsDarkMode: (arg0: boolean) => void;
}

interface IStyledProps {
  isDarkMode: boolean;
}

const ThemeSwitcher: React.FC<IProps> = ({ isDarkMode, updateIsDarkMode }) => {
  return (
    <StyledButton
      isDarkMode={isDarkMode}
      onClick={() => updateIsDarkMode(!isDarkMode)}
    >
      <i className={`${isDarkMode ? "fas fa-moon" : "fas fa-sun"}`}></i>
    </StyledButton>
  );
};

export default ThemeSwitcher;

const StyledButton = styled.button<IStyledProps>`
  cursor: pointer;
  margin: 0 20px;
  padding: 4px;
  border-radius: 20px;
  width: 50px;
  height: 25px;
  border: none;
  position: relative;
  background-color: ${(props) => props.theme.colors.main};
  i {
    background-color: white;
    color: #292929;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${(props) => (props.isDarkMode ? "4px" : "calc(100% - 22px)")};
    transition: right 0.3s;
  }
`;
