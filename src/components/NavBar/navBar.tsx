import NavOption from "../NavOption/navOption";

// favicons
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";

const NaviBar = () => {
    return (
        <div className="fixed py-5 h-full w-36 bg-zinc-300 border-r border-black">

            <div className="items-center flex flex-col">
                <img src="" alt="" className="rounded-full border border-black h-20 w-20" />
                <p>username</p>
            </div>

            <NavOption
                text="home"
                style="flex px-2 relative top-4 items-center border">
                <RxHamburgerMenu />
            </NavOption>

            <NavOption
                text="search"
                style="flex relative top-4 items-center border px-2">
                <IoIosSearch />
            </NavOption>

            <NavOption
                text="add"
                style="flex relative top-4 items-center border px-2">
                <FaPlus />
            </NavOption>

            <NavOption
                text="settings"
                style="flex relative top-40 py-1 items-center border px-2">
                <MdOutlineSettings />
            </NavOption>
        </div>
    )
}

export default NaviBar;