import {useState} from "react";
import {Popover} from "@headlessui/react";
import TextField from "@m3/text_fields/TextField";
import Icon from "@m3/assets/icons/Icon";

export default function ColorPicker({value,onChange,isLeft}) {
    const [color, setColor] = useState(value || "#000")
    const [isOpen, setIsOpen] = useState(false)
    const defColors = [
        '#fc030b',
        '#fc5e03',
        '#fcba03',
        '#fc0352',
        '#03a5fc',
        '#3503fc',
        '#ca03fc',
        '#6b03fc',
        '#ffffff',
        '#eeeeee',
        '#f2f2f2',
        '#424242',
        '#323232',
        '#212121',
        '#1a1a1a',
        '#000000',
    ]
    function wc_hex_is_light(color) {
        const hex = color==="transparent" ? "transparent" : color.replace('#', '');
        const c_r = parseInt(hex.substring(0, 0 + 2), 16);
        const c_g = parseInt(hex.substring(2, 2 + 2), 16);
        const c_b = parseInt(hex.substring(4, 4 + 2), 16);
        const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
        return brightness > 155;
    }
    const colorChangeHandler = (colorHexCode) => {
        setColor(colorHexCode)
        onChange(colorHexCode)
    }
    return (
        <div className={""}>

            <Popover className="relative">
                <Popover.Button>
                    <div onClick={() => setIsOpen(true)} style={{backgroundColor: color}}
                         className={"flex outline outline-2 outline-offset-2 outline-outline-dark rounded-full w-[24px] h-[24px]"}>

                    </div>
                </Popover.Button>

                <Popover.Panel
                    className={`${isLeft?"left-0":"right-0"} overflow-hidden bg-surface-container-highest-dark rounded-[12px]  w-[190px] absolute z-[999]`}>
                    <div style={{backgroundColor: color}} className={"h-[84px] flex justify-center items-center w-full "}>
                        <label style={{color: wc_hex_is_light(color)?"#000":"#fff"}} className={"flex items-center  text-body-large "}>
                            <Icon className={"text-[18px]"} size={18}>
                                tag
                            </Icon>
                            <span className={"font-medium italic"}>
                            {color.replace("#","")}
                            </span>
                        </label>
                    </div>
                    <div className="px-3 pt-3 grid grid-cols-4 gap-2">

                        {defColors.map((item, i) => <div key={i} onClick={()=>colorChangeHandler(item)}
                                className={` w-full col-span-1 flex justify-center items-center h-[24px]`}>
                                <div style={{backgroundColor: item}} className={`${value === item ? "outline outline-1 outline-offset-1 outline-primary-dark rounded-full" : ""} w-[24px] rounded-full h-[24px]`}>

                                </div>

                            </div>
                        )}
                    </div>
                    <div className={"mt-2 mb-4 px-3"}>
                    <TextField onChange={(e)=>colorChangeHandler(e.target.value)} defaultValue={color} label={"Color Code"}/>
                    </div>

                    {/*<img src="/solutions.jpg" alt=""/>*/}
                </Popover.Panel>
            </Popover>
        </div>
    )
}