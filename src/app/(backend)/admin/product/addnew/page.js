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
import Editor from "@admin/Editor";
import Link from "next/link";
import IconButton from "@m3/icon_buttons/IconButton";
import UploadImage from "@admin/UploadImage";
import UploadMultipleImage from "@admin/UploadMultipleImage";

const getCategories = cache(async () => {
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
        formData.getAll('specs').map(item => specs.push(JSON.parse(item)))
        const rawFormData = {
            title: formData.get('title'),
            slug: formData.get('slug'),
            thumbnail: JSON.parse(formData.get("thumbnail")),
            images: JSON.parse(formData.get("imagesUploaded")),
            category: formData.get('category'),
            spec: specs,
            price: formData.get('price'),
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
        <div>
            <form action={createInvoice} method="POST">

                <div
                    className={"w-full items-center px-2 h-[64px] flex border-b border-outline-light dark:border-outline-dark "}>
                    <Link href={"/admin/product"}>
                        <IconButton className={""}>
                            arrow_forward
                        </IconButton>
                    </Link>
                    <h1 className="mr-2 flex-1 text-title-medium font-black">
                        اضافه کردن محصول
                    </h1>

                    <Button type={"submit"} icon={"save"} variant={"filled"}>
                        ذخیره
                    </Button>
                </div>


                <div className={"px-6 pt-6 mx-auto"}>
                    <div className="  w-full rounded-[24px]">

                        <div className={" grid grid-cols-12 "}>
                            <div className={"grid grid-cols-12 gap-4 col-span-12"}>
                                <div className={"col-span-4"}>
                                    <label className={'text-on-surface-light font-bold mb-1 text-title-small block'}>
                                        عنوان محصول
                                    </label>
                                    <input required name={'title'}
                                           placeholder={"عنوان محصول"}
                                           className={"w-full text-on-surface-light border border-outline-light dark:border-outline-dark bg-transparent rounded-[8px] "}/>
                                </div>
                                <div className={"col-span-4"}>
                                    <label className={'text-on-surface-light font-bold mb-1 text-title-small block'}>
                                        عنوان محصول
                                    </label>
                                    <input required name={'slug'} placeholder={"slug"}
                                           className={"w-full text-on-surface-light border border-outline-light bg-transparent rounded-[8px] "}/>
                                </div>
                                <div className={"col-span-4"}>
                                    <label className={'text-on-surface-light font-bold mb-1 text-title-small block'}>
                                        قیمت محصول
                                    </label>
                                    <input required name={'price'} placeholder={"قیمت"}
                                           className={"w-full text-on-surface-light border border-outline-light bg-transparent rounded-[8px] "}/>
                                </div>
                            </div>
                            <div className={"pt-6 mb-4 col-span-4"}>
                                <UploadImage name={"file"} label={"بارگذاری عکس اصلی"}/>
                            </div>
                            <div className={"pb-6 col-span-12"}>
                                <UploadMultipleImage name={"images"} label={"بارگذاری عکس اصلی"}/>
                            </div>

                            <div className={"col-span-12"}>
                                <h3 className="text-on-surface-light dark:text-on-surface-dark font-black text-title-small ">
                                    انتخاب دسته بندی و مشخصات محصول
                                </h3>
                                <p className={"mb-3 max-w-5xl text-on-surface-variant-light text-body-large"}>
                                    در پایین دسته بندی محصول را انتخاب نمایید بر اساس آن ویژگی های آن دسته بندی نمایش
                                    داده
                                    میشود و میتوانید ویژگی های محصول مانند نوع cpu و یا اندازه رم را انتخاب نمایید.
                                    اگر هنوز ویژگی های محصولات و یا دسته بنده ها را وارد نکرده اید ابتدا به بخش مربوط به
                                    <Link href={"/admin/product-category"}
                                          className={'font-medium text-primary-light mx-1 hover:underline'}>
                                        دسته بندی محصول
                                    </Link>
                                    و یا
                                    <Link href={"/admin/product-spec"}
                                          className={'font-medium text-primary-light mx-1 hover:underline'}>
                                        مشخصات محصولات
                                    </Link>
                                    بروید و سپس محصول جدید اضافه کنید
                                </p>
                                <Specification categories={categories}/>
                            </div>
                            <div
                                className={"col-span-12 my-10 h-[1px] bg-outline-variant-light w-full mx-auto"}/>
                            <div className={"col-span-12"}>
                                <div>
                                    <h3 className="text-on-surface-light dark:text-on-surface-dark font-black text-title-small ">
                                        توضیحات محصول
                                    </h3>
                                    <p className={"mb-4 max-w-5xl text-on-surface-variant-light text-body-large"}>
                                        شما میتوانید توضیحات محصولات خود را در این قسمت وارد نمایید.
                                    </p>
                                </div>
                                <Editor name={"content"}/>
                            </div>

                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}