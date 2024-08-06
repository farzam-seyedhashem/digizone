'use client';
import Image from 'next/image';
import Button from "@m3/buttons/Button";
import Link from "next/link";
export default function AboutUsPage(props) {
    return (
        <div className={" min-h-screen bg-surface-light dark:bg-surface-dark px-4 md:px-6 py-6"}>
            <div
                className={"mb-10 relative overflow-hidden items-start pt-[72px] justify-center bg-primary-light h-[320px] md:h-[540px] rounded-[24px] dark:bg-primary-dark"}>
                <Image layout={"fill"} objectFit={"cover"}
                       src={"/about-us-page.jpg"} alt={""}/>
                <div
                    className={"absolute z-[888]  flex items-center px-[56px] inset-0 bg-gradient-to-l dark:from-surface-container-dark from-surface-container-dark via-transparent to-transparent"}>
                    <h1 className={"text-display-large text-on-surface-dark dark:text-on-surface-dark font-black"}>
                        درباره ی ما
                    </h1>
                </div>
                <div
                    className={"absolute z-[111] flex items-center px-[56px] inset-0 bg-black/80"}>
                </div>

            </div>

            <div className={" mb-10 grid grid-cols-12 gap-6"}>
                <div className={"md:col-span-8 col-span-12"}>

                    <h2 className={"mb-4 font-bold text-on-surface-light dark:text-on-surface-dark text-display-medium"}>
                        معرفی دیجی زون
                    </h2>

                    <p className={"text-on-surface-light dark:text-on-surface-dark max-w-4xl text-body-large"}>
                        دیجی زون لوزما فقط یک فروشگاه خرید و فروش لوازم و قطعات الکترونیکی نیست. دیجی زون علاوه بر
                        فروش لپ تاپ، کامپیوتر، کنسول بازی، قطعات کامپیوتری، گوشی و ... استوک بر این باور است که
                        مشتری باید در مورد انتخابش اطلاعات کافی داشته باشد و از تصمیمشمطمئن باشد و این رسالت تیم
                        ماست که مشتری را به سمت هدفش و انتخاخابش هدایت کنیم، ما با رضایت و اعتماد شما به این نقطه
                        رسیدیم.
                    </p>
                </div>
                <div
                    className={"col-span-12 md:col-span-4  w-full w-full overflow-hidden h-[580px] rounded-[24px] relative  bg-surface-container-light dark:bg-surface-container-dark"}>
                    <h3 className={"text-on-surface-light font-bold py-6 px-6 dark:text-on-surface-dark text-display-medium md:text-display-large"}>

                            <span className={"text-primary-light block dark:text-primary-dark"}>
                               دیجی زون
                                    </span>
                        چیست

                    </h3>
                    <div
                        className={"absolute w-[556px] text-[400px] h-[500px] text-center text-primary-light dark:text-primary-dark  left-1/2 transform -translate-x-1/2 bottom-0"}>

                        ?
                    </div>
                </div>

            </div>




            <div className={"mb-10 grid grid-cols-12 gap-6"}>
                <div
                    className={"md:w-[550px] w-full overflow-hidden h-[580px] rounded-[24px] relative col-span-12 md:col-span-4 bg-surface-container-light dark:bg-surface-container-dark"}>
                    <h3 className={"text-on-surface-light font-bold py-6 px-6 dark:text-on-surface-dark text-display-medium md:text-display-large"}>

                            <span className={"text-primary-light block dark:text-primary-dark"}>
                              تاریخچه
                                    </span>
                        دیجی زون

                    </h3>
                    <div className={"absolute w-[480px] h-[406px]  left-1/2 transform -translate-x-1/2 bottom-0"}>
                        <Image layout={"fill"} objectFit={"contain"}
                               src={"/about-us-history.png"} alt={""}/>
                    </div>
                </div>
                <div className={"md:col-span-8 col-span-12"}>
                    <h2 className={"mb-4 font-bold text-on-surface-light dark:text-on-surface-dark text-display-medium"}>
                        تاریخچه دیجی زون
                    </h2>
                    <p className={"text-on-surface-light dark:text-on-surface-dark max-w-4xl text-body-large"}>

                        دیجی زون در ابتدای کار مثل دیگر کسب و کار های بزرگ به صورت خانوادگی اداره میشد که در
                        سال ۱۳۸۵ فعالیت خود را آغاز کرد و با کسب نمایندگی رسمی سرلید شروع کردیم و فقط یک اتاق بودین.
                        در این سال ها مشکلات بسیار زیادی سر راه ماه قرار گرفت که با کمک شما آن ها را پشت سر گذاشتیم.
                        دیجی زون پس از گذشت چند سال با بزرگتر شدن اهداف خود تصمیم به بزرگتر کردن تیم خود با کمک
                        گرفتن از متخصصان در حوضه های مختلف نمود که نتیجه آن ورود به عرصه ی واردات محصولات استوک
                        اروپا و آمریکا بود.
                    </p>
                </div>


            </div>



            <div className={"mb-14 grid grid-cols-12 gap-6"}>
                <div className={"col-span-12 md:col-span-8"}>
                    <h2 className={"mb-4 font-bold text-on-surface-light dark:text-on-surface-dark text-display-medium"}>
                        واردات
                    </h2>

                    <p className={"text-on-surface-light dark:text-on-surface-dark max-w-4xl text-body-large"}>

                        دیجی زون در ابتدا با واردات لپ تاپ شروع نمود و به تدریج وارد عرصه واردات
                        گوشی و کنسول بازی شد. ورود دیجی زون به عرصه واردات باعث شد که محصولات با کیفیت بیشتر را با
                        هزینه کمتر به مشتریان خود ارائه دهد. دیجی زون علاوه بر واردات محصول برای مشتریان خود اعلام
                        میدارد که میتواند به شرکت های خصوصی، دولتی و مغازه نیز خدمات ارزنده واردات محصول را ارائه
                        دهد.
                    </p>
                </div>
                <div
                    className={"md:w-[550px] w-full overflow-hidden h-[580px] rounded-[24px] relative col-span-12 md:col-span-4 bg-surface-container-light dark:bg-surface-container-dark"}>
                    <h3 className={"text-on-surface-light font-bold py-6 px-6 dark:text-on-surface-dark text-display-medium md:text-display-large"}>
                        ورود به عرصه
                        <span className={"text-primary-light block dark:text-primary-dark"}>
                               واردات
                                    </span>

                    </h3>
                    <div className={"absolute w-[556px] h-[406px]  right-0 bottom-0"}>
                        <Image layout={"fill"} objectFit={"contain"}
                               src={"/import-about.png"} alt={""}/>
                    </div>
                </div>


            </div>

            <div
                className={"max-w-6xl mx-auto rounded-[24px] p-6 text-on-secondary-container-light dark:text-on-secondary-container-dark  flex justify-center items-center text-center w-full h-[300px] bg-secondary-container-light dark:bg-secondary-container-dark"}>
                <div>
                    <h2 className={"text-headline-large font-black "}>
                        ارتباط با ما
                    </h2>
                    <p className={"mt-2 mb-6 max-w-md text-body-large font-medium"}>
                        جهت ارتباط با دیجی زون و مشاهده اطلاعات تماس، آدرس و ایمیل بر روی لینک زیر کلیک نمایید.
                    </p>
                    <div className={"flex justify-center"}>
                        <Link href={"/contact-us"}>
                            <Button variant={"filled"}>
                                تماس با دیجی زون
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}