'use client'
import {usePathname} from "next/navigation";
import Link from "next/link";
export default function MobileMenu() {
    const pathName= usePathname()
    const items = [
        {
            label: "خانه",
            isActive: pathName==="/",
            link: "/",
            icon: "home"
        },
        {
            label: "محصولات",
            isActive: pathName==="/products",
            link: "/products",
            icon: "computer"
        },
        {
            label: "بلاگ",
            isActive: pathName==="/blog",
            link: "/blog",
            icon: "post"
        },
        {
            label: "درباره ما",
            isActive: pathName==="/about-us",
            link: "/about-us",
            icon: "group"
        },
        {
            label: "تماس با ما",
            isActive: pathName==="/contact-us",
            link: "/contact-us",
            icon: "call"
        }
    ]
    return (
        <div className={"fixed bottom-0 left-0 w-full z-999"}>
            <div
                className={"w-full pt-3 pb-4 bg-surface-container-light dark:bg-surface-container-dark h-[80px] shadow-elevated-two-light dark:shadow-elevated-two-light flex items-center justify-center"}>
                <ul className={"flex  w-full items-center *:w-3/12 space-x-reverse space-x-2"}>
                    {items.map((item, index) => <li key={index} className={`group flex items-center justify-center min-h-[48px]`}>
                        <Link href={item.link} className={"text-center"}>
                            <div
                                className={`relative overflow-hidden before:absolute before:inset-0 group-active:before:bg-on-surface-light/[10%] dark:group-active:before:bg-on-surface-dark/[10%] group-focus:before:bg-on-surface-light/[10%] dark:group-focus:before:bg-on-surface-dark/[10%] group-hover:before:bg-on-surface-light/[8%] dark:group-hover:before:bg-on-surface-dark/[8%] w-[64px] h-[32px] flex items-center justify-center rounded-full ${item.isActive && "bg-secondary-container-light dark:bg-secondary-container-dark"}`}>
                                <i className={`material-symbols-outlined text-[24px] ${item.isActive ? "font-vs-[1_400_0_24] text-on-secondary-container-light dark:text-on-secondary-container-dark" : "font-vs-[0_400_0_24] text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}>
                                    {item.icon}
                                </i>
                            </div>
                            <label
                                className={`mt-1  text-center text-label-medium ${item.isActive ? "font-bold text-on-surface-light dark:text-on-surface-dark" : "font-medium text-on-surface-variant-light dark:text-on-surface-variant-dark"}`}>
                                {item.label}
                            </label>
                        </Link>
                    </li>)}
                </ul>
            </div>
        </div>
    )
}