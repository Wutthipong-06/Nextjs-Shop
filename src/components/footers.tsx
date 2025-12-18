"use client";

export default function Footer() {
    return (
        <footer className="border-t border-neutral-500 text-sm text-neutral-500 bg-zinc-900 dark:text-neutral-400 w-full">
            <div className="py-6 text-sm dark:border-neutral-700 max-w-6xl mx-auto px-2 sm:px-4 md:px-8 lg:px-12 xl:px-0">
                <div className="flex flex-col items-center gap-2 w-full md:flex-row md:justify-between md:gap-0">
                    <p className="text-center md:text-left">© 2025 VAziara | Dev Inc. All rights reserved.</p>
                    <hr className="my-2 md:mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
                    <p className="text-center md:text-right">Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}