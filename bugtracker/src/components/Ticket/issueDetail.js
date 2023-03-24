import React, {useState} from 'react';



const Detail = ({label, value, updatable = false, type=''}) => {

    const [detail, setDetail] = useState([])

    const onChange = (e) => {
        console.log(detail)
        setDetail({
            ...detail,
            [e.target.name]: e.target.value
        })
    }



        if (!updatable) {
            return (<span><label className='issueLabel'>{label} : </label><label className='issueValue'>{value}</label></span>)
        } else {
            return (
                <span>
                    <label htmlFor={label} className='issueLabel'>{label} : </label>
                    <input type='text' name={label} className='issueValue' value={value} onChange={onChange}/>
                </span>
                )
        }
};

export default Detail;