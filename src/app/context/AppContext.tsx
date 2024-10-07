"use client";
import React, { createContext, useContext, useState } from "react";

//Toggle Theme, flag and !handler.
const LayoutContext = createContext<boolean>(false);
const LayoutUpdateContext = createContext<
  React.Dispatch<React.SetStateAction<boolean>> | undefined
>(undefined);

//Hook for flag
export function useLayout() {
  return useContext(LayoutContext);
}
//Hook for flag's !handler
export function useUpdateContext() {
  return useContext(LayoutUpdateContext);
}

const AppContext = ({ children }: { children: React.ReactNode }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme((darkTheme) => !darkTheme);
  }

  return (
    <LayoutContext.Provider value={darkTheme}>
      <LayoutUpdateContext.Provider value={toggleTheme}>
        {children}
      </LayoutUpdateContext.Provider>
    </LayoutContext.Provider>
  );
};

export default AppContext;
