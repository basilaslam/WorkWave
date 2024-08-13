import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/Sidebar"

const Layout = () => {
    return(
        <div className="flex items-center justify-center h-[calc(100vh-64px)] bg-background dark:bg-[#1e1e1e]">
            <Sidebar />
            <Outlet/>
        </div>
    )
}

export default Layout