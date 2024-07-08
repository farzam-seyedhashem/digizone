import Icon from "@m3/assets/icons/Icon";
import Image from "next/image";

export default function InputChips({trailingIcon,leadingIcon,avatar,selected}){
    return(
        <div className={`${selected?"bg-secondary-container-light dark:bg-secondary-container-dark":"active:shadow-[0px_1px_3px_0px_rgba(0,0,0,0.30),0px_4px_8px_3px_rgba(0,0,0,0.15)] active:bg-on-surface-light/[18%] dark:active:bg-on-surface-dark/[18%] focus:bg-on-surface-light/[12%] dark:focus:bg-on-surface-dark/[12%] hover:bg-on-surface-light/[8%] dark:hover:bg-on-surface-dark/[8%] outline-[1px] outline -outline-offset-1 outline-outline-light dark:outline-outline-dark"} ${avatar?"rounded-full":"rounded-[8px]"} overflow-hidden h-[32px] flex items-center  `}>
           <div className={`${selected&&"active:bg-on-secondary-container-light/[18%] active:dark:bg-on-secondary-container-dark/[18%] focus:bg-on-secondary-container-light/[12%] focus:dark:bg-on-secondary-container-dark/[12%] hover:bg-on-secondary-container-light/[8%] hover:dark:bg-on-secondary-container-dark/[8%]"} flex items-center w-full h-full ${trailingIcon?"pr-2":"pr-3"} ${leadingIcon?"pl-2":avatar?"pl-1":"pl-3"}  `}>
            {leadingIcon&&<Icon className={"mr-2 text-primary-light dark:text-primary-dark text-[18px]"}
                   type={"outline"}>
                {leadingIcon}
            </Icon>}
            {avatar&&<div className={"w-6 flex items-center justify-center h-6 relative mr-2"}>
                {avatar}
            </div>}
            <label className={`text-label-large ${selected?"text-on-secondary-container-light dark:text-on-secondary-container-dark":"text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}>
                Label
            </label>
            {trailingIcon&&<Icon className={`${selected?"text-on-secondary-container-light dark:text-on-secondary-container-dark":"text-on-surface-variant-light dark:text-on-surface-variant-dark"} ml-2 text-[18px]`}
                   type={"outline"}>
                {trailingIcon}
            </Icon>}
           </div>
        </div>
    )
}
