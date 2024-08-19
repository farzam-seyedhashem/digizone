import DesktopMenu from "@website/DesktopMenu";
import Footer from "@website/Footer";
import MobileMenu from "@website/MobileMenu";

export default function Layout({children}) {
    return (
        <>
            <DesktopMenu/>
            <MobileMenu/>
            <div className={"md:pt-[64px]"}>
                {children}
            </div>
            <Footer/>
        </>
    )
}