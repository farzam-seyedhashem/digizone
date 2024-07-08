'use client'
import {useState,useEffect} from "react";

export default function Icon({type,fill, size, weight, grade,style, children,className,onClick}) {
    const [resTypeStyle,setResTypeStyle] = useState("")

    useEffect(() => {
        let gradeV = grade ? grade : 0
        let sizeV = (size !== 18 || size !== 20 || size !== 24 || size!==40 || size!==48 ) ? 24 : size
        let weightV = weight ? weight : 400

        const value = `material-symbols-outlined font-vs-[${fill}_${weightV}_${gradeV}_${sizeV}]`
        setResTypeStyle(value)
    }, [size,grade,weight,type,fill]);

    return (
        <i  style={style} onClick={onClick&&onClick} className={`${resTypeStyle}  text-[${size?size + "px":"24px"}] ${className?className:""}`}>
            {children}
        </i>
    )
}