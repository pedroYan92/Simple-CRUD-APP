import React from 'react'

function Input(props) {

    const { label, type, name, onChange, model } = props

    return (
        <>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          value={model.name}
          onChange={onChange}
        />      
        </>
    )
}

export default Input
