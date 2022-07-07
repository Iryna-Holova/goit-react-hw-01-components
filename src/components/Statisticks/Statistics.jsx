import { StatisticsItem } from "components/StatisticksItem/StatisticksItem";
import { StatisticsCard, StatisticsList, StatisticsTitle } from "./Statisticks.styled";
import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsCard>
            {title && <StatisticsTitle>{title}</StatisticsTitle>}
            <StatisticsList>
                {stats.map(({id, label, percentage}) => (
                    <StatisticsItem
                        key={id}
                        label={label}
                        percentage={percentage}
                    />
                ))}
            </StatisticsList>
        </StatisticsCard>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};