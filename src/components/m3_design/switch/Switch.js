'use client'
import {Switch as HSwitch} from '@headlessui/react'
import {useState} from "react";
import Icon from "@m3/assets/icons/Icon";

export default function Switch({withIcon,isDisable,isCheck,setIsCheck}) {
    const [isOpen, setIsOpen] = useState(isCheck||false)
   const handleChange = (e) => {
       setIsOpen(e)
       setIsCheck && setIsCheck(e)
   }
    return (
        <HSwitch
            checked={isOpen}
            disabled={isDisable}
            onChange={handleChange}
            className={`switch ${isDisable&&"switch-disabled"} group/switch ${
                  isOpen ? isDisable?"switch-disable-open":'switch-open' :  isDisable?"switch-disable-close":'switch-close'
            } `}
        >
            <span className="sr-only">Enable notifications</span>
            <div
                className={` switch-indicator-button ${
                    isOpen ? 'translate-x-4' : '-translate-x-[4px]'
                }`}>
                <div
                    className={isDisable?"switch-indicator-container-disable":"switch-indicator-container"}>
                    <span
                        className={` ${withIcon? "switch-indicator-close-size-normal" : isOpen?"switch-indicator-close-size-normal ":"switch-indicator-close-size-small"}
                        ${isOpen ? isDisable?"switch-indicator-disable-open":'switch-indicator-open' : isDisable?"switch-indicator-disable-close":'switch-indicator-close'} 
                        switch-indicator`}
                    >
                        {withIcon ? isOpen ? <Icon size={24} weight={500} className={"switch-indicator-icon-open"} type={"outline"}>
                        check
                    </Icon> : <Icon size={24} weight={500} className={"switch-indicator-icon-close"} type={"outline"}>
                        close
                    </Icon> :""}
                    </span>
                </div>
            </div>
        </HSwitch>
    )
}