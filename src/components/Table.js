import React from "react";
import api from "../service/base_URL";

function Table({
  costumers,
  setInputsForm,
  setCostumers,
  initialStateInputsForms,
  setTypeFormAction,
}) {
  async function fillInputsForm(model) {
    setInputsForm({
      id: model.id,
      name: model.name,
      email: model.email,
      number: model.number,
      address: model.address,
    });
  }

  async function deleteCostumer(model) {
    await api.delete(`/costumers/${model.id}`);
    setCostumers(costumers.filter((costumer) => costumer.id !== model.id));
    setInputsForm(initialStateInputsForms);
    setTypeFormAction("Create costumer");
  }

  return (
    <div className="container-list">
      <h2>Costumers List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {costumers.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.number}</td>
              <td>{item.address}</td>
              <td>
                <button
                  onClick={() => {
                    setTypeFormAction("Update Costumer");
                    fillInputsForm(item);
                  }}
                >
                  Edit
                </button>
                <button onClick={() => deleteCostumer(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
