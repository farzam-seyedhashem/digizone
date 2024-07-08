'use client'
import FAB from "@m3/floating_action_buttons/FAB";
import IconButton from "@m3/icon_buttons/IconButton";
import Link from "next/link";

export default function BottomAppBar({fabIcon,fabAction,menuList,className}){
    return(
        <div className={`bottom-app-bar-container ${className}`}>
          <ul className={"link-container"}>
              {menuList.map((menu,i)=>
                <li  key={i}>
                    <Link href={menu.link}>
                    <IconButton>
                        {menu.icon}
                    </IconButton>
                    </Link>
                </li>
              )}
          </ul>
            {fabIcon&&<FAB onClick={() => {
                fabAction && fabAction()
            }} color={"primary"}>
                {fabIcon}
            </FAB>}
        </div>
    )
}