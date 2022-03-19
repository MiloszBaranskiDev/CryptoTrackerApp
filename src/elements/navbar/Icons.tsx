import styled from "styled-components";

const StyledIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  a {
    font-size: 22px;
    transition: color 0.3s;
    color: white;
    &:first-child {
      margin-right: 8px;
    }
    &:hover {
      color: ${(props) => props.theme.colors.main};
    }
  }
`;

const Icons: React.FC = () => {
  return (
    <StyledIcons>
      <a
        href="https://github.com/MiloszBaranskiDev/CryptoTrackerApp"
        target="_blank"
        rel="noreferrer"
        className="icon"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://miloszbaranskidev.github.io/my-website/"
        target="_blank"
        rel="noreferrer"
        className="icon"
      >
        <i className="fas fa-envelope"></i>
      </a>
    </StyledIcons>
  );
};

export default Icons;
