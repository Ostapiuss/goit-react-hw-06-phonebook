import { useDispatch } from 'react-redux';

import {
  changeFilter,
} from "../../store/contactSlice";

import './style.scss';

const Filter = () => {
  const dispatch = useDispatch();

  const onChangeFilter = (event) => {
    const { value: newSearchValue } = event.target;
    dispatch(changeFilter(newSearchValue));
  }

  return (
    <div className="filter">
      <label>Find Contacts by name</label>
      <input
        id="contact-search-field"
        type="text"
        name="search-field"
        className="filter__search-field"
        title="Filter Value"
        onChange={onChangeFilter}
      />
    </div>
  )
}

export default Filter;
