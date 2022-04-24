import styled from "styled-components";

interface Props {
  changeHour?: number;
  changeDay?: number;
  changeWeek?: number;
}

const StyledChanges = styled.div`
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: ${(props) => props.theme.colors.typography};
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-weight: 600;
    span:first-child {
      margin-bottom: 4px;
      color: ${(props) => props.theme.colors.typography_light};
      font-weight: 400;
    }
    &:nth-child(2) {
      padding: 0 24px;
    }
  }
  .changeMinus {
    color: ${(props) => props.theme.colors.red};
  }
  .changePlus {
    color: ${(props) => props.theme.colors.green};
  }
`;

const Changes: React.FC<Props> = ({ changeHour, changeDay, changeWeek }) => {
  const checkChange = (change?: number) => {
    let className: string;
    const firstDigit: string = String(change!).charAt(0);

    if (firstDigit === "-") {
      className = "changeMinus";
    } else if (firstDigit !== "-" && change! > 0) {
      className = "changePlus";
    }

    return className!;
  };

  return (
    <StyledChanges>
      <p>
        <span>1h</span>
        <span className={checkChange(changeHour)}>{changeHour}%</span>
      </p>
      <p>
        <span>1d</span>
        <span className={checkChange(changeDay)}>{changeDay}%</span>
      </p>
      <p>
        <span>7d</span>
        <span className={checkChange(changeWeek)}>{changeWeek}%</span>
      </p>
    </StyledChanges>
  );
};

export default Changes;
