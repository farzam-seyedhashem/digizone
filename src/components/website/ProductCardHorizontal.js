'use client'
import React, {useEffect} from "react";
import Image from 'next/legacy/image'
import Link from 'next/link'
import Typography from "@m3/assets/typography/Typography";
import Button from "@m3/buttons/Button";
import IconButton from "@m3/icon_buttons/IconButton";
import Icon from "@m3/assets/icons/Icon";
// import {ImageBaseURL} from "@/config";

export default function ProductCardHorizontal(props) {
    const {product, isHorizontal} = props
    useEffect(() => {
        console.log(product)
    }, []);
    // const product = item?.attributes
    return (
        <Link href={`/product/${product.slug}`}>

            <div
                className={"bg-surface-container-light dark:bg-surface-container-dark rounded-[24px]  pb-6  "}>
                {/*<div className={"px-6 pt-6 pb-4"}>*/}
                {/*{product.spec.map((item, i) => i < 3 && <div key={i}*/}
                {/*                                             className={`border border-outline-light dark:border-outline-dark rounded-full justify-center inline-flex w-[48px] h-[48px]  ml-2 items-center`}>*/}
                {/*    /!*<p className={`text-label-small sm:text-label-medium ml-1 text-secondary-light dark:text-secondary-light`}>*!/*/}
                {/*    /!*    {item.key.title + " : "}*!/*/}
                {/*    /!*</p>*!/*/}
                {/*    <p className={`text-label-small sm:text-label-medium  text-secondary-light dark:text-secondary-light`}>*/}
                {/*        {item.key.values.find(k => k._id === item.value).title}*/}
                {/*    </p>*/}
                {/*</div>)}*/}

                {/*</div>*/}
                <div className={"bg-secondary-container-light dark:bg-secondary-container-dark rounded-t-[24px] py-2 px-2 "}>
                    <div className={"grid grid-cols-2 h-[360px] overflow-hidden  rounded-[16px] grid-rows-2 gap-1"}>
                        <div className={"row-span-1 col-span-2 overflow-hidden relative w-full "}>
                            <Image quality={100} layout={'fill'} width={1080} height={720}
                                   className=" w-full object-cover"
                                   src={"/data" + product?.thumbnail.url} alt=""/>
                        </div>
                        {product.images[0] && <div className={"row-span-1 col-span-1 overflow-hidden relative w-full "}>
                            <Image quality={100} layout={'fill'}
                                   className="  w-full object-cover"
                                   src={"/data" + product?.images[0].url} alt=""/>
                        </div>}
                        {product.images[1] && <div className={"row-span-1 col-span-1 overflow-hidden relative w-full "}>
                            <Image quality={100} layout={'fill'}
                                   className=" w-full object-cover"
                                   src={"/data" + product.images[1].url} alt=""/>
                        </div>}
                    </div>
                </div>
                <div className={"px-6"}>
                    <div className={"w-full relative pt-5"}>
                        <Typography type={"h4"}
                                    className=" !text-title-large font-extrabold text-on-surface-light dark:text-on-surface-dark ">
                            {product.title}
                        </Typography>
                        <div
                            className={" flex items-center w-fit text-label-large font-normal rounded-[8px] text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            {product.category.title}
                        </div>
                    </div>
                    <p className={"w-full  text-label-large mt-4 font-extrabold text-custom-color-3-light dark:text-on-surface-dark text-right"}>
                        {product.price}
                        <span className={" text-label-large mr-1"}>
                        تومان
                            </span>
                    </p>
                    <div className={"border-t flex justify-end border-outline-variant-light mt-4 pt-6"}>
                        <Button variant={"filled"}>
                            مشاهده محصول
                        </Button>
                    </div>
                </div>
                {/*<div className={"px-4 pt-4"}>*/}


                {/*<p*/}
                {/*    className={"text-body-large font-bold text-tertiary-light dark:text-tertiary-dark flex items-center w-fit rounded-[8px]   mt-2  whitespace-normal text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*/}

                {/*    /!*{parseFloat(product.price).toLocaleString()}*!/*/}
                {/*</p>*/}


                {/*<div*/}
                {/*    className={"pb-6 pt-4 mt-4 border-t border-outline-variant-light dark:border-outline-variant-dark flex justify-center items-center space-x-reverse space-x-2"}>*/}
                {/*    <div*/}
                {/*        className={"px-1 flex items-center rounded-full text-primary-light dark:text-primary-dark text-label-large font-medium"}>*/}

                {/*       */}
                {/*        <span className={"text-label-small mr-1"}>*/}
                {/*            تومان*/}
                {/*        </span>*/}
                {/*    </div>*/}
                {/*    <Button icon={"link"} variant={"filled"}>*/}
                {/*        مشاهده محصول*/}
                {/*    </Button>*/}
                {/*</div>*/}
                {/*</div>*/}


            </div>
        </Link>
    )
}
