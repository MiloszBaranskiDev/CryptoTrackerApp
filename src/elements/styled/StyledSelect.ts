import styled from "styled-components";

const StyledSelect = styled.select`
  cursor: pointer;
  outline: none;
  border-color: transparent !important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  font-weight: 600;
  transition: color 0.3s;
  color: ${(props) => props.theme.colors.typography};
  font-size: 16px;
  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
  option {
    color: ${(props) => props.theme.colors.main};
    font-weight: 600;
  }
`;

export default StyledSelect;
