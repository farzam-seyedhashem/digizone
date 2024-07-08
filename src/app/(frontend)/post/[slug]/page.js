import {getBySlug, index} from "@backend/_controller/BlogController";
import Image from 'next/image'
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
import {convertContentType} from "@/app/(frontend)/_helper/Convertor";

async function getData(slug) {
    'use server'
    return JSON.parse(await getBySlug(slug))
}

export default async function BlogPage({params}) {
    const post = await getData(params.slug)
    console.log(post)
    return (
        <div className={"min-h-screen bg-surface-light dark:bg-surface-dark"}>
            <div className="container  mx-auto pt-6">
                <h1 className={"text-headline-large font-black mb-4 "}>
                    {post.title}
                </h1>
                <div className={"mb-8 items-center space-y-2 justify-between"}>
                    <p className={"text-label-large flex items-center  font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                        <Icon className={"ml-2"} size={20}>
                            calendar_month

                        </Icon>
                        تاریخ انتشار :
                        <span className={"mr- 2text-on-surface-light dark:text-on-surface-dark"}>
                        {new Date(post.createdAt).toLocaleDateString("fa-IR")}
                    </span>
                    </p>
                    <p className={"text-label-large flex items-center font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark "}>
                        <Icon className={"ml-2"} size={20}>
                            update
                        </Icon>
                        آخرین بروز رسانی :
                        <span className={"mr-2 text-on-surface-light dark:text-on-surface-dark "}>
                        {new Date(post.updatedAt).toLocaleDateString("fa-IR")}
                    </span>
                    </p>
                </div>
                <div className={"relative w-full max-w-4xl rounded-[24px] h-[600px]"}>
                    <Image objectFit={"cover"} fill alt={"f"} src={"/data" + post.thumbnail.url}/>
                </div>
                <div className={"text-body-large font-normal mt-4 text-on-surface-light dark:text-on-surface-dark"}>
                    {post.content && JSON.parse(post.content).blocks.map((item, i) => {
                        return convertContentType(item)
                    })}
                </div>

            </div>
        </div>
    )
}