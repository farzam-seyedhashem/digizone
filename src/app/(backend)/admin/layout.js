import DesktopMenu from "@admin/DesktopMenu";
import {SignedIn, SignedOut, SignInButton} from "@clerk/nextjs";
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
// import MobileMenu from "@admin/admin-panel/menu/Mobile";

export default function layout({children}) {
    return (
        <>
            <SignedOut>
                <div
                    className={"min-h-screen w-full bg-surface-light dark:bg-surface-dark flex items-center justify-center"}>
                    <div
                        className={"pb-6 pt-4 px-6 w-3/12 rounded-[24px] dark:bg-surface-container-dark bg-surface-container-light"}>
                        <Button className={"*:!pr-4"}>
                            <Icon className={"ml-2"}>
                                chevron_right
                            </Icon>
                            بازگشت
                        </Button>
                        <p className={"text-center text-[40px] "}>
                            😕
                        </p>
                        <p className={"text-label-large text-on-surface-light dark:text-on-surface-dark"}>

                            متاسفانه شما امکان دسترسی به این صفحه را ندارید برای دسترسی به این بخش ابتدا وارد شوید.

                        </p>
                        <div className={"pt-6 pb-2"}>
                            <SignInButton>

                                <Button icon={"login"} className={"w-full"} variant={"filled"}>
                                    ورود
                                </Button>
                            </SignInButton>
                        </div>
                    </div>
                </div>
            </SignedOut>
            <SignedIn>
                <div className={" bg-surface-light dark:bg-surface-dark"}>
                    <DesktopMenu/>
                    {/*<MobileMenu/>*/}
                    <div className={"w-full md:w-[calc(100%_-_360px)] bg-surface-light dark:bg-surface-dark  mr-auto"}>
                        {children}
                    </div>

                </div>
            </SignedIn>
        </>
    )
}