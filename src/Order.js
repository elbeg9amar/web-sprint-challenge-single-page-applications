import React from 'react'

 function Order (props) {
   const {order} = props

    console.log(order)
    
   
   
    

   
    return (
        <div>
            <h3>Username: {order.username}</h3>
            <h3>Size: {order.size}</h3>
            <h3>Topping: 
            {order.topping.map( top => {
                return <li>{top}</li>
            })}
            </h3>
        </div>
    )
}
export default Order