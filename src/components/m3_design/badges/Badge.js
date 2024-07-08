export default function Badge({number, className, type}) {
    const classes = type === "large" ? "large-badge" : type === "large-max" ? "large-max-badge" : "small-badge";
    return (
        <div className={`${classes}${className ? " " + className : ""}`}>
            {number?number:""}
        </div>
    )
}