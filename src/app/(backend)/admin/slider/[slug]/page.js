import Button from "@m3/buttons/Button";
import {update, getById} from '@/app/_controller/SliderController'
import {store as storeImage} from '@/app/_controller/ImageController'
import {redirect} from 'next/navigation'
import {revalidateTag} from "next/cache";
async function getData(slug) {
    'use server'
    console.log(slug)
    return await getById(slug)
}
export default async function Page({params}) {
    const data = await getData(params.slug)

    async function createInvoice(formData) {
        'use server'
        let image = null
        if (formData.getAll('file')[0].size !== 0) {
            // console.log("mmmlewmflwe;mll",formData.getAll('file')[0])
            image = await storeImage(formData.getAll('file')[0])
        }
        const rawFormData = {
           id:params.slug,
            title: formData.get('title'),
            description: formData.get('content'),
            image: image? image.id : data.image.id
        }
        await update(rawFormData)
        revalidateTag("sliderSlides")
        redirect(`/admin/slider`)
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
                        <input defaultValue={data?.title?data.title:""} name={'title'} placeholder={"عنوان مقاله"}
                               className={"col-span-4 text-on-surface-light border border-outline-light rounded-[8px] "}/>
                        <textarea defaultValue={data?.description?data.description:""} name={'content'} minLength={12} placeholder={"متن"}
                                  className={"h-[400px] col-span-12 text-on-surface-light border border-outline-light rounded-[8px] "}/>
                        {/*<form action={createInvoice} method="post">*/}
                        <input  className={"border border-primary-light text-primary-light rounded-full px-4 h-[40px]"}
                               name="file" type="file" multiple={false}/>

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