import styled from "styled-components";

interface Props {
  updatePeriod: (arg0: string) => void;
}

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
  &:hover {
    color: ${(props) => props.theme.colors.main};
  }
  &:last-child {
    padding-right: 0;
  }
`;

const PeriodSwitcher: React.FC<Props> = ({ updatePeriod }) => {
  const periods: string[] = ["24h", "1w", "1m", "3m", "6m", "1y", "all"];
  return (
    <StyledPeriodSwitcher>
      {periods.map((period: string) => (
        <StyledPeriod onClick={() => updatePeriod(period)} key={period}>
          {period}
        </StyledPeriod>
      ))}
    </StyledPeriodSwitcher>
  );
};

export default PeriodSwitcher;
