import { useDispatch } from 'react-redux/es/exports';
import { findChat } from 'redux/actions';

import s from './Filter.module.scss';

const Filter = ({ value }) => {
  const dispatch = useDispatch();

  const handleInputChange = e => {
    e.preventDefault();
    const { value } = e.currentTarget;
    dispatch(findChat(value));
  };

  return (
    <div className={s.filterWrapper}>
      <input
        className={s.filterInput}
        id="filter-input"
        value={value}
        type="text"
        name="filter"
        title="Find chat"
        placeholder="Search or start new chat"
        required
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Filter;
