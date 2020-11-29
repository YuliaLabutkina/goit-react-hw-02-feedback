import PropTypes from 'prop-types';
import Notification from '../Notification';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className={s.title}>Statistics</h2>
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <div>
          <p className={s.textItem}>Good: {good}</p>
          <p className={s.textItem}>Neutral: {neutral}</p>
          <p className={s.textItem}>Bad: {bad}</p>
          <p className={s.textItem}>Total: {total}</p>
          <p className={s.textItem}>Positive feedback: {positivePercentage}%</p>
        </div>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
