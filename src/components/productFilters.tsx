"use client"
import { departmentNavBar, sortCategory } from "@/libs/constants";
import { FilterActionKind, useDataContext } from "@/store/data";
import { useRouter } from "next/navigation";
import React from "react";

const ProductFilters = () => {
    const router = useRouter()
    const { filterState, filterDispatch, addItem } = useDataContext();
    const dummyData = {
        id: 23,
        department: "Kitchen",
        name: "Ptainless Steel Cookware Set",
        description:
            "A set of high-quality stainless steel cookware including pots and pans.",
        price: 149.99,
        stock: 15,
        sku: "KITCH001",
        supplier: "KitchenWonders Inc.",
        delivered: 15,
        imageUrl: "https://m.media-amazon.com/images/I/616vJsA33kL.jpg",
    }
    return (
        <div className="flex w-full space-x-2 justify-between items-center">
            <p className="p-2 text-2xl">Product</p>
            <select onChange={(e) => {
                filterDispatch({
                    type: FilterActionKind.TOGGLE_ACTIVE_CATEGORIY,
                    payload: { updatedParameter: e.target.value },
                })
            }
            }
                value={filterState.activeCategory}
            >
                <option value={'All'}>
                    All
                </option>
                {departmentNavBar.map(({ name }, index) => (
                    <option
                        key={index}
                        value={name}
                    >
                        {name}
                    </option>
                ))}
            </select>
            <label>
                Low quality Items
                <input type="checkbox" checked={filterState.lowStockItems} onChange={() => {
                    filterDispatch({ type: FilterActionKind.TOGGLE_LOW_STOCK })
                }} />
            </label>
            <select onChange={(e) => {
                filterDispatch({
                    type: FilterActionKind.TOGGLE_SORT,
                    payload: { updatedParameter: e.target.value },
                })
            }
            }
                value={filterState.activeSort}
            >
                {sortCategory.map(({ name, keyValue }, index) => (
                    <option value={keyValue} key={index}>{name}</option>
                ))}
            </select>
            <button className="bg-blue-600 text-white text-bold p-2 w-fit h-fit px-4" onClick={() => router.push("/add")}>
                New
            </button>
        </div>
    );
};

export default ProductFilters;
