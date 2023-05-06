/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Presentacional from './Presentacional'

const Contenedor = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    };


    return (
        <div>
            contenedor
            <Presentacional
                count={count}
                handleIncrement={handleIncrement}
            />
        </div>
    )
}

export default Contenedor
