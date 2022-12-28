import styled from "styled-components";

interface IProps {
  twitter?: string;
  website?: string;
}

const Links: React.FC<IProps> = ({ twitter, website }) => {
  return (
    <StyledIcons>
      {twitter && (
        <StyledIcon href={twitter} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </StyledIcon>
      )}
      {website && (
        <StyledIcon href={website} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-home"></i>
        </StyledIcon>
      )}
    </StyledIcons>
  );
};

export default Links;

const StyledIcons = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
  margin-left: auto;
`;
const StyledIcon = styled.a`
  color: ${(props) => props.theme.colors.typography};
  font-size: 30px;
  transition: color 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
  &:first-child {
    margin-right: 10px;
  }
`;
