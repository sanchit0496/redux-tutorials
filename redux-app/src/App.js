import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions/index.js'

const App = () => {
    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="container">
                <h2>Increment and Decrement Counter</h2>
                <h4>Using React and Redux</h4>

                <div className="quantity">
                    <a href="" className="quantity_minus" title = "Decrement" onClick = {() => dispatch(decNumber())}> <span> - </span> </a>
                    <input name = "quantity" type="text" className = "quantity_input" value = {myState}/>
                    <a href="" className="quantity_plus" title = "Increment" onClick = {() => dispatch(incNumber())}> <span> + </span> </a>

                </div>

            </div>
        </div>
    )
}

export default App
