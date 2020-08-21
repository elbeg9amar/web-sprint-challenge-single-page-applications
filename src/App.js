import React, { useState, useEffect} from "react";
import { Link, Route, Switch  } from 'react-router-dom'
import * as yup from 'yup'
import './App.css';
import Home from './Home'
import Form from './Form'
import Order from './Order'
import formSchema from "./validation/formSchema";



const initialFormValues= {
  username:'',
  size: '',
  special:'',
  topping:{
    cheese:false,
    chicken:false,
    apple:false,
    meat:false,
  }
}
const initialFormErrors = {
  username: '',
  size: '',
  special:'',
}
const initialDisabled = true
function App  () {

  const [orders,setOrders] = useState([])
  const [formValues,setFormValue] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)


  const updateForm = (name, value) => {

    yup
    .reach(formSchema,name)
    .validate(value)
    .then(valid =>{
      setFormErrors({...formErrors,[name]:""})
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      });
    });



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
      special:formValues.special.trim(),
      size: formValues.size,
      topping: Object.keys(formValues.topping).filter(top => formValues.topping[top]),
    }
    if (!newOrder.username) return

    setOrders([...orders,newOrder])

    return setFormValue(initialFormValues)
  }

  useEffect( () => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid);
      })
  },[formValues])

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
      
         <Form values={formValues} update={updateForm} submit={submiFrom} orders={orders} checkBox={checkboxChange} disabled={disabled} errors={formErrors}/>
      

          {
            orders.map(order => {
              return  <Order order={order}/>
            })
          }
       
      
     
     
    </div>
    
  );
};
export default App;
