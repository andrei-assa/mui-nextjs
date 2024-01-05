import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from "react";
import {CssBaseline} from "@mui/material";
import Layout from "../views/Layout/Layout";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'MUI + NextJS Demo',
    description: 'A demo of Material UI component usage with examples',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <CssBaseline/>
        <body className={inter.className}>
        <Layout>
            {children}
        </Layout>
        </body>
        </html>
    )
}
