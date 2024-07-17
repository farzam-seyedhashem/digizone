import TextField from "@m3/text_fields/TextField";
import Button from "@m3/buttons/Button";
import {SignedOut, SignInButton} from "@clerk/nextjs";
import Icon from "@m3/assets/icons/Icon";

export default function Page() {
    return (
        <SignedOut>
            <div
                className={"min-h-screen w-full bg-surface-light dark:bg-surface-dark flex items-center justify-center"}>
                <div
                    className={"pb-6 pt-6 px-6 w-3/12 rounded-[24px] dark:bg-surface-container-dark bg-surface-container-light"}>
                    {/*<Button className={"*:!pr-4"}>*/}
                    {/*    <Icon className={"ml-2"}>*/}
                    {/*        chevron_right*/}
                    {/*    </Icon>*/}
                    {/*    بازگشت*/}
                    {/*</Button>*/}
                    <p className={"text-center text-[40px] "}>
                        👋🏻
                    </p>
                    <h2 className={"text-title-large font-bold text-on-surface-light dark:text-on-surface-dark text-right mb-2 mt-3"}>
                        سلام خوش آمدید
                    </h2>
                    <p className={"text-body-large text-on-surface-light dark:text-on-surface-dark"}>
برای ورود بر روی دکمه زیر کلیک نمایید.
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
    )
}