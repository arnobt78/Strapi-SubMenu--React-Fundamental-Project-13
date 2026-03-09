/**
 * Global UI state for navigation: sidebar open/close and which submenu is active (pageId).
 * Any component can read/update this via useGlobalContext() without prop drilling.
 */
import { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

/** Custom hook: use this in any component to access or update sidebar/submenu state */
export const useGlobalContext = () => {
  return useContext(AppContext);
};
