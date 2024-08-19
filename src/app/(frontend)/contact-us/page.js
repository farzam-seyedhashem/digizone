'use client';
import Image from 'next/image';
import Button from "@m3/buttons/Button";
import Link from "next/link";
import Typography from "@m3/assets/typography/Typography";
export default function AboutUsPage(props) {
    return (
        <div className={"p-2 bg-background-light dark:bg-background-dark"}>
            {/*<PageHeader isFull shortDescription={"We’d Love to Hear From You"} title={" "}*/}
            {/*            metaTitle={page.metaTitle} breadCrumbs={breadCrumbs}/>*/}
            <div
                className={"mb-10 relative overflow-hidden items-start pt-[72px] justify-center bg-primary-light h-[320px] md:h-[540px] rounded-[24px] dark:bg-primary-dark"}>
                <Image layout={"fill"} objectFit={"cover"}
                       src={"/about-us-page.jpg"}/>
                <div
                    className={"absolute z-[888]  flex items-center px-[56px] inset-0 bg-gradient-to-l dark:from-surface-container-dark from-surface-container-dark via-transparent to-transparent"}>
                    <h1 className={"text-display-large text-on-surface-dark dark:text-on-surface-dark font-black"}>
                        تماس با ما
                    </h1>
                </div>
                <div
                    className={"absolute z-[111] flex items-center px-[56px] inset-0 bg-black/80"}>
                </div>

            </div>

            <div className={"px-4 md:px-6 mx-auto"}>
                <p className={"text-on-surface-variant-light font-medium dark:text-on-surface-variant-dark mb-4"}>
                    ما از شنید صدای شما خوشحال میشویم
                </p>
                <h2 className="text-on-surface-light dark:text-on-surface-dark font-bold text-[44px]">
                    {/*LET'S GET IN TOUCH!*/}
                </h2>

                <Typography type={"p"} className="mb-10 text-on-surface-light dark:text-on-surface-dark  max-w-3xl">
                    شما میتواند در روز هاو ساعات مشخص شده در جدول زیر با شماره های ما تماش بگیرید. همچنین خوشحال میشویم
                    ما را در شبکه های اجتماعی دنبال کنید.
                </Typography>

                <Typography type={"h2"} className="mb-4 text-on-surface-light dark:text-on-surface-dark">
                    راه های ارتباطی ما
                </Typography>

                <div
                    className={"rounded-2xl border border-surface-variant-light dark:border-surface-variant-dark md:max-w-3xl overflow-x-hidden"}>
                    <table className={"w-full"}>
                        <thead className={"w-full"}>
                        <tr className={`bg-surface-container-light dark:bg-surface-container-dark  divide-x divide-surface-variant-light dark:divide-surface-variant-dark`}>
                            <th className={" px-6 py-4 text-on-surface-light dark:text-on-surface-dark font-medium"}>
                                عنوان
                            </th>
                            <th className={"py-4 px-6 text-on-surface-light dark:text-on-surface-dark font-medium"}>
                                توضیحات
                            </th>
                        </tr>
                        </thead>
                        <tbody
                            className={"bg-surface-light dark:bg-surface-dark w-full text-right"}>
                        <tr>
                            <td className={`px-6 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark dark:text-on-surface-variant-dark font-normal`}>
                                تلفن
                            </td>
                            <td
                                className={`px-6 font-medium border-r border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light dark:text-on-surface-dark dark:text-on-surface-dark`}>
                                (۰۲۱) ۸۸۹۱ ۲۴۹۹
                            </td>
                        </tr>
                        <tr>
                            <td className={`px-6 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark dark:text-on-surface-variant-dark font-normal`}>
                                ایمیل
                            </td>
                            <td
                                className={`px-6 font-medium border-r border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light dark:text-on-surface-dark dark:text-on-surface-dark`}>
                                digizone@gmail.com
                            </td>
                        </tr>
                        <tr>
                            <td className={`px-6 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark dark:text-on-surface-variant-dark font-normal`}>
                                آدرس
                            </td>
                            <td
                                className={`px-6 font-medium border-r border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light dark:text-on-surface-dark dark:text-on-surface-dark`}>
                                میدان ولیعصر، جنب مترو ، کوچه سازش (شقایق) پلاک 30 ، واحد 15 طبقه 4
                            </td>
                        </tr>
                        <tr>
                            <td className={`px-6 py-4 border-t border-surface-variant-light dark:border-surface-variant-dark text-on-surface-variant-light dark:text-on-surface-variant-dark dark:text-on-surface-variant-dark font-normal`}>
                                شبکه های اجتماعی
                            </td>
                            <td
                                className={`px-6  font-medium border-r border-t border-surface-variant-light dark:border-surface-variant-dark py-4 font-normal text-on-surface-light dark:text-on-surface-dark dark:text-on-surface-dark`}>
                                <a className={"md:py-0 py-[1px] px-1 inline-flex text-primary-light dark:text-primary-dark  hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark hover:underline"}
                                   href={"https://digizoneshop.com/contact-us#"}>
                                    فیسبوک
                                </a>
                                <a className={"md:py-0 py-[1px] px-1 inline-flex text-primary-light dark:text-primary-dark hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark hover:underline"}
                                   href={"https://digizoneshop.com/contact-us#"}>
                                    توییتر
                                </a>
                                <a className={"md:py-0 py-[1px] px-1 inline-flex text-primary-light dark:text-primary-dark hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark hover:underline"}
                                   href={"https://digizoneshop.com/contact-us#"}>
                                    اینستاگرام
                                </a>
                                <a className={"md:py-0 py-[1px] px-1 inline-flex text-primary-light dark:text-primary-dark hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark hover:underline"}
                                   href={"https://digizoneshop.com/contact-us#"}>
                                    یوتیوب
                                </a>
                            </td>
                        </tr>


                        </tbody>

                    </table>
                </div>


            </div>
            {/*<div className={"container mx-auto grid grid-cols-2 gap-2"}>*/}
            {/*    <MapSection*/}
            {/*        descr={"If you are searching “used car dealership near me” and are looking for the best used car dealership in Maryland, Bumble Auto is at your service. We help you sell or trade cars with a safe and secure method and enable you to have a hassle-free and effortless experience when buying a used car or selling yours. Estimate your car’s value, get instant payment, and so much more. Bumble Auto is among the most trustworthy used car dealerships in Columbia MD and also used car dealerships in Baltimore MD because we value your time and our customers always come first and we always values their time."}*/}
            {/*        titlePrimary={"BEST USED CAR"} title={"Elkridge, MD Store Info"}/>*/}
            {/*    <MapSection*/}
            {/*        descr={"If you are searching “used car dealership near me” and are looking for the best used car dealership in Maryland, Bumble Auto is at your service. We help you sell or trade cars with a safe and secure method and enable you to have a hassle-free and effortless experience when buying a used car or selling yours. Estimate your car’s value, get instant payment, and so much more. Bumble Auto is among the most trustworthy used car dealerships in Columbia MD and also used car dealerships in Baltimore MD because we value your time and our customers always come first and we always values their time."}*/}
            {/*        titlePrimary={"BEST USED CAR"} title={"Ellicott City, MD Store Info"}/>*/}
            {/*</div>*/}

        </div>
    )
}