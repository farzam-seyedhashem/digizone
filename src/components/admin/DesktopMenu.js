'use client'
import Link from "next/link";
import {usePathname} from "next/navigation";
import Icon from "@m3/assets/icons/Icon";
import IconButton from "@m3/icon_buttons/IconButton";
import {useState} from "react";
// import * as path from "node:path";

export default function DesktopMenu() {
    const pathname = usePathname()
    // const [selected,setSelected] = useState()
    const [menuOpen, setMenuOpen] = useState(true)
    const Categories = [
        {
            id: 1,
            title: "Basic",
            notShow: true,
        },
        {
            id: 2,
            title: "بلاگ"
        },
        {
            id: 3,
            title: "More"
        }
    ]
    // const Categories = [
    //     {
    //         id: 1,
    //         title: "Basic",
    //         notShow: true,
    //     },
    //     {
    //         id: 2,
    //         title: "Contents"
    //     },
    //     {
    //         id: 3,
    //         title: "More"
    //     }
    // ]

    const menuList = [
        {
            title: "داشبورد",
            icon: "dashboard",
            link: "/admin",
            id: 1
        },
        // {
        //     title: "Analytics",
        //     icon: "analytics",
        //     link: "/admin/analytics",
        //     id: 1
        // },
        // {
        //     title: "Website Builder",
        //     icon: "layers",
        //     link: "/admin/pages",
        //     id: 1
        // },
        {
            title: "اسلایدر",
            icon: "image",
            link: "/admin/slider",
            id: 1
        },
        {
            title: "مقالات",
            icon: "post",
            link: "/admin/blog",
            id: 1
        },
        {
            title: "محصولات",
            icon: "computer",
            link: "/admin/product",
            id: 1
        },
        {
            title: "دسته بندی محصولات",
            icon: "category",
            link: "/admin/product-category",
            id: 1
        },
        {
            title: "مشخصات محصولات",
            icon: "checklist",
            link: "/admin/product-spec",
            id: 1
        },
    ]
    return (
        <>
            {/*<div className={"md:block hidden fixed left-0 h-fit bottom-0 bg-surface-container-low-light dark:bg-surface-container-low-dark "}>*/}
            {/*    <div className={"relative  h-screen  w-[80px] items-center   flex justify-center px-3"}>*/}
            {/*        <div className={"w-full"}>*/}
            {/*            /!*<div className={"flex w-full justify-center items-center"}>*!/*/}
            {/*            /!*    <IconButton onClick={()=>setMenuOpen(!menuOpen)} className={"text-on-surface-variant-light dark:text-on-surface-variant-dark"}>*!/*/}
            {/*            /!*        {menuOpen?"menu_open":"menu"}*!/*/}
            {/*            /!*    </IconButton>*!/*/}
            {/*            /!*</div>*!/*/}
            {/*            {menuList.map((item, i) => <Link*/}
            {/*                className={`rounded-full ${(item.link === pathname || item.subItem && item.subItem.find(si => si.link === pathname)) ? "bg-secondary-container-light dark:bg-secondary-container-dark text-on-secondary-container-light dark:text-on-secondary-container-dark" : "text-on-surface-variant-light dark:text-on-surface-variant-dark"} flex items-center justify-center h-[56px] w-[56px]`}*/}
            {/*                key={i} href={item.link}>*/}
            {/*                <Icon fill={item.link === pathname ? 1 : 0}>*/}
            {/*                    {item.icon}*/}
            {/*                </Icon>*/}
            {/*            </Link>)}*/}

            {/*        </div>*/}
            {/*        <IconButton type={"outlined"} selected={false}*/}
            {/*                    className={"h-[56px] w-[56px] absolute bottom-4 transform left-1/2 -translate-x-1/2 "}>*/}
            {/*            account_circle*/}
            {/*        </IconButton>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*{menuOpen&&menuList.find(mi=>mi.subItem&&mi.subItem.find(si=>si.link === pathname))&&<div*/}
            {/*    className={"w-[280px] px-3 pt-4 bg-surface-container-low-light dark:bg-surface-container-low-dark rounded-r-[16px]"}>*/}
            {/*    <ul>*/}
            {/*        {*/}
            {/*            menuList.find(item => item.link === "/admin/setting").subItem.map((tp, i) =>*/}
            {/*                <li className={"w-full flex"} key={i}>*/}
            {/*                    <Link*/}
            {/*                        className={`${tp.link === pathname ? "text-on-secondary-container-light dark:text-on-secondary-container-dark bg-secondary-container-light dark:bg-secondary-container-dark font-bold" : "text-on-surface-variant-light dark:text-on-surface-variant-dark font-medium"} text-label-large  flex items-center h-[56px]  w-full rounded-full px-4`}*/}
            {/*                        href={tp.link}>*/}
            {/*                        <Icon weight={tp.link === pathname ? 700 : 500} fill={tp.link === pathname ? 1 : 0}*/}
            {/*                              size={24} className={"mr-3"}>*/}
            {/*                            {tp.icon}*/}
            {/*                        </Icon>*/}
            {/*                        {tp.title}*/}
            {/*                    </Link>*/}
            {/*                </li>*/}
            {/*            )*/}
            {/*        }*/}
            {/*    </ul>*/}
            {/*</div>}*/}
            <div className="h-[100vh] p-3 bg-surface-light dark:bg-surface-dark  fixed top-0 right-0 w-[360px]">

                {Categories.map((item, index) =>
                    <div  key={index}>
                        {/*{!item.notShow && <label*/}
                        {/*    className={" px-4 text-on-surface-variant-light dark:text-on-surface-variant-dark text-title-small"}>*/}
                        {/*    {item.title}*/}
                        {/*</label>}*/}
                        <ul className={"mt-2"}>
                            {
                                menuList.filter(tp => tp.id === item.id).map((tp, i) =>
                                    <li className={"w-full flex"} key={i}>
                                        <Link
                                            className={`${tp.link === pathname ? "text-on-secondary-container-light dark:text-on-secondary-container-dark bg-secondary-container-light dark:bg-secondary-container-dark font-bold" : "text-on-surface-variant-light dark:text-on-surface-variant-dark font-medium"} text-label-large  flex items-center h-[56px]  w-full rounded-full px-4`}
                                            href={tp.link}>
                                            <Icon weight={tp.link === pathname ? 700 : 500} fill={tp.link === pathname?1:0}
                                                  size={24} className={"ml-3"}>
                                                {tp.icon}
                                            </Icon>
                                            {tp.title}
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                        {/*{index!==Categories.length-1&&<div className={"p-4"}>*/}
                        {/*    <div className={" h-[1px] bg-outline-light dark:bg-outline-dark"}/>*/}
                        {/*</div>}*/}
                    </div>
                )}

            </div>
        </>
    )
}