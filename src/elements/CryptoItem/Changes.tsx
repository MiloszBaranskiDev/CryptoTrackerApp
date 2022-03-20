import styled from "styled-components";

interface Props {
  changeHour?: number;
  changeDay?: number;
  changeWeek?: number;
}

const StyledChanges = styled.div`
  display: flex;
  align-items: center;
  p {
    color: white;
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
    let className;
    const firstLetter = String(change!).charAt(0);

    if (firstLetter === "-") {
      className = "changeMinus";
    } else if (firstLetter !== "-" && change! > 0) {
      className = "changePlus";
    }

    return className;
  };

  return (
    <StyledChanges>
      <p className={checkChange(changeHour)}>{changeHour}%</p>
      <p className={checkChange(changeDay)}>{changeDay}%</p>
      <p className={checkChange(changeWeek)}>{changeWeek}%</p>
    </StyledChanges>
  );
};

export default Changes;
