import PropTypes from 'prop-types';

import { Title } from 'components/Title/Title';
import { StatisticsContainer, StatList, Item, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ title = '', stats }) => {
    return (
        
        <StatisticsContainer>
            {title && <Title text={title} />}

            <StatList>
                {stats.map(({ id, label, percentage }) => (
                    <Item key={id}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}</Percentage>
                    </Item>
                ))}
    
            </StatList>
        </StatisticsContainer>
    )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};