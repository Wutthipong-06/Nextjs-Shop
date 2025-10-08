"use client";

export default function Footer() {
    return (
    <footer className="border-t border-neutral-500 text-sm text-neutral-500 bg-zinc-900 dark:text-neutral-400">
        <div className="py-6 text-sm dark:border-neutral-700 max-w-6xl mx-auto">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
                <p>© 2025 VAziara | Dev Inc. All rights reserved.</p>
                <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
                <p>Privacy Policy</p>
            </div>
        </div>
    </footer>
    )
}