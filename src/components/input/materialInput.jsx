import React from 'react';
import {TextField} from "@mui/material";

const MaterialInput = (props) => {

    const {
        label,
        placeholder,
        type,
        onChange
    } = props

    return (
        <div>
            <TextField
                label={label}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
            />
        </div>
    );
};

export default MaterialInput;


