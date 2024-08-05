'use server'
import Image from "next/image";
import {index as getAllSlider} from "@backend/_controller/SliderController"
import {index as getAllPosts} from "@backend/_controller/BlogController"
import {index as getAllProductCategories} from "@backend/_controller/CategoryController"
import {index as getAllProducts} from "@backend/_controller/ProductController"
import Slider from "@website/Slider";
import {Suspense} from "react";
import {cache} from 'react'
import Link from "next/link";
import Button from "@m3/buttons/Button";
import Typography from "@m3/assets/typography/Typography";
import Icon from "@m3/assets/icons/Icon";
import PostCardHorizontal from "@website/PostCardHorizontal";
import ProductCardHorizontal from "@website/ProductCardHorizontal";

const getSlides = cache(async () => {
    return JSON.parse(await getAllSlider())
})
const getLastPosts = cache(async () => {
    return JSON.parse(await getAllPosts({pageNumber: 1, per_page: 4}))
})
const getCategories = cache(async () => {
    return JSON.parse(await getAllProductCategories({topCategory: null, pageNumber: 1, per_page: 12}))
})
const getLastProduct = cache(async () => {
    return JSON.parse(await getAllProducts({pageNumber: 1, per_page: 4}))
})
export default async function Home() {
    const slidesData = getSlides()
    const lastPosts = getLastPosts()
    const categoriesData = getCategories()
    const productsData = getLastProduct()
    const [products,slides, postsData, categories] = await Promise.all([productsData,slidesData, lastPosts, categoriesData])
   // console.log("product",products[0].spec[0].key.values)
    return (
        <main className=" bg-surface-light dark:bg-surface-dark">

            <div className={"md:px-4 min-h-screen pt-6  mx-auto"}>
                {/*<Slider slidesData={slides}/>*/}
                <div className={"mt-12 flex items-center"}>
                    {categories.map((category) => (
                        <div className={"px-6"} key={category._id}>
                            <div className={"mx-auto relative rounded-[8px] overflow-hidden w-[80px] h-[80px]"}>
                                <Image layout={"fill"} src={"/data" + category.thumbnail.url} alt={category.title}/>
                            </div>
                            <h2 className={"mt-2 text-center font-bold text-on-surface-light text-label-large dark:text-on-surface-dark"}>
                                {category.title}
                            </h2>
                        </div>
                    ))}
                </div>

                <Typography type={"h2"}
                            className={"mt-10 text-display-small text-on-surface-light dark:text-on-surface-dark"}>
                    آخرین محصولات دیجی زون
                </Typography>
                <Typography type={"h3"}
                            className={"mt-1 mb-4 font-medium dark:text-on-surface-variant-dark text-on-surface-variant-light  "}>
                    لیست آخرین محصولات در دیجی زون
                </Typography>
                <div className={"grid grid-cols-4 gap-4"}>
                {products.map(product=><ProductCardHorizontal key={product._id} product={product}/>)}
                </div>
                <Typography type={"h2"}
                            className={"mt-10 text-display-small text-on-surface-light dark:text-on-surface-dark"}>
                    آخرین مقالات دیجی زون
                </Typography>
                <Typography type={"h3"}
                            className={"mt-1 mb-4 font-medium dark:text-on-surface-variant-dark text-on-surface-variant-light  "}>
                    لیست آخرین مقالات در دیجی زون
                </Typography>
                <div className={"grid grid-cols-4  gap-4"}>
                    {postsData.data.map((post, index) =>  <PostCardHorizontal post={post} key={index}/>)}
                </div>
                <Typography type={"h2"}
                            className={"mt-10 text-display-small text-on-surface-light dark:text-on-surface-dark"}>
                    چرا دیجی زون
                </Typography>
                <Typography type={"h3"}
                            className={"mt-1 mb-4 font-medium dark:text-on-surface-variant-dark text-on-surface-variant-light  "}>
                    برتری ما نسبت به رقبا
                </Typography>
                <div className={"grid grid-cols-1 md:grid-cols-4 gap-4"}>
                    <div
                        className={"px-6 py-6  group relative rounded-[24px] bg-surface-container-high-light dark:bg-surface-container-high-dark hover:bg-secondary-container-light dark:hover:bg-secondary-container-dark"}>
                        <div
                            className={"absolute top-6 left-6 rounded-[8px] h-12 w-12 flex items-center justify-center group-hover:bg-secondary-light dark:group-hover:bg-secondary-dark bg-secondary-container-light dark:bg-secondary-container-dark"}>
                            <Icon size={32} type={"outline"}
                                  className={"text-on-secondary-container-light dark:text-on-secondary-container-dark group-hover:text-on-secondary-light dark:group-hover:text-on-secondary-dark"}>
                                savings
                            </Icon>
                        </div>
                        <h3 className={"pt-20 text-title-large font-bold mb-2 group-hover:text-on-secondary-container-light dark:group-hover:text-on-secondary-container-dark text-on-surface-light dark:text-on-surface-dark"}>
                            قیمت پایین
                        </h3>
                        <p className={"text-body-large group-hover:text-on-secondary-container-light dark:group-hover:text-on-secondary-container-dark text-on-surface-light dark:text-on-surface-dark"}>

                            قیمت محصولات ما به دلیل اینکه خودمان وارد کننده ی آن هستیم پایین تر است.
                        </p>
                    </div>
                    <div
                        className={"px-6 py-6  group relative rounded-[24px] bg-surface-container-high-light dark:bg-surface-container-high-dark hover:bg-secondary-container-light dark:hover:bg-secondary-container-dark"}>
                        <div
                            className={"absolute top-6 left-6 rounded-[8px] h-12 w-12 flex items-center justify-center group-hover:bg-secondary-light dark:group-hover:bg-secondary-dark bg-secondary-container-light dark:bg-secondary-container-dark"}>
                            <Icon size={32} type={"outline"}
                                  className={"text-on-secondary-container-light dark:text-on-secondary-container-dark group-hover:text-on-secondary-light dark:group-hover:text-on-secondary-dark"}>
                                check_circle
                            </Icon>
                        </div>
                        <h3 className={"pt-20 text-title-large font-bold mb-2 group-hover:text-on-secondary-container-light dark:group-hover:text-on-secondary-container-dark text-on-surface-light dark:text-on-surface-dark"}>
                            گارانتی و مهلت تست
                        </h3>
                        <p className={"text-body-large group-hover:text-on-secondary-container-light dark:group-hover:text-on-secondary-container-dark text-on-surface-light dark:text-on-surface-dark"}>
                            مهلت تست ۱۵ روزه و امکان درخواست گارانتی ۱ ساله در دیجی زون امکان پذیر است.
                        </p>
                    </div>
                    <div
                        className={"px-6 py-6  group relative rounded-[24px] bg-surface-container-high-light dark:bg-surface-container-high-dark hover:bg-secondary-container-light dark:hover:bg-secondary-container-dark"}>
                        <div
                            className={"absolute top-6 left-6 rounded-[8px] h-12 w-12 flex items-center justify-center group-hover:bg-secondary-light dark:group-hover:bg-secondary-dark bg-secondary-container-light dark:bg-secondary-container-dark"}>
                            <Icon size={32} type={"outline"}
                                  className={"text-on-secondary-container-light dark:text-on-secondary-container-dark group-hover:text-on-secondary-light dark:group-hover:text-on-secondary-dark"}>
                                checklist
                            </Icon>
                        </div>
                        <h3 className={"pt-20 text-title-large font-bold mb-2 group-hover:text-on-secondary-container-light dark:group-hover:text-on-secondary-container-dark text-on-surface-light dark:text-on-surface-dark"}>
                            تنوع بالا محصولات
                        </h3>
                        <p className={"text-body-large group-hover:text-on-secondary-container-light dark:group-hover:text-on-secondary-container-dark text-on-surface-light dark:text-on-surface-dark"}>
                            انواع مختلف محصولات در دیجی زون
                        </p>
                    </div>
                    <div
                        className={"px-6 py-6  group relative rounded-[24px] bg-surface-container-high-light dark:bg-surface-container-high-dark hover:bg-secondary-container-light dark:hover:bg-secondary-container-dark"}>
                        <div
                            className={"absolute top-6 left-6 rounded-[8px] h-12 w-12 flex items-center justify-center group-hover:bg-secondary-light dark:group-hover:bg-secondary-dark bg-secondary-container-light dark:bg-secondary-container-dark"}>
                            <Icon size={32} type={"outline"}
                                  className={"text-on-secondary-container-light dark:text-on-secondary-container-dark group-hover:text-on-secondary-light dark:group-hover:text-on-secondary-dark"}>
                                handshake
                            </Icon>
                        </div>
                        <h3 className={"pt-20 text-title-large font-bold mb-2 group-hover:text-on-secondary-container-light dark:group-hover:text-on-secondary-container-dark text-on-surface-light dark:text-on-surface-dark"}>
                            قابلیت دریافت سفارش در تعداد بالا
                        </h3>
                        <p className={"text-body-large group-hover:text-on-secondary-container-light dark:group-hover:text-on-secondary-container-dark text-on-surface-light dark:text-on-surface-dark"}>
                            دیجی زون توانایی واردات و دریافت سفارش در تعداد بالا را دارد.
                        </p>
                    </div>

                </div>

            </div>

        </main>
    );
}
