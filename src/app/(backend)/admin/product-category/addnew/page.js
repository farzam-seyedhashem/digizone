import Button from "@m3/buttons/Button";
import {store} from '@backend/_controller/SliderController'
import {store as storeImage} from '@backend/_controller/ImageController'
import {redirect} from 'next/navigation'
import {revalidateTag} from "next/cache";

export default function Page() {
    async function createInvoice(formData) {
        'use server'
        const image = await storeImage(formData.getAll('file')[0])
        const rawFormData = {
            title: formData.get('title'),
            description: formData.get('content'),
            image: image.id
        }
        await store(rawFormData)
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
                        <input name={'title'} placeholder={"عنوان مقاله"}
                               className={"col-span-4 text-on-surface-light border border-outline-light rounded-[8px] "}/>
                        <textarea name={'content'} minLength={12} placeholder={"متن"}
                                  className={"h-[400px] col-span-12 text-on-surface-light border border-outline-light rounded-[8px] "}/>
                        {/*<form action={createInvoice} method="post">*/}
                        <input className={"border border-primary-light text-primary-light rounded-full px-4 h-[40px]"} name="file" type="file" multiple={false}/>

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