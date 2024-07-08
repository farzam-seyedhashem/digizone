'use client'
import {useState} from "react";
import Image from "next/image";

export default function ProductSlider({product}) {
    const [images,setImages] = useState([product.thumbnail,...product.images]);
   const [selectedImage,setSelectedImage] = useState(0);
    return(
        <div className={"flex"}>
            <div className={"w-2/12 flex items-center justify-center"}>
                <div className={"space-y-2 "}>
                {images.map((image,index) => (
                    <div onClick={()=>setSelectedImage(index)} key={index} className={`${selectedImage===index&&"outline outline-primary-light outline-2 outline-offset-2"} border px-2 py-1 border-outline-variant-light dark:border-outline-variant-dark bg-surface-light dark:bg-surface-dark flex items-center justify-center overflow-hidden w-[60px] h-[60px] rounded-full`}>
                        <Image width={48} height={48} layout={"responsive"} src={"/data"+image.url} alt={""}/>
                    </div>
                ))}
                </div>
            </div>
            <div
                className={"flex items-center justify-center px-6 py-6 w-10/12 h-[600px] rounded-[24px] bg-surface-container-light dark:bg-surface-container-dark"}>
                <Image width={48} height={48} layout={"responsive"} src={"/data"+images[selectedImage].url} alt={""}/>
            </div>
        </div>
    )
}