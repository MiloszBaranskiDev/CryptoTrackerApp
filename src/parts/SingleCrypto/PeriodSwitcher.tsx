import styled from "styled-components";

import { EPeriod } from "enums/EPeriod";

interface IProps {
  currentPeriod: EPeriod;
  updatePeriod: (arg0: EPeriod) => void;
}

const PeriodSwitcher: React.FC<IProps> = ({ currentPeriod, updatePeriod }) => {
  return (
    <StyledPeriodSwitcher>
      {(Object.keys(EPeriod) as (keyof typeof EPeriod)[]).map(
        (period, i: number) => (
          <StyledPeriod
            onClick={() => updatePeriod(EPeriod[period])}
            className={EPeriod[period] === currentPeriod ? "activePeriod" : ""}
            key={EPeriod[period]}
          >
            {EPeriod[period]}
          </StyledPeriod>
        )
      )}
    </StyledPeriodSwitcher>
  );
};

export default PeriodSwitcher;

const StyledPeriodSwitcher = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
`;

const StyledPeriod = styled.li`
  cursor: pointer;
  color: ${(props) => props.theme.colors.typography};
  padding: 8px;
  font-size: 18px;
  transition: color 0.3s;
  &.activePeriod {
    color: ${(props) => props.theme.colors.main};
    cursor: default;
  }
  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
  &:last-child {
    padding-right: 0;
  }
`;
