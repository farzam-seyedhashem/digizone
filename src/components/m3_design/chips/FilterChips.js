import Icon from "@m3/assets/icons/Icon";

export default function FilterChips({isChecked, onChange,label}) {
    return (
        <div onClick={()=>onChange(!isChecked)} className={`transition-all duration-300 cursor-pointer w-fit flex items-center border text-label-large font-medium ${isChecked?"text-on-secondary-container-light dark:text-on-secondary-container-dark bg-secondary-container-light dark:bg-secondary-container-dark pl-2 pr-4 border-secondary-container-light dark:border-secondary-container-dark":" border-outline-light dark:border-outline-dark dark:text-on-surface-variant-dark text-on-surface-variant-light px-4"} px-4 h-[30px] rounded-[8px]`}>
            {isChecked?<Icon size={20} className={" mr-2 text-on-secondary-container-light dark:text-on-secondary-container-dark"}>
                check
            </Icon>:<div className={"h-[18px]"}></div>}
            {label}
        </div>
    )
}