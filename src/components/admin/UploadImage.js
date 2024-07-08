'use client'
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
import Image from "next/image";
import {useRef, useState} from "react";

export default function UploadImage({defImage, label,name}) {
    const [image, setImage] = useState(defImage || null);
    const inputRef = useRef()
    const handleImagesUpload = async (e) => {
        console.log("---------")
        const file = inputRef.current.files
        let newImage = await saveImage(file[0])
        setImage(newImage)
console.log(newImage)
    }
    const saveImage = async (file) => {
        const formdata = new FormData();
        formdata.append("file", file);
        const res = await fetch("http://localhost:3000/api/upload", {
            method: "POST",
            body: formdata,
        })
        return await res.json()
    }
    return (
        <div>
            <div className={"flex items-center space-x-reverse space-x-4"}>
                {image?<div className={"relative w-[120px] h-[120px] rounded-[16px] overflow-hidden"}>
                    <Image layout={"fill"} src={"/data" + image.url} alt={""}/>
                </div>:<div className={"flex items-center justify-center rounded-[16px] bg-surface-container-highest-light dark:bg-surface-container-highest-dark w-[120px] h-[120px] "}>
                <Icon>
                    image
                </Icon>
                </div>}
                <input hidden name={"thumbnail"} value={JSON.stringify(image)}/>
                <div>
                    <h3 className={"text-on-surface-light dark:text-on-surface-dark font-extrabold text-title-medium"}>
                        {label}
                    </h3>
                    <p className={"mt-1 text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-large"}>
                        جهت آپلود بر روی دکمه زیر کلیک نمایید.
                    </p>

                    <Button icon={"photo_camera"} variant={"tonal"} className={"mt-2 flex w-fit"} htmlFor={"imageFile"}
                            component={"label"} type={"button"}>
                        آپلود عکس
                    </Button>
                    <input onChange={handleImagesUpload} ref={inputRef} className={"hidden"} id={"imageFile"}
                           name={name} type="file" multiple={false}/>
                </div>

            </div>


        </div>
    )
}