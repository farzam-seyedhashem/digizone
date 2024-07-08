'use client'
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
import Image from "next/image";

export default function UploadImage({defImage, label,name}) {
    console.log(defImage)
    return (
        <div>
            <div className={"flex items-center space-x-reverse space-x-4"}>
                {defImage?<div className={"relative w-[120px] h-[120px] rounded-[16px] overflow-hidden"}>
                    <Image layout={"fill"} src={"/data" + defImage.url} alt={""}/>
                </div>:<div className={"flex items-center justify-center rounded-[16px] bg-surface-container-highest-light dark:bg-surface-container-highest-dark w-[120px] h-[120px] "}>
                <Icon>
                    image
                </Icon>
                </div>}
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
                    <input required className={"hidden"} id={"imageFile"}
                           name={name} type="file" multiple={false}/>
                </div>

            </div>


        </div>
    )
}