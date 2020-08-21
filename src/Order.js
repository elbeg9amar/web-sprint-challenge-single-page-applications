import React from 'react'

 function Order (props) {
   const {order} = props

    console.log(order)
    
   
   
    

   
    return (
        <div>
            <h3>Username:{order.username}</h3>
            <h3>Size:{order.size}</h3>
        </div>
    )
}
export default Order