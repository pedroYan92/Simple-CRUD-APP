import React from 'react';

function Form(props) {
  const { setModel, model, handleSubmit, actions } = props;

  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <h1>{actions}</h1>
      <label>Name</label>
      <input
        type='text'
        name='name'
        value={model.name}
        onChange={(e) => setModel({ ...model, name: e.target.value })}
      />
      <label>Email</label>
      <input
        type='text'
        name='email'
        value={model.email}
        onChange={(e) => setModel({ ...model, email: e.target.value })}
      />
      <label>Number</label>
      <input
        type='number'
        name='number'
        value={model.number}
        onChange={(e) => setModel({ ...model, number: e.target.value })}
      />
      <label>Address</label>
      <input
        type='text'
        name='address'
        value={model.address}
        onChange={(e) => setModel({ ...model, address: e.target.value })}
      />

      <button>Submit Costumer</button>
    </form>
  );
}

export default Form;
