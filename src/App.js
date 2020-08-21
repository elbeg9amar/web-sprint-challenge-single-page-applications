import React, { useState } from "react";
import { Link, Route, Switch  } from 'react-router-dom'
import './App.css';
import Home from './Home'
import Form from './Form'
import Order from './Order'



const initialFormValues= {
  username:''
}


function App  () {

  const [orders,setOrders] = useState([])
  const [formValues,setFormValue] = useState(initialFormValues)

  const updateForm = (name, value) => {
    setFormValue({...formValues,[name]:value})
  }

  const submiFrom = () => {
    const newOrder = {
      username:formValues.username.trim()
    }
    if (!newOrder.username) return

    setOrders([...orders,newOrder])

    return setFormValue(initialFormValues)
  }

  return (
    <div className='container'>
      <header className="header"><h1>PiZza</h1></header>
      <nav>
        <div>
          <Link to='/' className="link">Home</Link>
          <Link to='/pizza' className="link">Order</Link>
          <Link to='/help' className="link">Help</Link>
        </div>
      </nav>
      
         <Form values={formValues} update={updateForm} submit={submiFrom} orders={orders}/>
      

          {
            orders.map(order => {
              return  <Order order={order}/>
            })
          }
       
      
     
     
    </div>
    
  );
};
export default App;
