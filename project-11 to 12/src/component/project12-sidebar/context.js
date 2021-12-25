import React, { useState, useContext } from 'react'

const AppContext =  React.createContext();

const AppProvider = ({children}) => {
    const [isSidebarOpen , setIsSidebarOpen] = useState(false)
    const [isModalOpen , setIsModalOpen] = useState(false)



    const opensidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openmodal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
    }

    return ( <AppContext.Provider 
                value = {{isModalOpen ,
                        isSidebarOpen ,
                        openmodal , 
                        opensidebar ,
                        closeModal , 
                        closeSidebar}}>{children}</AppContext.Provider>)

    
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}


export {AppContext , AppProvider}