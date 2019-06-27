import React, { useRef } from 'react';

const Form = ({onSubmit}) => {
  const fRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (fRef.current.value !== '' && fRef.current.value !== ' ') {
      const newItem = {
        name: fRef.current.value,
        type: 'prod',
        quantity: 1
      }
    
      onSubmit(newItem);
    }

    document.getElementById('newItem').reset();
    fRef.current.value = ''
  }

  return (
    <form id="newItem" className="newitem" auto-complete="off" onSubmit={handleSubmit}>
      <label htmlFor="itemName" className="line-label">New Item</label>
      <div className="addnew">
        <input ref={fRef} type="text" name="item" id="itemName" className="form-component inpt" placeholder="What do you need?" />
        <input type="submit" value="Add" className="form-component btn" />
      </div>
    </form>
  );
};

export default Form;
