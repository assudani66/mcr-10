"use client";
import { itemType } from "@/libs/constants";
import { inventoryData } from "@/libs/data";
import React from "react";
import { createContext, useReducer, useContext, useState } from "react";

type ToggleCategories = {
    updatedParameter?: string
}

export enum FilterActionKind {
    TOGGLE_ACTIVE_CATEGORIY = "TOGGLE_ACTIVE_CATEGORIY",
    TOGGLE_LOW_STOCK = "TOGGLE_LOW_STOCK",
    TOGGLE_SORT = "TOGGLE_SORT",
}
interface FilterAction {
    type: FilterActionKind;
    payload?: ToggleCategories
}

interface FilterState {
    activeCategory: string;
    lowStockItems: boolean;
    activeSort: string;
}

interface dataContextType {
    filterState: FilterState;
    filterDispatch: React.Dispatch<FilterAction>
    data?: itemType[]
}
const dataContext = createContext<dataContextType>({} as dataContextType);

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {

    const [data, setData] = useState(inventoryData)

    const initialFiltersState = {
        activeCategory: "All",
        lowStockItems: false,
        activeSort: "name"
    }

    const filterReducer = (state: FilterState, action: FilterAction): FilterState => {
        switch (action.type) {
            case FilterActionKind.TOGGLE_ACTIVE_CATEGORIY:
                return {
                    ...state, activeCategory: action.payload?.updatedParameter || state.activeCategory
                }
            case FilterActionKind.TOGGLE_LOW_STOCK:
                return {
                    ...state, lowStockItems: !state.lowStockItems
                }
            case FilterActionKind.TOGGLE_SORT:
                return {
                    ...state, activeSort: action.payload?.updatedParameter || state.activeSort
                }
            default:
                return state
        }
    }

    const [filterState, filterDispatch] = useReducer(filterReducer, initialFiltersState)

    return (
        <dataContext.Provider value={{ filterState, filterDispatch, data }}>{children}
        </dataContext.Provider>);
};

export const useDataContext = () => useContext(dataContext)
