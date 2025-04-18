"use client"

import { usePathname } from "next/navigation"

export default function NotFound() {
    const pathName = usePathname();
    return <h1>Custom Not found {pathName}</h1>
};