import Icon from "@m3/assets/icons/Icon";

export default function FAB({icon, label,children, className, component, isExtended, size, color, ...other}) {
    let Component = component || "button"


    return (

        <Component {...other}
                   className={`fab-container  ${color === "primary" ? "fab-primary" : color === "secondary" ? "fab-secondary" : color === "tertiary" ? "fab-tertiary" : "fab-surface"} ${isExtended ? "ex-fab" : size === "large" ? "fab-large" : size === "small" ? "fab-small" : "fab-normal"} ${className || ""}`}>

            <div className={"fab-state-layer"}>
                <div className={"fab-icon"}>
                    <Icon type={"outline"}>
                        {children}
                    </Icon>
                </div>
                {label&&<label className={"fab-text"}>
                    {label}
                </label>}
            </div>
        </Component>
    )

}