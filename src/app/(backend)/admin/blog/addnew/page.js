import Button from "@m3/buttons/Button";
import {store} from '@backend/_controller/BlogController'
import {redirect} from 'next/navigation'
import {revalidateTag} from "next/cache";
import {store as storeImage} from "@backend/_controller/ImageController";
import Editor from "@admin/Editor";

export default function Page() {

    async function createInvoice(formData) {
        'use server'
        console.log("HELLO");
        let image = await storeImage(formData.getAll('file')[0])
        // console.log(formData);
        const rawFormData = {
            title: formData.get('title'),
            slug: formData.get('slug'),
            thumbnail: image.id,
            content: formData.get('content'),
        }
        console.log(rawFormData)
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
                        <input required name={'title'} placeholder={"عنوان مقاله"}
                               className={"col-span-4 text-on-surface-light border border-outline-light rounded-[8px] "}/>
                        <input required name={'slug'} placeholder={"لینک"}
                               className={"col-span-4 text-on-surface-light border border-outline-light rounded-[8px] "}/>
                        <div className={"col-span-4"}>
                            <Button icon={"upload"} variant={"outlined"} className={"flex w-fit"} htmlFor={"imageFile"}
                                    component={"label"} type={"button"}>
                                آپلود عکس
                            </Button>
                            <input required className={"hidden"} id={"imageFile"}
                                   name="file" type="file" multiple={false}/>

                        </div>
                        {/*<textarea required name={'content'} minLength={12} placeholder={"متن"}*/}
                        {/*          className={"h-[400px] col-span-12 text-on-surface-light border border-outline-light rounded-[8px] "}/>*/}
                       <div className={"col-span-12"}>
                        <Editor name={"content"}/>
                       </div>
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