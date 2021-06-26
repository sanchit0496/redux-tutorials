import React from 'react'

const App = () => {
    return (
        <div>
            <div className="container">
                <h2>Increment and Decrement Counter</h2>
                <h4>Using React and Redux</h4>

                <div className="quantity">
                    <a href="" className="quantity_minus" title = "Decrement"> <span> - </span> </a>
                    <input name = "quantity" type="text" class = "quantity_input" value = "0"/>
                    <a href="" className="quantity_plus" title = "Increment"> <span> + </span> </a>

                </div>

            </div>
        </div>
    )
}

export default App
