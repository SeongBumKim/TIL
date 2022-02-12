import React, {useState} from 'react';

function MultiInputF(props) {
    // const isGoing = true;
    // const numberOfGuests = 2;
    const[{isGoing, numberOfGuests}, setValue] = useState('true, 2')
    const handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setValue({
            [name] : value
        })
    }
    return (
        <div>
            <form>
                    <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={isGoing}
                        onChange={handleInputChange} />
                    </label>
                    <br />
                    <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={numberOfGuests}
                        onChange={handleInputChange} />
                    </label>
                </form>
        </div>
    );
}

export default MultiInputF;