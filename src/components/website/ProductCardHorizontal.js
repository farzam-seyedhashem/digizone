import React from "react";
import Image from 'next/legacy/image'
import Link from 'next/link'
import Typography from "./assets/Typography";
import Button from "@/components/buttons/Button";
import IconButton from "@/components/buttons/IconButton";
import Icon from "@/components/assets/Icon";
import {ImageBaseURL} from "@/config";

export default function ProductCardHorizontal(props) {
    const {item, isHorizontal} = props
    const product = item?.attributes
    return (
        <Link href={`/product/${item.id}`}>

            <div
                className={" w-full h-full p-4 relative bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[12px] overflow-hidden"}>
                <div className={"flex pb-3"}>
                    <div className={`flex-1 `}>
                        <Typography type={"h4"}
                                    className="ml-6  w-10/12 !text-title-large italic font-normal text-on-surface-light dark:text-on-surface-dark ">
                            {product.Title}
                        </Typography>
                        <p
                            className={"text-body-large font-bold text-tertiary-light dark:text-tertiary-dark flex items-center w-fit rounded-[8px]   mt-2  whitespace-normal text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            {product.Price}
                            <span className={"mr-1"}>
                                تومان
                            </span>
                            {/*{parseFloat(product.price).toLocaleString()}*/}
                        </p>
                    </div>
                    <div className={"h-[100px] w-[100px]"}>
                         <Image quality={100} layout={'responsive'} width={720} height={720}
                                   className="rounded-[12px] w-full object-cover"
                                   src= {ImageBaseURL+product.thumbnail.data.attributes.url} alt=""/>
                    </div>
                </div>
                <div className={"flex mt-4 justify-between"}>
                    <div
                        className={`w-fit h-[40px] items-center px-4 rounded-[12px] dark:bg-surface-container-dark bg-surface-container-light flex  gap-0`}>
                        {product.Specification.map((item,i)=>i<3&&<div key={i} className={` flex ml-2 items-center`}>
                            <p className={`text-label-small sm:text-label-medium ml-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                {item.title + " : "}
                            </p>
                            <p className={`text-label-small sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                                {item.value}
                            </p>
                        </div>)}
                        {/*{inventory.InteriorColor && <div className={` flex ${isHorizontal?"px-1":"px-2"}`}>*/}
                        {/*    <p className={`text-label-medium mr-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>*/}
                        {/*        Interior:*/}
                        {/*    </p>*/}
                        {/*    <p className={`${isHorizontal?"text-body-medium":"text-body-large"} text-on-surface-light dark:text-on-surface-dark text-right`}>*/}
                        {/*        {inventory.InteriorColor}*/}
                        {/*    </p>*/}
                        {/*</div>}*/}

                    </div>
                    {/*<div className={"flex justify-end"}>*/}
                    {/*    <IconButton*/}
                    {/*        className={"w-10 h-10 !bg-surface-container-high-light dark:!bg-surface-container-high-dark"}>*/}
                    {/*        more_horiz*/}
                    {/*    </IconButton>*/}
                    {/*</div>*/}
                </div>
            </div>
        </Link>
    )
}
