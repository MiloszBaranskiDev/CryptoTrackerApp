import styled from "styled-components";

const ApiError: React.FC = () => {
  return (
    <StyledApiError>
      An error occurred while loading data from API. Please try refreshing the
      page.
    </StyledApiError>
  );
};

export default ApiError;

const StyledApiError = styled.p`
  padding: 40px 0;
  text-align: center;
  flex-basis: 100%;
  color: ${(props) => props.theme.colors.red};
`;
