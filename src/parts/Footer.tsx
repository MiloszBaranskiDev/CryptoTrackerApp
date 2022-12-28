import styled from "styled-components";

import StyledWrapper from "elements/styled/StyledWrapper";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <p>
          Made with
          <a
            href="https://documenter.getpostman.com/view/5734027/RzZ6Hzr3?version=latest"
            target="_blank"
            rel="noopener noreferrer"
          >
            CoinStats API
          </a>
        </p>
        <p>The app is only informative and does not persuade to invest.</p>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  padding: 24px 0;
  background-color: ${(props) => props.theme.colors.bgc};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  p {
    text-align: center;
    color: ${(props) => props.theme.colors.typography};
    a {
      margin-left: 6px;
      color: inherit;
    }
    &:first-child {
      margin-bottom: 6px;
    }
  }
`;
