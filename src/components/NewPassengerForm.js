import React, { useState } from "react";

export const NewPassengerForm = (props) => {
    const [name, setName] = useState('');
    const[seat, setArea] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && seat) {
            console.log('New Passenger Name: ' + name + seat);
            props.addNewPassenger({name, seat});
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4>add new passenger</h4>
            <form className="mb-3" onSubmit={onSubmit}>
                <input
                type='text'
                placeholder='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                <input
                type='text'
                placeholder='seat'
                onChange={(e) => setArea(e.target.value)}
                value={seat}
                />
                <button className='btn btn-primary btn-sm m-1' type='submit'>+</button>
            </form>
        </div>
    )
}