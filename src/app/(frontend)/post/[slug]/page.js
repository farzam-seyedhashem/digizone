import {index} from "@backend/_controller/BlogController";
import Image from 'next/image'
import Button from "@m3/buttons/Button";

async function getData() {
    'use server'
    return await index()
}

export default async function BlogPage() {
    const data = await getData()
    return (
        <div className={"min-h-screen bg-surface-light dark:bg-surface-dark"}>
            <div className="container  mx-auto pt-[40px]">
                <div className={"grid grid-cols-4 gap-4"}>
                    {data.map((post, index) => <div
                        className={" border border-outline-light dark:border-outline-dark bg-surface-container-low-light dark:bg-surface-container-low-dark rounded-[24px] overflow-hidden "}
                        key={post.id}>
                        <div>
                            <Image objectFit={"contain"} style={{
                                height: "300px",
                                objectFit: "cover"
                            }} width={1920}
                                   height={200}
                                   sizes={"300px"}
                                   src={"/data" + post.thumbnail.url} alt="Image"/>
                        </div>
                        <div className={"px-4 py-4 "}>
                            <h3 className={"font-bold text-title-large text-on-surface-light dark:text-on-surface-dark "}>
                                {post.title}
                            </h3>
                            <p className={"text-on-surface-light dark:text-on-surface-dark mt-2 text-body-medium"}>
                                {post.content}
                            </p>
                            <div className={"pt-6 pb-2 flex items-center justify-end"}>
                                <Button variant={"tonal"}>
                                    خواندن مقاله
                                </Button>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}