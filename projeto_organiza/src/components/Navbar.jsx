import React from "react";
import Image from 'next/image';
import Logo from '../../public/Logo.png';
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook } from 'react-icons/ai';
import { useState } from "react";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="static w-full h-24 shadow-xl bg-blue-navbar font-poppins">
            <div className="flex justify-between items-center h-full w-full px-4 2x1:px-16 text-black">
                <Link href='/homepage'>
                    <Image
                        src={Logo}
                        alt='Logo'
                        width='65'
                        height='45'
                        className='cursor-pointer'
                        priority
                    />
                </Link>
                <div className="hidden sm:flex ">
                    <ul className="hidden sm:flex">
                        <Link href='/'>
                            <li className="ml-10 uppercase hover:border-b text-lg">Home</li>
                        </Link>
                        <Link href='/despesas'>
                            <li className="ml-10 uppercase hover:border-b text-lg">Despesas</li>
                        </Link>
                        <Link href='/settings'>
                            <li className="ml-10 uppercase hover:border-b text-lg">Configuração</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={
                menuOpen
                    ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500 text-[#000000]'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }
            >
                <div className="flex w-full items-center justify-end">
                    <div onClick={handleNav} className="cursor-pointer text-black">
                        <AiOutlineClose size={25} />
                    </div>
                </div>
                <div className="flex-col py-4 text-black">
                    <ul>
                        <Link href='/homepage'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Home
                            </li>
                        </Link>
                        <Link href='/despesas'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Despesas
                            </li>
                        </Link>
                        <Link href='/configuracao'>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 cursor-pointer"
                            >
                                Configuração
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="flex flex-row justify-around pt-10 items-center text-black">
                    <AiOutlineInstagram size={30} className="cursor-pointer" />
                    <AiOutlineTwitter size={30} className="cursor-pointer" />
                    <AiOutlineFacebook size={30} className="cursor-pointer" />
                </div>
                <Link href='/'>
                    <Image
                        src={Logo}
                        alt='Logo'
                        width='65'
                        height='45'
                        className='fixed cursor-pointer pt-6 ml-14'
                        priority
                    />
                </Link>
            </div>
        </nav>

    )
}

export default Navbar