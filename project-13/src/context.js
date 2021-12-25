import React, { useState , useContext } from "react";
import sublinks from "./data"

const  AppContext  = React.createContext();

export const AppProvider = ({children}) => {

    const [isSidebarOpen , setisSidebarOpen] = useState(false)
    const [isModalOpen , setisModalOpen] = useState(true)
    const [location , setlocation] = useState({})
    const [page , setPage ] = useState({page:'', links:[]})
const openSidebar = () => {
    setisSidebarOpen(true)
}
const closeSidebar = () => {
    setisSidebarOpen(false)
}
const openSubmenu = (text , coordinates) => {
    const page = sublinks.find((link) => link.page === text)
    setPage(page)
    setlocation(coordinates)
    setisModalOpen(true)
}
const closeSubmenu = () => {
    setisModalOpen(false)
}

return <AppContext.Provider value={ { location , isSidebarOpen , isModalOpen , closeSubmenu , closeSidebar , openSubmenu , openSidebar , page}}>
    {children}
</AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}
