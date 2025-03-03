import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState();
  const [isDetail, setIsDetail] = useState(false);

  return (
    <SidebarContext.Provider
      value={{ isOpen, setIsOpen, isDetail, setIsDetail }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

function useSidebar() {
  const context = useContext(SidebarContext);
  return context;
}

export { SidebarProvider, useSidebar };
