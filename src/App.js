import React, { useState } from "react";
import { Link, Route, Switch  } from 'react-router-dom'
import './App.css';
import Home from './Home'
import Form from './Form'
import Order from './Order'



const initialFormValues= {
  username:'',
  size: '',
  topping:{
    cheese:false,
    chicken:false,
    apple:false,
    meat:false,
  }
}


function App  () {

  const [orders,setOrders] = useState([])
  const [formValues,setFormValue] = useState(initialFormValues)

  const updateForm = (name, value) => {
    setFormValue({...formValues,[name]:value})
  }

  const checkboxChange = (name,isChecked) => {
    setFormValue({
      ...formValues,topping: {
        ...formValues.topping,
        [name]: isChecked
      }
    })
  }

  const submiFrom = () => {
    const newOrder = {
      username:formValues.username.trim(),
      size: formValues.size,
      topping: Object.keys(formValues.topping).filter(top => formValues.topping[top]),
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
      
         <Form values={formValues} update={updateForm} submit={submiFrom} orders={orders} checkBox={checkboxChange}/>
      

          {
            orders.map(order => {
              return  <Order order={order}/>
            })
          }
       
      
     
     
    </div>
    
  );
};
export default App;
