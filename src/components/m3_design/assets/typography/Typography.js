export default function Typography({type, children, className}) {
    let Component = `${type || 'p'}`

    let defStyle = ""
    switch (type) {
        case "h1":
            defStyle = "text-headline-medium  font-[950]"
            break;
        case "h2":
            defStyle = "text-headline-small font-[900]"
            break;
        case "h3":
            defStyle = "text-title-large font-[800]"
            break;
        case "h4":
            defStyle = "text-title-medium font-[700]"
            break;
        case "h5":
            defStyle = "text-title-small font-[600]"
            break;
        case "h6":
            defStyle = "text-label-large font-[500]"
            break;
        case "p":
            defStyle = "text-body-large font-[400]"
            break;
    }
    return (
        <Component className={`${defStyle} ${className}`}>
            {children}
        </Component>
    )
}