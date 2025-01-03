'use client'
import Image from 'next/image';
import Link from "next/link";
// import photon_logo_TG from '/public/photon_logo_TG.png'
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('#ffffff');
                setTextColor('#000000');
            } else {
                setColor('transparent');
                setTextColor('#ffffff');
            }
        };
        window.addEventListener('scroll', changeColor);
    }, []);

    return (
        <div
            style={{ backgroundColor: `${color}` }}
            className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
        >
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>

                <Image src="/photon_logo_TG.png" alt='logo' height="100" width="250"/>

                <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
                    <li className='p-4'>
                        <Link href="/" className="hover:text-[#66B2FF]">Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href="/about-photon" className="hover:text-[#66B2FF]">About Photon</Link>
                    </li>
                    {/*<li className='p-4'>*/}
                    {/*    <Link href="/media" className="hover:text-[#66B2FF]">Media</Link>*/}
                    {/*</li>*/}
                </ul>

                {/* Mobile Button */}
                <div onClick={handleNav} className='block sm:hidden z-10'>
                    {nav ? (
                        <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
                    ) : (
                        <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
                    )}
                </div>
                {/* Mobile Menu */}
                <div className={
                    nav
                        ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                        : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
                }
                >
                    <ul>
                        <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
                            <Link href='/' className="hover:text-[#66B2FF]">Home</Link>
                        </li>
                        <li className='p-4'>
                            <Link href='/about-photon' className="hover:text-[#66B2FF]">About Photon</Link>
                        </li>
                        {/*<li className='p-4'>*/}
                        {/*    <Link href="/media" className="hover:text-[#66B2FF]">Media</Link>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;