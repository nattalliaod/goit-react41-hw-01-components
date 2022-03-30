import PropTypes from 'prop-types';
import { TitleStatistic } from './Title.styled';

export const Title = ({ text }) => {
    return (
        <TitleStatistic>{text}</TitleStatistic>
    )
}

Title.propTypes = {
    text: PropTypes.string,
}