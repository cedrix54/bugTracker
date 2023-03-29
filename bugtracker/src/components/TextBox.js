import React from 'react';

const TextBox = (props) => {
    return (
        <span>
            <label className='issueLabel' htmlFor={props.id}>{props.title} : </label>
            <input className='issueValue' type="text" name={props.id} value={props.value || " "} onChange={props.onChange}/>
        </span>
    );
};

export default TextBox;