import React from 'react';
import { Button } from './Style';

export const DropDown = (props) => {
    return (
        <div className="dropdown">
            <Button name={props.val} primary={props.primary} className={`${props.className} btn btn-default btn-lg btn-responsive `} >
                {props.val}
                <span className="glyphicon glyphicon-triangle-bottom" />
            </Button>
            <div className="dropdown-content">
                <a href="#">{props.val}</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    );
}
