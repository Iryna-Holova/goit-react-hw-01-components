import { StatistickListItem, StatisticsLabel, StatisticsValue } from "./StatisticksItem.styled";
import PropTypes from "prop-types";

export const StatisticsItem = ({ label, percentage }) => {
  return (
      <StatistickListItem backGround={getRandomColor()}>
          <StatisticsLabel>{label}</StatisticsLabel>
          <StatisticsValue>{percentage}%</StatisticsValue>
    </StatistickListItem>
  );
};

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};