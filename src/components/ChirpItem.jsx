import React from 'react'

const ChirpItem = ({chirp}) => {
    return (
        <li  className="list-group-item py-4 d-flex flex-column">
            <span className="font-weight-bold">@{chirp.username}</span>
            <span>{chirp.message}</span>
        </li>
    )
}

export default ChirpItem;
