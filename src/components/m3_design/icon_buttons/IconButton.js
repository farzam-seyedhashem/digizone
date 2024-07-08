'use client'

import React, {useRef} from "react";
import Icon from "../assets/icons/Icon";

export default function IconButton(props) {
    const {component,color, onClick, type, children, className, selected, ...other} = props
    let Component = `${component || 'button'}`
    let classes = null
    switch (type) {
        case "filled":
            classes = props.disabled ? "filled-icon-button-disabled" : selected ? "filled-icon-button-selected" : "filled-icon-button"
            break;
        case "tonal":
            classes = props.disabled ? "filled-tonal-icon-button-disabled" : selected ? "filled-tonal-icon-button-selected" : "filled-tonal-icon-button"
            break;
        case "outlined":
            classes = selected ? props.disabled ? "outlined-icon-button-selected-disabled" : "outlined-icon-button-selected" : props.disabled ? "outlined-icon-button-disabled" : "outlined-icon-button"
            break;
        default:
            classes = props.disabled ? "standard-icon-disabled" : selected ? "standard-icon-button-selected" : "standard-icon-button"
    }
    return (
        <Component onClick={(e) => {
            // createRipple(e)
            onClick && onClick()
        }} {...other} className={`group/icon-button icon-button-container`}>
            <div className={`icon-button ${classes} ${className}`}>
                <div className={"icon-button-state-layer"}>
                    {!selected ? <Icon size={24} type={"outline"}>
                            {children}
                        </Icon> :
                        <Icon size={24} fill={1}>
                            {children}
                        </Icon>}
                </div>
            </div>
        </Component>

    )
}
