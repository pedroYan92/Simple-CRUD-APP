import React from 'react'


function Table(props) {

    const {deleteCostumer, editCostumers, models,} = props

    

    return (
        <div className='container-list'>
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
              {models.map((model) => (
                <tr key={model.id}>
                  <td>{model.name}</td>
                  <td>{model.email}</td>
                  <td>{model.number}</td>
                  <td>{model.address}</td>
                  <td>
                    <button onClick={() => editCostumers(model)}>Edit</button>
                    <button onClick={() => deleteCostumer(model)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
}

export default Table
