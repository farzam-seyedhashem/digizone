import {index} from "@backend/_controller/BlogController";
import Image from 'next/image'
import Button from "@m3/buttons/Button";
import Link from "next/link";
import Typography from "@m3/assets/typography/Typography";
import PostCardHorizontal from "@website/PostCardHorizontal";

async function getData() {
    'use server'
    return JSON.parse(await index({page:1,pageNumber:12}))
}

export default async function BlogPage() {
    const data = await getData()
    return (
        <div className={" min-h-screen bg-surface-light dark:bg-surface-dark px-4 md:px-6 py-6"}>
            <Typography type={"h2"}
                        className={"text-display-small text-on-surface-light dark:text-on-surface-dark"}>
                لیست بلاگ ها
            </Typography>
            <Typography type={"h3"}
                        className={"mt-1 mb-4 font-medium dark:text-on-surface-variant-dark text-on-surface-variant-light  "}>
                لیست بلاگ های دیجی زون
            </Typography>
            {/*<div>*/}
            {/*    <Link href={"/blog"}*/}
            {/*          className={`ml-2 items-center inline-flex ${selected === 0 ? "text-on-secondary-container-light dark:text-on-secondary-container-dark bg-secondary-container-light dark:bg-secondary-container-dark pr-2 pl-4" : "border border-outline-light dark:border-outline-dark text-on-surface-variant-light dark:text-on-surface-variant-dark px-4"} h-[32px]  font-medium text-label-large  rounded-[8px] `}>*/}
            {/*        {selected === 0 ? <Icon size={18}*/}
            {/*                                className={` ml-2 text-on-secondary-container-light dark:text-on-secondary-container-dark`}*/}
            {/*                                type={"outline"}>*/}
            {/*            check*/}
            {/*        </Icon> : <div className={"h-[18px]"}/>}*/}
            {/*        همه دسته بندی ها*/}
            {/*    </Link>*/}
            {/*    {categories.data.map((item, i) =>*/}
            {/*        <Link key={i} href={`/blog/${item.id}`}*/}
            {/*              className={`ml-2 items-center inline-flex ${selected === 1 ? "text-on-secondary-container-light dark:text-on-secondary-container-dark bg-secondary-container-light dark:bg-secondary-container-dark pr-2 pl-4" : "border border-outline-light dark:border-outline-dark text-on-surface-variant-light dark:text-on-surface-variant-dark px-4"} h-[32px]  font-medium text-label-large  rounded-[8px] `}>*/}
            {/*            {selected !== 0 ? <Icon size={18}*/}
            {/*                                    className={` ml-2 text-on-secondary-container-light dark:text-on-secondary-container-dark`}*/}
            {/*                                    type={"outline"}>*/}
            {/*                check*/}
            {/*            </Icon> : <div className={"h-[18px]"}/>}*/}
            {/*            {item.attributes.title}*/}
            {/*        </Link>*/}
            {/*    )}*/}
            {/*</div>*/}
            <div className={"grid md:grid-cols-4 grid-cols-1 mt-4 gap-4"}>
                {data.data.map((item, i) =>
                    <PostCardHorizontal post={item} key={i}/>
                )}
            </div>
        </div>

    )
}