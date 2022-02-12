import React, {useState} from 'react';

function SelectFlavorF(props) {
    const [value, setValue] = useState('coconut')
    const handleSubmit = (e) => {
        alert('Your favorite flavor is: ' + this.state.value);
        e.preventDefault();
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                    <label>
                    Pick your favorite flavor:
                    <select value={value} onChange={handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
        </div>
    );
}

export default SelectFlavorF;