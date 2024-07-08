'use client';
import {useState} from "react";
import Icon from "@m3/assets/icons/Icon";

export default function Checkbox({isCheck, isDisabled, onChange, isIndeterminate, color, label}) {
    const [check, setCheck] = useState(isCheck || false)
    const [indeterminate, setIndeterminate] = useState(isIndeterminate || false)
    let classes = ""
    switch (color) {
        case "primary":
            classes = check ? "checkbox-selected-primary" : indeterminate ? "checkbox-selected-primary" : "checkbox-un-selected-primary"
            break
        case "error":
            classes = check ? "checkbox-selected-error" : indeterminate ? "checkbox-selected-error" : "checkbox-un-selected-error"
            break
    }
    return (
        <>
            <div onClick={() => {
                if (!isDisabled) {
                    indeterminate && setIndeterminate(false)
                    if (indeterminate) {
                        setCheck(true)
                    } else {
                        setCheck(!check)
                    }
                }
                console.log(check)

                onChange && onChange(check)
            }} className={"cursor-pointer flex items-center"}>
                <button
                    className={`checkbox-container group`}>
                    <div className={`checkbox ${isDisabled ? "checkbox-disable" : classes}`}>
                        <div className={`checkbox-state-layer `}>
                            {indeterminate ? <Icon size={18} fill={1}>
                                indeterminate_check_box
                            </Icon> : check ? <Icon size={18} fill={1}>
                                check_box
                            </Icon> : <Icon size={18} >
                                check_box_outline_blank
                            </Icon>}
                        </div>
                    </div>
                </button>
                {label && <label className={"checkbox-label"}>
                    {label}
                </label>}


                <input disabled={isDisabled} value={check} data-indeterminate={indeterminate} className={"hidden"}
                       type={"checkbox"}/>
            </div>
        </>
    )
}