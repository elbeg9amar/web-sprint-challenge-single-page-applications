import React from 'react'


export default function Form(props) {
const {update, submit, values} = props

const onChange = evt => {
    const {name, value} = evt.target
    update(name, value)
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


             <button >done</button>
            </div>
        </div>
    
        </form>
    )
}