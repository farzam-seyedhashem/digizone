import Button from "@m3/buttons/Button";
import {store} from '@/app/_controller/BlogController'
import { redirect } from 'next/navigation'
import {revalidateTag} from "next/cache";

export default function Page() {

    async function createInvoice(formData) {
        'use server'
        console.log("HELLO");
        // console.log(formData);
        const rawFormData = {
            title: formData.get('title'),
            slug: formData.get('link'),
            content: formData.get('content'),
        }
        await store(rawFormData)
        revalidateTag("blogPosts")
        redirect(`/admin/blog`)
        // console.log();
        // let newNews = new Blog(rawFormData);
        // await newNews.save();

    }


    return (
        <div className={" bg-surface-light h-screen  w-full"}>
            <div className={"container pt-6 mx-auto"}>
                <div className="px-6 py-6 bg-surface-container-high-light w-full rounded-[24px]">
                    <h1 className="text-title-large font-bold ">
                        افزودن مقاله
                    </h1>
                    <form action={createInvoice} className={"mt-4 gap-4 grid grid-cols-12 "}>
                        <input name={'title'} placeholder={"عنوان مقاله"}
                               className={"col-span-4 text-on-surface-light border border-outline-light rounded-[8px] "}/>
                        <input name={'link'} placeholder={"لینک"}
                               className={"col-span-4 text-on-surface-light border border-outline-light rounded-[8px] "}/>
                        <textarea name={'content'} minLength={12} placeholder={"متن"}
                                  className={"h-[400px] col-span-12 text-on-surface-light border border-outline-light rounded-[8px] "}/>
                        <div className={"flex col-span-12 justify-end"}>
                            <Button type={"submit"} icon={"save"} variant={"filled"}>
                                ذخیره
                            </Button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}