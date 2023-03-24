import React from 'react';

const Option = ({value, label, selected}) => {
    if (value === selected) {
        return <option key={value} value={value} selected>{label}</option>
    } else {
        return <option key={value} value={value}>{label}</option>
    }

}

const DropDown = ({items, id, field}) => {
    let itemsList = items.map(item => ({value: item.id, label: item[field]}))
    return (
        <select key={field} defaultValue={id}>
            {itemsList.map( item => (
                <Option 
                    key={item.value}
                    value = {item.value}
                    label = {item.label}
                    selected = {id}
                />
            ))}
        </select>
    );
};

export default DropDown;