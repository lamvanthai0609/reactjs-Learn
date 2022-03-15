import React, { useState } from 'react';
import PropTypes  from 'prop-types';

TodoForm.protoType = {
    onSubmit : PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit : null,
}


function TodoForm(props) {
    const {onSubmit} = props;

    const [value,setValue] = useState('')


    const handleChangeValue = (e) =>{
        setValue(e.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!onSubmit) return;

        const formValue = {
            title:value,
            
        }
        onSubmit(formValue);
        setValue("");
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" id="title" 
                value={value}
                onChange={handleChangeValue}/>
    
    </form>
  )
}

export default TodoForm