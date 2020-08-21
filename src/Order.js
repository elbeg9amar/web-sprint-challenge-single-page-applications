import React from 'react'


 function Order (props) {
   const {order} = props

    console.log(order)
    
   
   
    

   
    return (
        <div className="order">
            <h1>Your Order ... </h1>
            <h2>Username: {order.username}</h2>
            <h3>Size: {order.size}</h3>
            <h3>Topping: 
            {order.topping.map( top => {
                return <li>{top}</li>
            })}
            </h3>
            <div>
                <h3><p>Special instruction: {order.special}</p></h3>
            </div>
        </div>
    )
}
export default Order