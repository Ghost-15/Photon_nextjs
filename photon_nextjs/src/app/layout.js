import './globals.css'
import Navbar from './compoments/Navbar';
import Head from "next/head";
import React from "react";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"/>
            <link rel="icon" href="/photon_logo.png"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body>
        <header><Navbar/></header>

        {children}

        <footer className="items-center justify-center bg-white dark:bg-gray-900 mt-8 p-10">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/photon_logo.png" className="h-8" alt="Logo"/>
                        <span
                            className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Photon</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="/about-photon" className="hover:underline me-4 md:me-6">About Us</a>
                        </li>
                        <li>
                            <a href="/about-photon/help" className="hover:underline">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    Photon SARL powered by TBST Development © 2024.</span>
            </div>
        </footer>

        </body>
    < /html>
    )
}
