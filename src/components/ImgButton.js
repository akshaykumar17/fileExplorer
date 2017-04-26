import React from 'react';
import { Button } from './Style';

export const ImgButton = (props) => {
    if (!props.val) {
        return(
        <Button className={`${props.className} btn-xs btn-responsive `} >
            {props.name}
        </Button>
        )
    }
    return (
        //width="18em" height="18em"
        <Button className={`${props.className} btn-xs btn-responsive `} >
            <img src={props.val} role="presentation" width='18em' height='18em' /> 
        </Button>
    );
}