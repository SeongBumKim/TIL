import React, {useState} from 'react';

function InputTextareaF(props) {
    const [value, setValue] = useState('Please write an essay about your favorite DOM element.');

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        alert('An essay was submitted: ' + this.state.value);
        e.preventDefault();
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <label>
                    Essay:
                    <textarea value={value} onChange={handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
        </div>
    );
}

export default InputTextareaF;