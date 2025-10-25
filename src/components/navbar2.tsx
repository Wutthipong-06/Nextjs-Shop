"use client";

import Link from "next/link";
import { Search, ShoppingCart } from "lucide-react";

const nav_Items = [
    {
        label: "All Products",
        href: "/all-products",
    },
    {
        label: "Accessories",
        href: "/accessories",
    },
    {
        label: "Shirts",
        href: "/shirts",
    },
]

export function NavbarV2() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/20 border-b border-neutral-500 backdrop-blur-md">
        <nav className="relative flex items-center justify-between p-4 lg:px-6">
            {/* mobile navbar */}

            {/* desktop navbar */}
            <div className="flex w-full items-center max-w-6xl mx-auto">
                <div className="flex w-full md:w-1/3">
                    <div className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6 rounded-xl border-2 border-neutral-300 dark:border-neutral-700 gap-2">
                        <p className="p-1 m-1 text-neutral-500 hover:text-neutral-300 duration-300 ease-in-out">
                            <Link href="/">ShopV1</Link>
                        </p>
                    </div>
                <ul className="hidden gap-6 text-sm font-medium md:flex md:items-center">
                    {nav_Items.map((item) => (
                        <li key={item.label}>
                            <Link href={item.href} className="text-neutral-500 hover:text-neutral-300 hover:underline-offset-4 hover:underline cursor-pointer duration-300 ease-in-out">{item.label}</Link>
                        </li>
                    ))}
                </ul>
                </div>
                <div className="hidden justify-center md:flex md:w-1/3">
                <form action="/search" className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
                <input type="text" placeholder="Search for products..." autoComplete="off"
                className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
                />
                <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
                    <Search className="text-neutral-500" size={16} />
                </div>
                </form>
                </div>
                <div className="flex justify-end md:w-1/3">
                    <button aria-label="Open cart">
                        <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                            <ShoppingCart className="text-neutral-500 hover:scale-110 hover:text-neutral-300 duration-300 ease-in-out" size={16} />
                        </div>
                    </button>
                </div>
            </div>
        </nav>
        </div>
    )
}