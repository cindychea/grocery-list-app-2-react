import React, { useRef } from 'react';

const FilterItem = ({ filter, id, onClick }) => {
  const { name, value } = filter;

  const filterRef = useRef();

  const handleClick = (e) => {
    const selectedFilter = filterRef.current.value;
    filterRef.current.checked = true;
    onClick(selectedFilter);
  };

  return (
    <li onClick={handleClick}>
      <input ref={filterRef} type="radio" name="category" value={ value } id={ id } />
      <label htmlFor="filter0">{ name }</label>
    </li>
  );
};

export default FilterItem;
