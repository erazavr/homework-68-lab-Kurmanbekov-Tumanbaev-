import React from 'react';
import './AddForm.css'
const AddForm = (props) => {
    return (
        <div>
            <form className='form' onSubmit={props.onClick}>
                <input
                    type="text"
                    className='form-field'
                    value={props.name}
                    placeholder='Введите название фильма'
                    onChange={props.onChange}/>
                <button type='submit' className='form-btn'>Add</button>
            </form>
        </div>
    );
};
export default AddForm;