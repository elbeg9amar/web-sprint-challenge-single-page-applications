import React from 'react'


export default function Form(props) {
const {update, submit, values, checkBox} = props

const onChange = evt => {
    const {name, value} = evt.target
    update(name, value)
}

const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkBox(name, checked)
  }

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

    return (
        <form onSubmit={onSubmit}>
        <div>
            <h1> Start Order</h1>
            <div>
             <label>Username:&nbsp;
                <input
                  value={values.username}
                  onChange={onChange}
                  name='username'
                  placeholder='type yourname'
                  maxLength='20'
                  type="text"
                />            
             </label>

             <label>Role:&nbsp;
                <select value={values.size} onChange={onChange}name='size'>
                    <option value="">-- Select a Size --</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large" >Large</option>
                    <option value="extLarge">Extra Large</option>
                </select>
            </label>
            <div className='form-group checkboxes'>
                <h4>topping</h4>
                <label>cheese
                    <input
                      type="checkbox"
                      name='cheese'
                      checked={values.topping.cheese}
                      onChange={onCheckboxChange}
                    />
                </label>
                <label>chicken
                    <input
                      type="checkbox"
                      name="chicken"
                      checked={values.topping.chicken}
                      onChange={onCheckboxChange}
                    />
                </label>
                <label>apple
                    <input
                      type="checkbox"
                      name="apple"
                      checked={values.topping.apple}
                      onChange={onCheckboxChange}
                    />
                </label>
                <label>meat
                    <input
                      type="checkbox"
                      name="meat"
                      checked={values.topping.meat}
                      onChange={onCheckboxChange}
                    />
                </label>
            </div>

             <button >done</button>
            </div>
        </div>
    
        </form>
    )
}