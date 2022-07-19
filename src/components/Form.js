import React from "react";

function Form({ inputsForm, setInputsForm, handleSubmit, TypeFormAction }) {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <h1>{TypeFormAction}</h1>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={inputsForm?.name}
        onChange={(e) => setInputsForm({ ...inputsForm, name: e.target.value })}
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={inputsForm?.email}
        onChange={(e) =>
          setInputsForm({ ...inputsForm, email: e.target.value })
        }
      />
      <label>Number</label>
      <input
        type="number"
        name="number"
        value={inputsForm?.number}
        onChange={(e) =>
          setInputsForm({ ...inputsForm, number: e.target.value })
        }
      />
      <label>Address</label>
      <input
        type="text"
        name="address"
        value={inputsForm?.address}
        onChange={(e) =>
          setInputsForm({ ...inputsForm, address: e.target.value })
        }
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
