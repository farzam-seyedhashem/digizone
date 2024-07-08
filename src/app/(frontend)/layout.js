import DesktopMenu from "@website/DesktopMenu";
import Footer from "@website/Footer";

export default function Layout({children}) {
    return (
        <>
            <DesktopMenu/>
            <div className={"md:pt-[64px]"}>
                {children}
            </div>
            <Footer/>
        </>
    )
}