export default function Icons({Icon}) {
    return (
        <div className="cursor-pointer md:px-8 sm:h-8 flex items-center md:hover:bg-gray-100 md:hover:text-gray-800 rounded-xl active:border-b-2 active:border-blue-800">
            <Icon className="h-5 text-center "/>
        </div>
    )
}
