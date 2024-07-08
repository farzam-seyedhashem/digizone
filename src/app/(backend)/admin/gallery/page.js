import Link from "next/link";
import IconButton from "../../../components/m3_design/icon_buttons/IconButton";
import Button from "@m3/buttons/Button";
import {index,store} from "@/app/_controller/ImageController"
import {revalidateTag} from "next/cache";
import {redirect} from "next/navigation";
// import {store} from "@/app/_controller/BlogController";
async function getData() {
    'use server'
    return await index()
}

export default async function Page() {
    const data = await getData()
    async function createInvoice(data) {
        'use server'
        await store(data)
    }
    return (
        <div className={"bg-surface-light dark:bg-surface-dark container mx-auto h-screen "}>
            <div
                className={"sticky items-center flex justify-between border-b border-outline-variant-light  top-0 h-[64px]"}>
                <h1 className={"text-title-medium font-bold text-on-surface-light"}>
                    مقالات
                </h1>
                <Link href={"/admin/blog/addnew"}>
                    <Button variant={"filled"} icon={"add"} type={"filled"}>
                        ایجاد
                    </Button>
                </Link>
            </div>
            {/*<form action={createInvoice} method="post">*/}
            {/*    <input name="file" type="file" multiple={false}/>*/}
            {/*    <button type="submit">Upload</button>*/}
            {/*</form>*/}

            <div
                className="flex mt-[40px] items-center justify-center">

                <div
                    className="border rounded-[24px] overflow-hidden dark:border-outline-dark border-outline-light overflow-scroll h-[600px] w-full flex pt-0 px-0 justify-center">

                    <div className={"w-full"}>
                        <div
                            className={"overflow-hidden rounded-[0px]  dark:border-outline-dark border-outline-light"}>
                            <table
                                className={" w-full mt-2  border-collapse"}>
                                <thead className={" *:border-b *:border-outline-variant-light"}>
                                <tr className={"text-right *:font-medium *:text-title-small *:text-on-surface-variant-light dark:*:text-on-surface-variant-dark *:px-4 *:h-[48px] bg-surface-light dark:bg-surface-dark"}>
                                    <th>عنوان</th>
                                    <th>زمان ایجاد</th>
                                    <th>آخرین تغییرات</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody
                                    className={"*:text-on-surface-variant-light dark:*:text-on-surface-variant-dark dark:hover:*:text-on-secondary-container-dark hover:*:text-on-secondary-container-light dark:hover:*:bg-secondary-container-dark hover:*:bg-secondary-container-light  *:border-b dark:*:border-outline-variant-dark *:border-outline-variant-light"}>
                                {data.map(image => <tr key={image.id} className={"*:px-4 *:h-[56px] "}>
                                    <td className={"font-medium"}>{image.title}</td>

                                    <td>{image.url}</td>
                                    <td>{new Date(image.createdAt).toLocaleDateString('fa-IR')}</td>
                                    <td>{new Date(image.createdAt).toLocaleDateString('fa-IR')}</td>
                                    <td>
                                        <div className={"flex items-center space-x-reverse space-x-1 justify-end"}>
                                            <Link href={"/page-builder"}>
                                                <IconButton>
                                                    edit
                                                </IconButton>
                                            </Link>
                                            <Link href={"/page-builder"}>
                                                <IconButton className={"text-error-light"}>
                                                    delete
                                                </IconButton>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}