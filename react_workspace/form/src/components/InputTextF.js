import React, { useState } from 'react';

function InputTextF(props) {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {
        alert("Text Input name : " +this.state.value);
        e.preventDefault();
    }
    
        return (
            <div>
            <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={value} onChange={handleChange}></input>
                    <input type="submit" value="Submit" />
                </label>
            </form>
        </div>
            </div>
        );
}

export default InputTextF;