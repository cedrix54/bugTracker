import React from 'react';

const DropDown = (props) => {
    return (
        <span>
            <label className='issueLabel' htmlFor={props.title}>{props.title} : </label>
            <select key={props.title} name={props.id} id={props.id} value={props.value} onChange={props.onChange}>
                {props.valueList.map(item => (
                    <option key={item.id} value={item.id}>{item[props.valuesId]}</option>
            ))}
            </select>
        </span>
    );
};

export default DropDown;