import { useDispatch } from 'react-redux/es/exports';
import { findChat } from 'redux/actions';

import { ReactComponent as SearchIcon } from '../../img/search-img.svg';
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
        autoComplete="off"
        onChange={handleInputChange}
      />
      <SearchIcon className={s.searchIcon} width="14" />
    </div>
  );
};

export default Filter;
