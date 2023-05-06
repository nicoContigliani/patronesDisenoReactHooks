/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Presentacional = ({ count, handleIncrement }) => {
    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={handleIncrement}>Incrementar</button>
        </div>
    )
}

export default Presentacional
