export default function Divider({type,isVertical}) {

    let classes = ""
    switch (type){
        case "inset":
            classes = isVertical?"divider-vertical-inset":"divider-horizontal-inset"
            break
        case "inset-middle":
            classes = isVertical?"divider-vertical-inset-middle":"divider-horizontal-inset-middle"
            break;
        default:
            classes = isVertical?"divider-vertical":"divider-horizontal"
            break;
    }
    return(
        <hr className={`divider ${classes}`}/>
    )
}