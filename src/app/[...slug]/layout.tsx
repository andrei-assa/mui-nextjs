"use client";
import * as React from "react";
import {App} from "@/views"

export default function LayoutComponent({children}: {children: React.ReactNode}) {
    return (
        <App>
            {children ? children : <>None</>}
        </App>
    )
}