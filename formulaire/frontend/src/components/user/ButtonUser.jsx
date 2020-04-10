import React from 'react'

export default props =>
    <button className={`btn ${props.color}`} onClick={e=>props.action(e)} >
        {props.button}
    </button>   