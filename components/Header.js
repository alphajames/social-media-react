import {BellIcon,ChatIcon,ChevronDownIcon,HomeIcon,UserGroup,ViewGridIcon,FlagIcon,PlayIcon,SearchIcon,ShoppingCartIcon, UserGroupIcon} from '@heroicons/react/outline'
import Icons from './Icons'
export default function Header() {
    return (
        <div className="flex items-center sticky top-0 z-50 p-2 lg:px-5 shadow-md">
            {/* LOGO & SEARCH BAR  */}
            <div>
                <h1 className="font-bold text-2xl">Q</h1>
            </div>
            <div className="flex ml-2 items-center rounded-full bg-gray-100"> 
            <SearchIcon className="h-4 text-gray-500 ml-2" />
            <input  className="flex flex-shrink p-1 ml-1 text-gray-900 items-center bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search" />
            </div>

            {/* NAVIGATION ICONS */}
            <div className="flex justify-center flex-grow"> 
            <div className="flex space-x-6 md:space-x-4">
                <Icons Icon={HomeIcon}/>
                <Icons Icon={FlagIcon}/>
                <Icons Icon={PlayIcon}/>
                <Icons Icon={ShoppingCartIcon}/>
                <Icons Icon={UserGroupIcon}/>
            </div>
            </div>
        </div>
    )
}
