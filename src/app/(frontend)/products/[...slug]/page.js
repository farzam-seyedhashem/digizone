import {cache} from "react";
import {index as getAllProducts} from "@backend/_controller/ProductController";
import ProductCardHorizontal from "@website/ProductCardHorizontal";
import {index as getAllProductCategories} from "@backend/_controller/CategoryController";
import {index as getAllSpecs} from "@backend/_controller/ProductSpecController";
import FilterChips from "@m3/chips/FilterChips";
import Checkbox from "@m3/checkboxes/Checkbox";
import Button from "@m3/buttons/Button";
import IconButton from "@m3/icon_buttons/IconButton";
import Link from "next/link";

const getLastProduct = cache(async (searchParams) => {
    // const c = new URLSearchParams(searchParams)
    return JSON.parse(await getAllProducts({searchParams}))
})
const getCategories = cache(async () => {
    return JSON.parse(await getAllProductCategories({topCategory: null, pageNumber: 1, per_page: 12}))
})
const getSpecs = cache(async () => {
    return JSON.parse(await getAllSpecs({topCategory: null, pageNumber: 1, per_page: 12}))
})
export default async function ProductPage({params,searchParams}) {
    const lp = await getLastProduct(searchParams)
    console.log(params)
    const [products] = await Promise.all([lp])

    const categories = await getCategories()
    const specs = await getSpecs()
    return (
        <div className={" bg-surface-light dark:bg-surface-dark"}>
            <div
                className={"relative py-3 px-6 border-b border-outline-variant-light dark:border-outline-variant-dark"}>
                <div>
                    <Link href={"/products/"}
                          className={`h-[48px] text-title-small font-bold text-on-surface-light dark:text-on-surface-dark px-6 items-center ml-2 rounded-[8px] inline-flex   bg-surface-container-high-light dark:bg-surface-container-high-dark`}>
                        همه محصولات
                    </Link>
                    {categories.map(category => <Link href={"/products/" + category.slug} key={category._id}
                                                      className={`text-title-small font-medium h-[48px] text-on-surface-light dark:text-on-surface-dark px-6 items-center ml-2 rounded-[8px] inline-flex`}>
                        {category.title}
                    </Link>)}
                </div>
                <div className={"absolute left-6 top-1/2 transform -translate-y-1/2"}>
                    <IconButton>
                        filter_alt
                    </IconButton>
                </div>
            </div>
            <div className={"px-6 py-6 grid grid-cols-12 gap-4"}>
                <div className={"col-span-9 grid grid-cols-12 gap-4"}>
                    {products.map(product =>
                        <div key={product._id} className={"col-span-2"}>
                            <ProductCardHorizontal product={product}/>
                        </div>
                    )}
                </div>

                <div className={"col-span-3"}>
                    <div
                        className={"rounded-[24px] bg-surface-container-high-light dark:bg-surface-container-high-dark px-6 py-6"}>
                        <h3 className={"mb-6 text-title-large font-black"}>
                            دسته بندی ها
                        </h3>
                        {categories.map(category => <div key={category._id}
                                                         className={"px-4 h-[32px] items-center ml-2 mb-2 rounded-full inline-flex border border-outline-light dark:border-outline-dark bg-surface-container-low-light dark:bg-surface-container-low-dark"}>
                            {category.title}
                        </div>)}
                    </div>
                    <form action="/products" method="GET"
                          className={"mt-6 rounded-[16px] bg-surface-container-high-light dark:bg-surface-container-high-dark  pt-6 pb-6"}>

                        <h3 className={"px-4 mb-6 text-title-large font-black"}>
                            فیلتر
                        </h3>
                        {specs.map(spec => <div className={"mb-2"} key={spec._id}>
                            <h3 className={"px-4 mb-2 text-title-small text-on-surface-light dark:text-on-surface-dark  font-bold"}>
                                {spec.title}
                            </h3>
                            {spec.values.map(value =>
                                <Checkbox
                                    isCheck={Array.isArray(searchParams[spec._id]) ? searchParams[spec._id].findIndex(item => item === value._id) !== -1 : searchParams[spec._id] === value._id}
                                    value={value._id} name={spec._id} color={"primary"} label={value.title}
                                    key={value._id}/>
                            )}
                        </div>)}
                        <div className={"space-x-2 space-x-reverse flex items-center justify-end px-4 "}>
                            <Button variant={"outlined"}>
                                پاک کردن فیلتر ها
                            </Button>
                            <Button variant={"filled"} icon={"filter_alt"}>
                                اعمال فیلتر
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}