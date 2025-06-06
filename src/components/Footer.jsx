import { IoSend } from "react-icons/io5"
import { medicalhospital } from "../assets"
import { footerContact, footerNav } from "../constants"
import { AiFillInstagram } from "react-icons/ai"
import { FaLinkedinIn, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="container pt-[6rem]">
        <div className="flex md:flex-1 flex-wrap  gap-7 w-full font-poppins">
            <div className="max-w-[25rem]">
                <img src={medicalhospital} width={120} className="mb-4" height={31} alt="Logo" />
                <p className="text-[.9rem] text-gray-700">Experience world-class healthcare services with expert doctors, advanced treatments, and compassionate care, all in one place.</p>
            </div>
            <div className="flex md:flex-1 flex-wrap justify-center gap-20">
                <div className="footer">
                    <p>Navigation</p>
                    <ul>
                    {footerNav.map((item, index) => (
                        <li key={index} className="h-9">
                            <a href=''>{item}</a>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="footer">
                    <p>Contact</p>
                    <ul>
                        {footerContact.map((item, index) => (
                            <li key={index} className="h-9">
                                <a href="">{item}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer">
                <p>Get the latest information</p>
                <div className="relative w-[300px] border border-gray-300 rounded-2xl overflow-hidden">
                    <input className="w-full h-[45px] indent-4" type="text" placeholder="Email Address" />
                    <span className="absolute top-1/2 -translate-y-1/2 right-0 bg-primary h-full flex items-center justify-center w-[40px] text-white cursor-pointer"><IoSend /></span>
                </div>
            </div>
        </div>
        <div className="flex items-center border-t-2 border-gray-300 mt-7 p-5 justify-between">
            <p className="text-xs text-gray-700">Copyright © 2025 MriCael All Rights Reserved</p>
            <div className="flex items-center gap-3 text-gray-600">
                <AiFillInstagram />
                <FaLinkedinIn />
                <FaYoutube />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
