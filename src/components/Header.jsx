import { medicalhospital } from '../assets';
import { navigation } from '../constants';
import { BiSearch } from "react-icons/bi";
import { useLocation } from 'react-router-dom';
import Button from './Button';
import { useEffect, useRef, useState } from 'react';
import MenuSvg from '../assets/svg/MenuSvg';
import { useWindowScroll } from 'react-use';

const Header = () => {
    const navContainerRef = useRef(null);
    const pathname = useLocation();

    const [lastScrollY, setLastScrollY] = useState(0);

    const { y: currentScrollY} = useWindowScroll();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if(openNavigation) {
            setOpenNavigation(false);
        } else {
            setOpenNavigation(true);
        }
    }

    const toggleMobile = () => {
        if(!openNavigation) return;

        setOpenNavigation(false);
    }

    useEffect(() => {
        if(currentScrollY === 0) {
            navContainerRef.current.classList.remove("isvisible");
        } else {
            navContainerRef.current.classList.add("isvisible");
        }

        setLastScrollY(currentScrollY);
    });

    return (
        <header className={`fixed w-full top-0 z-50 ${openNavigation ? 'bg-primary' : 'lg:bg-transparent'}`}>
            <div ref={navContainerRef} className='transition-all duration-700'>
                <div className=" flex items-center max-lg:justify-between w-full container max-xl:py-4">
                    <img className='max-w-[8.82rem]' width={140} height={30} src={medicalhospital} alt='Logo' />
                    <nav className={`${openNavigation ? "flex" : "hidden"} lg:flex lg:mx-auto fixed lg:static top-15 left-0 right-0 bottom-0 bg-primary lg:bg-transparent`}>
                        <div className="flex flex-col lg:flex-row justify-center w-full max-lg:h-full my-auto">
                            {navigation.map((item) => (
                                <a href={`#${item.title.toLowerCase()}`} key={item.id} className={`text-[1.1rem] lg:text-sm max-lg:border-b max-lg:border-gray-50/20 text-primary-dark font-bold transition-colors hover:text-primary-dark/90 ${item.url === pathname.hash ? 'hover:text-primary-dark/90' : 'text-primary-dark'} px-6 py-6 leading-3`} onClick={toggleMobile}>{item.title}</a>
                            ))}
                        </div>
                    </nav>
                    <div className="hidden lg:flex bg-white rounded-full w-8 h-8 items-center justify-center lg:mr-5">
                        <BiSearch />
                    </div>

                    <Button title="Get Started" className='hidden lg:block'/>   

                    <button className='ml-auto lg:hidden' onClick={toggleNavigation}>
                        <MenuSvg openNavigation={openNavigation}/>             
                    </button>
                </div>
            </div>
        </header>
  )
}

export default Header
