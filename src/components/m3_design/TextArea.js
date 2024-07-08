import React, {useState} from "react";

export default function TextArea({label, rows, className, defaultValue, onChange}) {
    const [value, setValue] = useState(defaultValue || "")
    const FocusLabelStyle = "group-focus-within:px-1 group-focus-within:left-3 group-focus-within:text-primary-light dark:group-focus-within:text-primary-dark group-focus-within:-top-[2px] group-focus-within:-translate-y-1/2 group-focus-within:text-primary-light dark:group-focus-within:text-primary-dark group-focus-within:leading-[.5] group-focus-within:text-body-small group-focus-within:leading-[16px]"
    const FocusFieldsetStyle = "dark:group-focus-within:border-primary-dark group-focus-within:border-primary-light"
    const ValueLabelStyle = "px-1 -mt-[3px] left-3 text-primary-light dark:text-primary-dark -top-[2px] -translate-y-1/2 text-primary-light dark:text-primary-dark leading-[.5] text-body-small leading-[16px]"
    const ValueFieldsetStyle = "dark:border-primary-dark border-primary-light"
    const LabelStyle = "text-body-large text-on-surface-variant-light dark:text-on-surface-variant-dark   -mt-[3px] -translate-y-1/2 left-[16px]"
    const FieldsetStyle = "border-outline-light dark:border-outline-dark"
    let rowsSelect = rows || 4
    let rowsHeight = (rowsSelect * 32) + 2

    return (

        <div style={{height: rowsHeight + "px"}}
             className={`relative cursor-text group  w-full group ${className}`}>

            <fieldset style={{height: rowsHeight + "px"}}
                      className={`${value !== "" ? ValueFieldsetStyle : FieldsetStyle + " " + FocusFieldsetStyle} border rounded-[4px] top-0 left-0 w-full absolute `}>
                <legend
                    className="text-xs  relative h-[11px] invisible float-unset p-0 overflow-hidden ml-3 max-w-full w-fit leading-[16px] float-[unset] transition-[max-width_100ms_cubic-bezier(0.0,_0,_0.2,_1)_50ms]">
                        <span
                            className={`${value !== "" ? "block" : "group-focus-within:block hidden"} opacity-0 px-[4px] inline-block w-fit`}>{label}</span>
                </legend>
                <textarea rows={rowsSelect} defaultValue={value} onChange={(e) => {
                    setValue(e.target.value)
                    onChange(e)
                }} aria-invalid={"true"} id={label}
                          className={"h-[calc(100%_-_1px)] focus:ring-0 border-0  bg-transparent text-on-surface-light dark:text-on-surface-dark outline-none px-[16px] w-full caret-primary-light "}></textarea>
                <label htmlFor={label}
                       className={`${value !== "" ? ValueLabelStyle : LabelStyle + " " + FocusLabelStyle} z-10 cursor-text inline-block absolute transform transition-all top-[24px] duration-300 ease-in-out tracking-[.5px]`}>
                    {label}
                </label>
            </fieldset>
        </div>

    )
}