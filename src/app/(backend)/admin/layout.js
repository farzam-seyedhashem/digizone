import DesktopMenu from "@admin/DesktopMenu";
// import MobileMenu from "@admin/admin-panel/menu/Mobile";

export default function layout ({children}) {
    return(
        <div className={" bg-surface-light dark:bg-surface-dark"}>
            <DesktopMenu/>
            {/*<MobileMenu/>*/}
            <div className={"w-full md:w-[calc(100%_-_360px)] bg-surface-light dark:bg-surface-dark  mr-auto"}>
                {children}
            </div>

        </div>
    )
}