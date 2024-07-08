/* This example requires Tailwind CSS v2.0+ */

import React from "react";
import Typography from "@m3/assets/typography/Typography";

const navigation = {
    Service: [
        {name: 'محصولات', href: '/products'},
        {name: 'بلاگ', href: '/blog'},
    ],
    support: [
        {name: 'پشتیبانی', href: '/support'},
        // {name: 'سوالات متداول', href: '/faq'},
    ],
    company: [
        {name: 'درباره ما', href: '/about-us'},
        {name: 'تماس با ما', href: '/contact-us'},
        {name: 'آدرس', href: '/locations'},
    ],
    social: [
        {
            name: 'Youtube',
            href: 'https://www.youtube.com/channel/UCihMgWVPBwVb1RpJM6npdmw',
            icon: (props) => (
                <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path fill="currentColor"
                          d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"/>
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/bumbleauto/',
            icon: (props) => (
                <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Facebook',
            href: 'https://www.facebook.com/bumbleauto',
            icon: (props) => (
                <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Twitter',
            href: 'https://twitter.com/bumbleauto',
            icon: (props) => (
                <svg width={20} height={20} fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
            ),
        },
    ],
}
export default function Footer() {
    return (
        <div className={"pt-20 pb-10 bg-surface-light dark:bg-surface-dark"}>
            <div className={"px-2 text-on-surface-light dark:text-on-surface-dark"}>
                <svg aria-hidden="true" width="100%" height="8" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <pattern id="a" width="91" height="8" patternUnits="userSpaceOnUse">
                        <g clipPath="url(#clip0_2426_11367)">
                            <path
                                d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0"
                                stroke="currentColor" strokeLinecap="square"></path>
                        </g>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#a)"></rect>
                </svg>
            </div>
            <footer className="bg-background md:px-6 px-4 relative" aria-labelledby="footer-heading">
                <div className={" pt-[64px]"}>
                    <section className="grid-cols-12 grid gap-6">
                        <div className={"md:col-span-5 col-span-12"}>
                            <div className={"h-16 w-16"}>
                                <svg className={"text-on-surface-light dark:text-on-surface-dark"} width="100%" height="100%" viewBox="0 0 1089 683" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <g id="Group-copy">
                                        <path id="Ellipse" fill="currentColor" fillRule="evenodd" stroke="none" d="M 108 49.5 C 108 38.730469 99.269562 30 88.5 30 C 77.730438 30 69 38.730469 69 49.5 C 69 60.269531 77.730438 69 88.5 69 C 99.269562 69 108 60.269531 108 49.5 Z"/>
                                        <path id="Rounded-Rectangle" fill="currentColor" fillRule="evenodd" stroke="none" d="M 41 589 C 18.908813 589 1 606.908813 1 629 L 1 640 C 1 662.091187 18.908813 680 41 680 L 1041 680 C 1063.091187 680 1081 662.091187 1081 640 L 1081 629 C 1081 606.908813 1063.091187 589 1041 589 Z"/>
                                        <path id="Rounded-Rectangle-copy" fill="currentColor" fillRule="evenodd" stroke="none" d="M 167 4 C 144.908813 4 127 21.908813 127 44 L 127 56 C 127 78.091187 144.908813 96 167 96 L 1041 96 C 1063.091187 96 1081 78.091187 1081 56 L 1081 44 C 1081 21.908813 1063.091187 4 1041 4 Z"/>
                                        <path id="Rounded-Rectangle-copy-2" fill="currentColor" fillRule="evenodd" stroke="none" d="M 724.957397 299.14624 C 709.286133 314.716553 709.204224 340.043274 724.774536 355.714539 L 733.2323 364.227173 C 748.802612 379.898438 774.129272 379.980286 789.800537 364.410034 L 1075.424561 80.626709 C 1091.095703 65.056396 1091.177612 39.729736 1075.607422 24.058472 L 1067.149536 15.545776 C 1051.579346 -0.125488 1026.252563 -0.207275 1010.581299 15.362915 Z"/>
                                        <path id="Rounded-Corner" fill="currentColor" fillRule="evenodd" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" d="M 360.475098 668.324951 C 524.205811 671.182861 659.647949 518.171387 662.992432 326.565796 L 605.538574 325.562866 C 602.842224 480.035767 493.648621 603.393799 361.648682 601.089844 Z"/>
                                        <path id="Rounded-Corner-copy" fill="currentColor" fillRule="evenodd" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" d="M 365.571228 25.369507 C 532.887512 28.290039 666.243408 161.371094 663.428955 322.613037 L 604.716919 321.588257 C 606.985962 191.594604 499.474243 84.304443 364.583557 81.949951 Z"/>
                                    </g>
                                </svg>

                            </div>

                            <Typography type={"p"}
                                        className="text-on-background-light dark:text-on-background-dark my-0 max-w-4xl">
                                دیجی زون لوزما فقط یک فروشگاه خرید و فروش لوازم و قطعات الکترونیکی نیست. دیجی زون علاوه بر
                                فروش لپ تاپ، کامپیوتر، کنسول بازی، قطعات کامپیوتری، گوشی و ... استوک بر این باور است که
                                مشتری باید در مورد انتخابش اطلاعات کافی داشته باشد و از تصمیمشمطمئن باشد و این رسالت تیم
                                ماست که مشتری را به سمت هدفش و انتخاخابش هدایت کنیم، ما با رضایت و اعتماد شما به این نقطه
                                رسیدیم.
                            </Typography>
                        </div>
                        <ul className={"md:col-span-2 col-span-4 space-y-5"}>
                            <li className={"text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                دسترسی سریع
                            </li>
                            {navigation.Service.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href}
                                       className="text-title-medium font-medium text-primary-light dark:text-primary-dark hover:underline hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <ul className={"md:col-span-3 col-span-4 space-y-5"}>
                            <li className={"text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                پشتیبانی
                            </li>
                            {navigation.support.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href}
                                       className="text-title-medium font-medium text-primary-light dark:text-primary-dark hover:underline font-medium hover:text-on-primary-container-light dark:hover:on-primary-container-dark">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <ul className={"md:col-span-2 col-span-4 space-y-5"}>
                            <li className={"text-title-small text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                                دیجی زون
                            </li>
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href}
                                       className="text-title-medium font-medium text-primary-light dark:text-primary-dark hover:underline font-medium hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <ul id={"contact"} className="flex mt-[64px] flex-wrap gap-y-4 gap-x-6">
                        <a className={"font-bold text-on-background-light dark:text-on-background-dark text-title-medium"}>
                            دیجی زون
                        </a>
                        <a href={"tel:02188912499"}
                           className="flex items-center text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark hover:underline font-medium">
                            <svg className={"ml-1"} xmlns="http://www.w3.org/2000/svg" height="20px"
                                 viewBox="0 0 24 24" width="20px"
                                 fill="currentColor">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path
                                    d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"/>
                            </svg>
                            021-88912499

                        </a>
                        <a href={"mailto:sales@bumbleauto.com"}
                           className="flex items-center text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark hover:underline font-medium">
                            <svg className={"ml-1"} xmlns="http://www.w3.org/2000/svg" height="20px"
                                 viewBox="0 0 24 24" width="20px"
                                 fill="currentColor">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path
                                    d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                            </svg>
                            info@digizone.com
                        </a>
                        <div
                            className="flex items-center text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark hover:underline font-medium ">
                            <svg className={"ml-1"} xmlns="http://www.w3.org/2000/svg" height="20px"
                                 viewBox="0 0 24 24" width="20px"
                                 fill="currentColor">
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <path
                                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                            </svg>
                            10:00 AM To 7:00 PM
                        </div>
                        <div
                            className="flex items-start text-title-medium font-medium text-on-surface-light dark:text-on-surface-dark hover:underline font-medium ">
                            <svg className={"ml-1 mt-[2px] w-6"} xmlns="http://www.w3.org/2000/svg" height="20px"
                                 viewBox="0 0 24 24" width="20px"
                                 fill="currentColor">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/>
                            </svg>

                            میدان ولیعصر، جنب مترو ، کوچه سازش (شقایق)
                            پلاک 30 ، واحد 15 طبقه 4
                        </div>

                        {navigation.social.map((item) => (
                            <li key={item.name}>
                                <a href={item.href} target={"_blank"} rel="nofollow noreferrer"
                                   className="text-title-medium  font-medium flex items-center text-on-background-light dark:text-on-background-dark hover:underline">
                                    <item.icon className={"ml-1"}/>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>


                <p className="pb-[64px]  text-right pt-8 text-body-small font-light  text-on-surface-variant-light dark:text-on-surface-variant-dark">&copy;
                    تمام حقوق وبسایت مربوط به فروشگاه دیجی زون میباشد.  طراحی و اجرا توسط
                    <a className={"mx-1 text-primary-light dark:text-primary-dark hover:text-on-primary-container-light dark:hover:text-on-primary-container-dark hover:underline"}
                       href={"https://nulldesign.co"}>
                        Null Design
                    </a>
                    .
                </p>

            </footer>

        </div>
    )
}
