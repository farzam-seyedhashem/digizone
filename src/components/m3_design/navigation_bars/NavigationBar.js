import Icon from "@m3/assets/icons/Icon";

export default function NavigationBar() {
    return (
        <div
            className={"px-2 space-x-2 h-[80px] w-full flex bg-surface-container-light dark:bg-surface-container-dark"}>
            <button className={" pt-3 pb-4 w-full"}>
                <div
                    className={"text-on-secondary-container-light dark:text-on-secondary-container-dark mx-auto bg-secondary-container-light dark:bg-secondary-container-dark rounded-full h-[32px] w-[64px] flex items-center justify-center mb-1"}>
                    <Icon type={"fill"}>
                        home
                    </Icon>
                </div>
                <label className={"text-center text-on-surface-light dark:text-on-surface-dark"}>
                    Label
                </label>
            </button>
            <button className={" w-full"}>
                <div
                    className={"text-on-surface-variant-light dark:text-on-surface-variant-dark mx-auto rounded-full h-[32px] w-[64px] flex items-center justify-center mb-1"}>
                    <Icon type={"outline"}>
                        home
                    </Icon>
                </div>
                <label className={"text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                    Label
                </label>
            </button>
            <button className={" w-full"}>
                <div
                    className={"text-on-surface-variant-light dark:text-on-surface-variant-dark mx-auto rounded-full h-[32px] w-[64px] flex items-center justify-center mb-1"}>
                    <Icon type={"outline"}>
                        home
                    </Icon>
                </div>
                <label className={"text-center text-on-surface-variant-light dark:text-on-surface-variant-dark"}>
                    Label
                </label>
            </button>
        </div>
    )
}