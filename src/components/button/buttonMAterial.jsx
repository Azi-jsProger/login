import React from 'react';
import {Button} from "@mui/material";

const ButtonMAterial = (props) => {

    const {
        value,
        onClick
    } = props

    return (
        <Button
            variant="contained"
            onClick={onClick}
            size='long'
        >
            {value}
        </Button>

    );
};


export default ButtonMAterial;