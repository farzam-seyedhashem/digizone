import React from "react";
import Image from 'next/legacy/image'
import Link from 'next/link'
import Typography from "@m3/assets/typography/Typography";
import ConvertDate from "@/app/(frontend)/_helper/ConvertDate";
import TruncText from "@/app/(frontend)/_helper/TruncText";
import {ContentConvertor} from "@/app/(frontend)/_helper/ContentConvertor";
// import {ImageBaseURL} from "@/config";
// import ConvertDate from "@/helpers/ConvertDate";
// import TruncText from "@/helpers/TruncText";

export default function PostCardHorizontal(props) {
    const {post,id, isHorizontal} = props
    // let pContent = "";
    //
    // post.description && JSON.parse(post.description).blocks.map((item, i) => {
    //     // console.log('l',`${convertContentType(item)}`)
    //
    //     item?.data?.items?.map((itemd, i) => {
    //         pContent += itemd
    //     })
    //
    //     if (item?.data?.text) {
    //         pContent += item.data.text.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ')
    //     }
    // })
    return (
        <Link href={`/post/${post.slug}`}>

            <div
                className={" w-full h-full p-4 relative bg-surface-container-highest-light dark:bg-surface-container-highest-dark rounded-[12px] overflow-hidden"}>
                <div className={"flex pb-3"}>
                    <div className={`flex-1 `}>
                        <Typography type={"h4"}
                                    className="ml-6 font-bold w-10/12 !text-title-large  text-on-surface-light dark:text-on-surface-dark ">
                            {post.title}
                        </Typography>
                        <p
                            className={"text-label-medium font-medium flex items-center w-fit rounded-[8px]   mt-1  whitespace-normal text-primary-light dark:text-primary-dark"}>
                            {/*{post.category.data.attributes.title}*/}
                        </p>
                        <p className={"text-body-large  flex items-center w-fit rounded-[8px]   mt-2  whitespace-normal text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                            <TruncText charNumber={140}>
                                {ContentConvertor(post?.content || post?.desc || post?.descr || post?.description)}

                                {/*{pContent}*/}
                            </TruncText>
                        </p>

                    </div>
                    <div className={"h-[100px] w-[100px]"}>
                         <Image quality={100} layout={'responsive'} width={720} height={720}
                                   className="rounded-[12px] w-full object-cover"
                                   src= {`/data${post.thumbnail.url}`} alt=""/>
                    </div>
                </div>
                <div className={"flex mt-4 justify-between"}>
                    <div
                        className={`w-fit h-[40px] items-center px-4 rounded-[12px] dark:bg-surface-container-dark bg-surface-container-light flex  gap-0`}>
                        <div className={` flex ml-2 items-center`}>
                            <p className={`text-label-small sm:text-label-medium ml-1 text-on-surface-variant-light dark:text-on-surface-variant-dark`}>
                                تاریخ انتشار :
                            </p>
                            <p className={`text-label-small sm:text-label-medium  text-on-surface-light dark:text-on-surface-dark`}>
                               <ConvertDate date={post.createdAt}/>
                            </p>
                        </div>

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
