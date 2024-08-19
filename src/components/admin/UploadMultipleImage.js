'use client'
import Button from "@m3/buttons/Button";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import IconButton from "@m3/icon_buttons/IconButton";

export default function UploadMultipleImage({defImages, label, name}) {
    const [images, setImages] = useState(defImages || [])
    // const [filesUploaded, setFilesUploaded] = useState([])
    const inputRef = useRef()
    useEffect(() => {
        console.log(images)
    }, []);
    const handleImagesUpload = async (e) => {
        console.log("---------")
        const file = inputRef.current.files
        let newImage = await saveImage(file[0])
        setImages([...images, newImage])
        console.log(images)
    }
    const saveImage = async (file) => {
        const formdata = new FormData();
        formdata.append("file", file);
        const API = process.env.STATUS === "production" ? process.env["ProductionURL"] : process.env["DevURL"]

        const res = await fetch(`${API}/api/upload`, {
            method: "POST",
            body: formdata,
        })
        return await res.json()
    }
    const removeFile = (index) => {
        let files = [...images]
        console.log(files)
        files.splice(index, 1)
        console.log(files)
        setImages(files)
    }
    return (
        <div>
            <h3 className={"text-on-surface-light dark:text-on-surface-dark font-extrabold text-title-medium"}>
                {label}
            </h3>
            <p className={"mt-1 text-on-surface-variant-light dark:text-on-surface-variant-dark text-body-large"}>
                جهت آپلود بر روی دکمه زیر کلیک نمایید.
            </p>
            <div className={"mb-3 mt-2 flex items-center space-x-reverse space-x-4"}>
                {images.map((image, index) =>
                    <div key={index}
                         className={"group relative w-[120px] h-[120px] rounded-[16px] overflow-hidden"}>
                        <Image layout={"fill"} src={"/data" + image.url} alt={""}/>
                        <IconButton onClick={() => removeFile(index)} type={"filled"}
                                    className={"group-hover:block hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"}>
                            Delete
                        </IconButton>
                    </div>
                )}
            </div>
            <input type={"text"} hidden name={"imagesUploaded"} value={JSON.stringify(images)}/>
            <Button icon={"photo_camera"} variant={"tonal"} className={"mt-2 flex w-fit"} htmlFor={"images"}
                    component={"label"} type={"button"}>
                آپلود عکس
            </Button>
            <input ref={inputRef} onChange={(e) => handleImagesUpload(e)} className={"hidden"}
                   id={"images"}
                   name={name} type="file" multiple={false}/>

        </div>
    )
}