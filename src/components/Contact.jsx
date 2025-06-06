import { IoIosArrowDown } from "react-icons/io"
import Button from "./Button"
import { herodoctor2 } from "../assets"

const Contact = () => {
  return (
    <div className="bg-gradient/30 overflow-hidden">
      <div className="relative container min-h-dvh pt-[7rem]">
        <div className="flex items-start max-sm:pl-5 pl-10 w-full md:max-w-1/2">
            <div className="flex-1 z-2 w-full md:max-w-xl mx-auto">
                <h2 className="font-poppins tracking-wide font-semibold text-gray-100 mb-5">Book A Free Consultation</h2>
                <form action="" className="flex flex-col gap-4">
                    <div className="flexinput">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="flexinput">
                        <input type="email" placeholder="Email ID" />
                        <input type="text" placeholder="Mobile Number" />
                    </div>
                    <div className="relative w-full h-13 bg-white rounded-4xl border-2 border-gray-300/40 text-sm font-semibold text-gray-100 indent-6 ">
                        <input type="text" className="outline-0 w-full h-full" placeholder="Country"/>
                        <span className="absolute top-1/2 -translate-y-1/2 right-5 text-xs"><IoIosArrowDown /></span>
                    </div>
                    <textarea name="" id="" placeholder="Message" className="w-full min-h-40 pt-3 bg-white rounded-4xl border-2 border-gray-300/40 outline-0 text-sm font-semibold text-gray-100 indent-6 "></textarea>
                    <Button title='Submit' className='py-3'/>
                </form>
            </div>
        </div>
        <div className="absolute lg:z-2 origin-bottom bottom-0 -right-[25rem] md:-right-40 lg:right-0 w-auto md:w-3/5 lg:max-w-7/12 h-full">
            <img src={herodoctor2} className="w-full h-full object-center object-cover" alt="Container Image" />
        </div>
      </div>
    </div>
  )
}

export default Contact
