import Button from "@m3/buttons/Button";
import {index, update} from '@backend/_controller/CategoryController'
import {store as storeImage} from '@backend/_controller/ImageController'
import {redirect} from 'next/navigation'
import {revalidateTag} from "next/cache";
import {getById} from '@backend/_controller/CategoryController'
import UploadImage from "@admin/UploadImage";

async function getTopCategories() {
    'use server'
    return JSON.parse(await index({topCategories: null}))
}

async function getCategory(id) {
    return JSON.parse(await getById(id))
}


export default async function Page({params}) {
    const data = await getTopCategories()
    console.log(data)
    const category = await getCategory(params.slug)

    async function createInvoice(formData) {
        'use server'
        console.log("lweknfwlkenfklwe",formData.get('top-category'))
        // const image = await storeImage(formData.getAll('file')[0])
        const rawFormData = {
            id: formData.get('id'),
            title: formData.get('title'),
            slug: formData.get('slug'),

            content: formData.get('content'),
            thumbnail: JSON.parse(formData.get("thumbnail"))._id,
        }
        if (formData.get('top-category')){
            rawFormData.topCategory = formData.get('top-category')
        }else{
            rawFormData.topCategory = null
        }
        console.log(rawFormData)
        await update(rawFormData)
        // revalidateTag("sliderSlides")
        redirect(`/admin/product-category`)
    }

    // async function createInvoice(data) {
    //     'use server'
    //
    // }


    return (
        <div className={" bg-surface-light h-screen  w-full"}>
            <div className={"container pt-6 mx-auto"}>
                <div className="px-6 py-6 bg-surface-container-high-light w-full rounded-[24px]">
                    <h1 className="text-title-large font-bold ">
                        افزودن اسلاید جدید
                    </h1>
                    <form method={"post"} action={createInvoice} className={"mt-4 gap-4 grid grid-cols-12 "}>
                       <input type="hidden" value={category._id} name={"id"}/>
                        <input value={category.title} name={'title'} placeholder={"عنوان دسته"}
                               className={"col-span-4 text-on-surface-light border border-outline-light rounded-[8px] "}/>
                        <input value={category.slug} name={'slug'} placeholder={"slug"}
                               className={"col-span-4 text-on-surface-light border border-outline-light rounded-[8px] "}/>
                        <textarea value={category.description} name={'content'} minLength={12} placeholder={"توضیحات"}
                                  className={"h-[400px] col-span-12 text-on-surface-light border border-outline-light rounded-[8px] "}/>
                        {/*<form action={createInvoice} method="post">*/}
                        {/*<input className={"border border-primary-light text-primary-light rounded-full px-4 h-[40px]"}*/}
                        {/*       name="file" type="file" multiple={false}/>*/}
                        <div className={"col-span-12"}>
                            <UploadImage name={"file"} label={"بارگذاری عکس اصلی"} defImage={category.thumbnail}/>
                        </div>
                        <div className={"col-span-12"}>
                            <label className={"block font-medium text-title-small"}>
                                دسته بندی مادر
                            </label>
                            <select defaultValue={category.topCategory} name={"top-category"} dir={"rtl"}
                                    className={"rounded-full col-span-4"}>
                                <option label={"-"} value={null}></option>
                                {data.map(item => <option key={item.id} label={item.title} value={item.id}/>)}
                            </select>
                        </div>
                        {/*</form>*/}
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