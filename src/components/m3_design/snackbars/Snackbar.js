'use client'
import IconButton from "@m3/icon_buttons/IconButton";
import {useState} from "react";
import Button from "@m3/buttons/Button";

export default function Snackbar({withLongerAction,message,type, fullWidth, open, onClose, withTimer, action, withCloseIcon, side, className}) {
    const [isShow, setIsShow] = useState(open || false)
    let classesLine = ""
    switch (type) {
        case "multi-line":
            classesLine = "snackbar-multi-line"
            break
        default:
            classesLine = "snackbar-single-line"
            break;
    }
    let actionClasses = ""

    if (withCloseIcon){
        actionClasses="snackbar-with-icon"
    }else{
        if (action){
            actionClasses=withLongerAction?"snackbar-longer-action":"snackbar-with-action"
        }else {
            actionClasses = "snackbar-standard"
        }
    }
    let classesSide = side === "left" ? "snackbar-left" : "snackbar-center"
    let classesWidth = fullWidth ? "snackbar-full-width" : "snackbar-fit"
    return (
        <div
            className={`${actionClasses}  snackbar ${classesLine} ${classesWidth} ${classesSide} ${className || ""}`}>
            <p className={"snackbar-message"}>
                {message}
            </p>
            <div className={"flex"}>
            {action&&<div className={"snackbar-action"}>
                {<Button onClick={() => {
                    onAction && onAction()
                }}>
                    {action}
                </Button>}
            </div>}
            {withCloseIcon&&<div className={"snackbar-icon-button"}>
                {<IconButton onClick={() => {
                    setIsShow(false)
                    onClose && onClose()
                }}>
                    close
                </IconButton>}
            </div>}
            </div>

        </div>
    )
}