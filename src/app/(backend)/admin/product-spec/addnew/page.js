import Button from "@m3/buttons/Button";
import {store} from '@backend/_controller/ProductSpecController'
import {redirect} from 'next/navigation'
import {revalidateTag} from "next/cache";
import {store as storeImage} from "@backend/_controller/ImageController";
import {index} from "@backend/_controller/CategoryController";

async function getCategories() {
    'use server'
    return JSON.parse(await index())
}

export default async function Page() {
    const getCategoriesList = getCategories()
    const [categories] = await Promise.all([getCategoriesList])

    async function createInvoice(formData) {
        'use server'
        console.log("HELLO");
        // let image = await storeImage(formData.getAll('file')[0])
        // console.log(formData);
        // const cat = formData.getAll('categories[]')
        // console.log("-------------",cat,formData,typeof cat)
        let values = []
        formData.get('values').split("-").map(item=>values.push({title:item}))
        console.log(values)

        const rawFormData = {
            title: formData.get('title'),
            categories: formData.getAll('categories'),
            values: values,
            isShowFilter: formData.get('isShowFilter'),
        }
        // console.log(rawFormData)
        await store(rawFormData)
        // revalidateTag("blogPosts")
        redirect(`/admin/product-spec`)
        // console.log();
        // let newNews = new Blog(rawFormData);
        // await newNews.save();

    }


    return (
        <div className={" bg-surface-light h-screen  w-full"}>
            <div className={"container pt-6 mx-auto"}>
                <div className="px-6 py-6 bg-surface-container-high-light w-full rounded-[24px]">
                    <h1 className="text-title-large font-bold ">
                        افزودن مشخصات محصول
                    </h1>
                    <form action={createInvoice} className={"mt-4 gap-4 grid grid-cols-12 "}>
                        <input required name={'title'} placeholder={"عنوان"}
                               className={"col-span-4 text-on-surface-light border border-outline-light rounded-[8px] "}/>
                        <div className={"block col-span-12 space-y-2"}>
                            {categories.length!==0&&categories.map(category =>
                                <div key={category.id} className={"flex items-center"}>
                                    <input id={category.id} value={category._id} name={"categories"}
                                           type={"checkbox"}/>
                                    <label className={"mr-2"} htmlFor={category.id}>{category.title}</label>
                                </div>
                            )}
                        </div>

                        <div className={"flex col-span-4 items-center"}>
                            <input id={"showfilter"} value={true} name={"isShowFilter"}
                                   type={"checkbox"}/>
                            <label className={"mr-2"} htmlFor={"showfilter"}>{"نمایش به عنوان فیلتر"}</label>
                        </div>
                        <textarea required name={'values'} placeholder={"متن (لطفا - موارد را جدا سازی کنید )"}
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