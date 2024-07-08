import Button from "@m3/buttons/Button";
import {store} from '@backend/_controller/ProductController'
import {redirect} from 'next/navigation'
import {revalidateTag} from "next/cache";
import {store as storeImage} from "@backend/_controller/ImageController";
import {index as categoryIndex} from "@backend/_controller/CategoryController";
import {index as specIndex} from "@backend/_controller/ProductSpecController";
import Specification from "@admin/product/Specification";
import {spec} from "node:test/reporters";
import {cache} from "react";

const getCategories = cache( async () => {
    'use server'
    return JSON.parse(await categoryIndex())
})

export default async function Page() {
    const getCategoriesList = getCategories()
    const [categories] = await Promise.all([getCategoriesList])
console.log(categories)
    async function createInvoice(formData) {
        'use server'
        console.log("HELLO");
        // let image = await storeImage(formData.getAll('file')[0])
        // console.log(formData);
        // const cat = formData.getAll('categories[]')
        // console.log("-------------",cat,formData,typeof cat)
        let specs = []
        formData.getAll('specs').map(item=>specs.push(JSON.parse(item)))
        const rawFormData = {
            title: formData.get('title'),
            slug: formData.get('slug'),
            category: formData.get('category'),
            spec: specs,
            content: formData.get('content'),
        }
        console.log(rawFormData)
        // console.log(rawFormData)
        await store(rawFormData)
        // revalidateTag("blogPosts")
        redirect(`/admin/product`)
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
                        <input required name={'title'} placeholder={"عنوان محصول"}
                               className={"col-span-4 text-on-surface-light border border-outline-light rounded-[8px] "}/>
                        <input required name={'slug'} placeholder={"slug"}
                               className={"col-span-4 text-on-surface-light border border-outline-light rounded-[8px] "}/>
                       <div className={"col-span-8"}>
                        <Specification categories={categories} />
                       </div>
                        <textarea required name={'content'} placeholder={"متن"}
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