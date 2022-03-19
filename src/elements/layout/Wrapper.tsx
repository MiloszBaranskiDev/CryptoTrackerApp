import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 90%;
  max-width: 1168px;
  margin: 0 auto;
`;

const Wrapper: React.FC = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
