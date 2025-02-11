import { Logo } from "../../icons/Logo";
import { Twitter } from "../../icons/Twitter";
import { YouTube } from "../../icons/YouTube";
import { SideBarItem } from "./Sidebartem";

export function SideBar() {
    return (
        <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
            <div className="flex text-2xl pt-8 items-center">
                <div className="pr-2 text-purple-600">
                    <Logo></Logo>
                </div>
                Brainly
            </div>
            <div className="pt-8 pl-4">
                <SideBarItem text="Twitter" icon={<Twitter></Twitter>}></SideBarItem>
                <SideBarItem text="YouTube" icon={<YouTube></YouTube>}></SideBarItem>
            </div>
        </div>
    )
}