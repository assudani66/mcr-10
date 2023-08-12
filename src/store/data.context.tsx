"use client";
import React from "react";
import { createContext } from "react";

const dataContext = createContext(null);

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
    return <dataContext.Provider value={null}>{children}</dataContext.Provider>;
};
