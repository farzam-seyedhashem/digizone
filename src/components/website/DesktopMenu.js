'use client';
/* This example requires Tailwind CSS v2.0+ */
import React, {Fragment, useEffect, useState} from 'react'
import Link from 'next/link'

import {usePathname} from "next/navigation";
import {useThemeContext} from "@/app/theme-provider";
import Icon from "@m3/assets/icons/Icon";

export default function Example({title,breadCrumbs,handleChangeMode,handleChangeColor}) {
    // const router = useRouter()
    const pathName = usePathname()
    // const [isDark, setIsDark] = useState(false)
    const [isSettingOpen,setIsSettingOpen] = useState(false)
    const [searchText, setSearchText] = useState("")
    const {theme, setTheme} = useThemeContext();
    let {isDark, colorSystem} = theme;
    return (
        <div className={"md:block hidden"}>
            <div className={"h-[64px] border-b border-outline-light dark:border-outline-dark flex items-center px-4 md:px-6 z-999 fixed bg-surface-light dark:bg-surface-dark w-full top-0 left-0 py-2"}>
                <div className={"h-12 w-12 ml-6"}>
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
                <ul className={"flex text-title-small font-medium flex-grow items-center space-x-reverse space-x-4"}>
                    <li className={"cursor-pointer"}>
                        <Link href={"/"} className={`h-[40px] rounded-full px-6 flex items-center justify-center text-title-small ${pathName === "/"? "font-bold bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark": "font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"} `}>
                            خانه
                        </Link>
                    </li>
                    <li className={"cursor-pointer"}>
                        <Link href={"/products"} className={`h-[40px] rounded-full px-6 flex items-center justify-center text-title-small ${pathName === "/products"? "font-bold bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark": "font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            محصولات
                        </Link>
                    </li>
                    <li className={"cursor-pointer"}>
                        <Link href={"/blog"} className={`h-[40px] rounded-full px-6 flex items-center justify-center text-title-small ${pathName === "/blog"? "font-bold bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark": "font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            بلاگ
                        </Link>
                    </li>
                    <li className={"cursor-pointer"}>
                        <Link href={'/about-us'} className={`h-[40px] rounded-full px-6 flex items-center justify-center text-title-small ${pathName === "/about-us"? "font-bold bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark": "font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            درباره ما
                        </Link>
                    </li>
                    <li className={"cursor-pointer"}>
                        <Link href={"/contact-us"} className={`h-[40px] rounded-full px-6 flex items-center justify-center text-title-small ${pathName === "/contact-us"? "font-bold bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark": "text-on-surface-variant-light dark:text-on-surface-variant-dark"}  hover:text-primary-light dark:hover:text-primary-dark`}>
                            تماس با ما
                        </Link>
                    </li>
                </ul>
                <button onClick={() => setTheme(!isDark, "default-theme-color")}
                        className={`ml-2 hover:bg-opacity-[8%] rounded-full dark:hover:bg-opacity-[8%] dark:hover:bg-on-surface-variant-dark hover:bg-on-surface-variant-light transform flex items-center justify-center   w-[40px] h-[40px] group  `}>

                    {!isDark?<Icon
                        className={`text-on-surface-variant-light material-symbols-outlined group-hover:font-vs-[1_400_0_24] font-vs-[0_400_0_24] dark:text-on-surface-variant-dark`}
                        type={"outline"}>
                        light_mode
                    </Icon>:<Icon
                        className={`text-on-surface-variant-light material-symbols-outlined group-hover:font-vs-[1_400_0_24] font-vs-[0_400_0_24] dark:text-on-surface-variant-dark`}
                        type={"outline"}>
                        dark_mode
                    </Icon>}


                </button>
            </div>
        </div>
    )
}
