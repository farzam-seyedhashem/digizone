'use client';
import Image from "next/image"
import {useEffect, useState} from "react";
import Button from "@m3/buttons/Button";
import Icon from "@m3/assets/icons/Icon";
export default  function Slider({slidesData}) {
    const [selected, setSelected] = useState(-1)
// console.log(JSON.parse(slides))
//     console.log(slidesData[0])
    const [currentTimeOut, setCurrentTimeOut] = useState(null)
    const nextStep = async () => {
        setSelected(selected + 1);
    };
    useEffect(() => {
        if (currentTimeOut) {
            clearTimeout(currentTimeOut);
        }
        console.log(1)
        let i = setTimeout(async function () {
            if (selected === slidesData.length - 1) {
                setSelected(0)
            } else {
                await nextStep()
            }

        }, 5000)
        setCurrentTimeOut(i)

    }, [selected]);
    return (
        <div className={"w-full flex items-center"}>
            {selected === -1 ? <div
                className={"w-full relative overflow-hidden items-start pt-[72px] justify-center bg-primary-light md:h-[720px] h-[440px] rounded-[24px] dark:bg-primary-dark"}>
                <h1 className={"flex z-10 items-center text-on-primary-light dark:text-on-primary-dark justify-center font-black text-display-small md:text-display-large"}>
                    Digizone
                    <svg
                        className={"text-on-primary-light mr-2 md:mr-4 md:h-[64px] h-[32px] w-[auto] dark:text-on-primary-dark"}
                        width="100%" height="100%" viewBox="0 0 1089 683" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="Group-copy">
                            <path id="Ellipse" fill="currentColor" fillRule="evenodd" stroke="none"
                                  d="M 108 49.5 C 108 38.730469 99.269562 30 88.5 30 C 77.730438 30 69 38.730469 69 49.5 C 69 60.269531 77.730438 69 88.5 69 C 99.269562 69 108 60.269531 108 49.5 Z"/>
                            <path id="Rounded-Rectangle" fill="currentColor" fillRule="evenodd" stroke="none"
                                  d="M 41 589 C 18.908813 589 1 606.908813 1 629 L 1 640 C 1 662.091187 18.908813 680 41 680 L 1041 680 C 1063.091187 680 1081 662.091187 1081 640 L 1081 629 C 1081 606.908813 1063.091187 589 1041 589 Z"/>
                            <path id="Rounded-Rectangle-copy" fill="currentColor" fillRule="evenodd" stroke="none"
                                  d="M 167 4 C 144.908813 4 127 21.908813 127 44 L 127 56 C 127 78.091187 144.908813 96 167 96 L 1041 96 C 1063.091187 96 1081 78.091187 1081 56 L 1081 44 C 1081 21.908813 1063.091187 4 1041 4 Z"/>
                            <path id="Rounded-Rectangle-copy-2" fill="currentColor" fillRule="evenodd" stroke="none"
                                  d="M 724.957397 299.14624 C 709.286133 314.716553 709.204224 340.043274 724.774536 355.714539 L 733.2323 364.227173 C 748.802612 379.898438 774.129272 379.980286 789.800537 364.410034 L 1075.424561 80.626709 C 1091.095703 65.056396 1091.177612 39.729736 1075.607422 24.058472 L 1067.149536 15.545776 C 1051.579346 -0.125488 1026.252563 -0.207275 1010.581299 15.362915 Z"/>
                            <path id="Rounded-Corner" fill="currentColor" fillRule="evenodd" stroke="currentColor"
                                  strokeWidth="24" strokeLinecap="round" strokeLinejoin="round"
                                  d="M 360.475098 668.324951 C 524.205811 671.182861 659.647949 518.171387 662.992432 326.565796 L 605.538574 325.562866 C 602.842224 480.035767 493.648621 603.393799 361.648682 601.089844 Z"/>
                            <path id="Rounded-Corner-copy" fill="currentColor" fillRule="evenodd"
                                  stroke="currentColor" strokeWidth="24" strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M 365.571228 25.369507 C 532.887512 28.290039 666.243408 161.371094 663.428955 322.613037 L 604.716919 321.588257 C 606.985962 191.594604 499.474243 84.304443 364.583557 81.949951 Z"/>
                        </g>
                    </svg>
                </h1>
                <div className={"flex z-10 justify-center space-x-4 space-x-reverse mt-6 md:mt-8"}>
                    <Button component={"a"} href={"/products"}
                            className={"*:!pr-6 *:!pl-4"}
                            variant={"tonal"}>
                        مشاهده محصولات
                        <Icon className={"mr-2"} type={"outline"}>
                            chevron_left
                        </Icon>
                    </Button>
                    <Button component={"a"} href={"/about-us"}
                            className={"border border-on-primary-light dark:border-on-primary-dark text-on-primary-light dark:text-on-primary-dark"}
                            variant={"outline"}>
                        درباره ما
                    </Button>
                </div>
                <div
                    className={"absolute w-9/12 md:w-5/12 md:h-[900px] h-[500px] z-[5] left-1/2 transform -translate-x-1/2 -bottom-[120px]"}>
                    <Image layout={"fill"} objectFit={"contain"}
                           src={"/slide-1.png"}/>
                </div>
                <div
                    className={" z-0 absolute rounded-full  w-[400px] h-[400px]  -left-[200px] -bottom-[200px] md:-left-[450px] md:-bottom-[450px] shadow-xl  bg-on-primary-light/10 dark:bg-on-primary-dark/40 md:w-[900px] md:h-[900px] "}>

                </div>
                <div
                    className={"z-[0] w-[350px] h-[350px]  -right-[175px] -top-[175px] absolute rounded-full md:-right-[350px] shadow-xl md:-top-[350px] bg-on-primary-light/10 dark:bg-on-primary-dark/40 md:w-[700px] md:h-[700px] "}>

                </div>
                <div
                    className={"z-[0] w-[300px] h-[300px]  -right-[150px] -bottom-[150px] absolute rounded-full md:-right-[250px] shadow-xl md:-bottom-[250px] bg-on-primary-light/10 dark:bg-on-primary-dark/40 md:w-[500px] md:h-[500px] "}>

                </div>
                <div
                    className={"z-[0] w-[250px] h-[250px]  -left-[125px] -top-[125px] absolute rounded-full md:-left-[150px] shadow-xl md:-top-[150px] bg-on-primary-light/10 dark:bg-on-primary-dark/40 md:w-[300px] md:h-[300px] "}>

                </div>
            </div>
            :
            <div className={"relative  md:h-[720px] h-[440px] w-full rounded-[24px] overflow-hidden "}>
                <Image objectFit={"cover"} fill src={`/data${slidesData[selected].image.url}`} alt={"s"}/>
                <div
                    className={"w-5/12 bg-secondary-container-light dark:bg-secondary-container-dark rounded-[24px] px-8 py-8 absolute right-6 bottom-6"}>
                    <h2 className={"text-title-large text-on-secondary-container-light dark:text-on-secondary-container-dark mb-2 font-black"}>
                        {slidesData[selected].title}
                    </h2>
                    <p className={"text-on-secondary-container-light dark:text-on-secondary-container-dark text-body-large font-normal"}>
                        {slidesData[selected].description}
                    </p>
                </div>
            </div>}
        </div>
    )
}