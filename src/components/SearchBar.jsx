import { useCallback, useRef } from 'react';
import { usePageContext } from '../context/PageContext';
import { throttle } from 'lodash';
import IconSearch from '../../icons/icon-search.svg';

export default function SearchBar() {
  const { setSearchedQuery } = usePageContext();

  const throttledSetQuery = useRef(
    throttle((value) => {
      setSearchedQuery(value);
    }, 3000),
  );

  const handleChange = useCallback((e) => {
    throttledSetQuery.current(e.target.value);
  }, []);

  return (
    <div className="search-bar">
      <label className="search-bar-label">
        <img className="search-icon" src={IconSearch} alt="Icon Search" />
        <input
          className="search-input"
          type="text"
          onChange={handleChange}
          placeholder="Search for a country..."
        />
      </label>
    </div>
  );
}
