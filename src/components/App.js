import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Form';
import Table from './Table';
import api from '../service/base_URL';

function App() {
  useEffect(getCostumers, []);

  const [models, setModels] = useState([]);

  const [model, setModel] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
  });

  const [actions, setActions] = useState('Add Costumer');

  async function editCostumers(model) {
    setActions('Edit Costumer');

    const response = await api.get(`/costumers/${model.id}`);
    console.log(response);

    setModel({
      id: response.data.id,
      name: response.data.name,
      email: response.data.email,
      number: response.data.number,
      address: response.data.address,
    });
  }

  function getCostumers() {
    api
      .get(`/costumers`)
      .then((res) => setModels(res.data))
      .catch(window.alert);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (model.id !== undefined) {
      const response = await api
        .put(`/costumers/${model.id}`, model)
        .then(
          getCostumers,
          setModel({
            name: '',
            email: '',
            number: '',
            address: '',
          })
        )
        .catch(window.alert);
      console.log(response);
    } else {
      const response = await api
        .post(`/costumers`, model)
        .then(
          getCostumers,
          setModel({
            name: '',
            email: '',
            number: '',
            address: '',
          })
        )
        .catch(window.alert);
      console.log(response);
    }
  }

  async function deleteCostumer(model) {
    await api.delete(`/costumers/${model.id}`);
    getCostumers();
  }

  return (
    <div className='App'>
      <h1>Simple CRUD App</h1>
      <div className='app-container'>
        <Form
          handleSubmit={handleSubmit}
          setModel={setModel}
          model={model}
          actions={actions}
        />
        <Table
          deleteCostumer={deleteCostumer}
          editCostumers={editCostumers}
          model={model}
          models={models}
        />
      </div>
    </div>
  );
}

export default App;
