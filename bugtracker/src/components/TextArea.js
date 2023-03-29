import React from 'react';

const TextArea = (props) => {
    return (
        <span className='textArea'>
            <label className='issueLabel' htmlFor={props.id}>{props.title} : </label>
            <input className='issueValue' type="text" name={props.id} value={props.value || ""} onChange={props.onChange}/>
        </span>
    );
};

export default TextArea;