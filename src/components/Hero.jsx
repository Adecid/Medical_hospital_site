import { FaArrowRightLong } from "react-icons/fa6"
import { GoArrowUpRight } from "react-icons/go";
import { IoIosStar } from "react-icons/io";
import Button from './Button';
import { heroBottom, Partners } from "../constants";
import { cross2, herodoctor1, smileEmoji } from "../assets";
import IconCard from "./IconCard";
import { FiPhone } from "react-icons/fi";
import { TiPlus } from "react-icons/ti";

const Hero = () => {
  return (
    <div className="relative bg-white">
      <div className="relative bg-hero-gradient min-h-dvh rounded-b-[3rem]">
        <div className="relative container py-[8rem]">
          <div className="w-full flex max-md:flex-wrap items-center">
            <div className="flex flex-col z-2 flex-start gap-5 w-full md:max-w-1/2 lg:max-w-xl">
              <div className="bg-white px-2 py-1 rounded-2xl w-fit">
                <p className="text-xs text-primary font-semibold flex items-center gap-2">Version 2.0 is here <span className="text-blue">Read more</span><FaArrowRightLong className="font-bold" /></p>
              </div>
              <h1 className="text-gray-100 leading-none lg:leading-15"><span className="relative">Advanced <div className="absolute top-1/2 -translate-y-1/2 left-full ml-2 shadow-lg shadow-primary-dark/40 bg-primary rounded-full w-7 lg:w-10 h-7 lg:h-10 flex items-center justify-center text-lg text-white"><GoArrowUpRight /></div> </span> <br /> Heathcare for every <span className="flex items-center gap-2">Stage <div className="shadow-sm shadow-blue bg-blue rounded-md w-7 lg:w-10 h-7 lg:h-10 flex lg:mt-3 items-center justify-center text-lg text-white"><IoIosStar /></div> of life</span> </h1>
              <p className="font-poppins text-gray-100/90 max-w-[27rem] lg:max-w-full">
                Experirence the world-class healthcare services with expert doctors, advanced treatment, and compassionate care, all in one place.
              </p>
              <Button title="Book an appointment" className="w-fit" borderblur/>

              <ul className="flex max-xs:hidden items-center w-full mt-5">
                {heroBottom.map((item, index) => (
                  <div className="flex items-center nth-[1]:[&>div]:bg-gray-100/50 nth-[1]:[&>div]:w-0.5 nth-[1]:[&>div]:h-5 nth-[2]:[&>div]:bg-gray-100/50 nth-[2]:[&>div]:w-0.5 nth-[2]:[&>div]:h-5">
                    <li key={index} className="flex flex-col">
                      <h3 className="text-lg font-semibold text-gray-100 font-poppins">{item.num}</h3>
                      <p className="text-xs capitalize font-semibold text-gray-700">{item.title}</p>
                    </li>
                    <div className="mx-7"/>
                  </div>
                ))}
              </ul>
            </div>
            <div className="absolute origin-bottom lg:max-w-1/2 bottom-0 -right-45 md:right-0 lg:right-20">
              <img className="object-bottom object-cover lg:w-full h-[40rem] max-sm:h-[45rem]" src={herodoctor1} alt="Hero Image" />
              <IconCard icons={<TiPlus />} className="absolute max-md:hidden z-1 top-1/2 -left-6"/>
              <IconCard icons={<FiPhone />} className="absolute max-md:hidden top-60 right-0" size="size-16" bgt iconSize="text-3xl"/>
              <IconCard icons={<FiPhone />} title="Stay Healthy" stroke size="size-38" bgt iconSize="text-3xl"/>
              <div className="absolute bottom-7 -right-3 flex items-center bg-white/30 w-fit p-2 rounded-md">
                <img src={smileEmoji} width={45} height={45} alt="Smile Emoji" />
                <div className="flex flex-col gap-0 font-poppins ml-2">
                  <h4 className="flex items-center font-semibold text-[1.2rem] text-primary">84k <TiPlus /></h4>
                  <p className="text-sm text-gray-500">Happy Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-19 max-md:-top-17 max-md:-right-10">
          <img className="size-40 opacity-65 -rotate-45" src={cross2} alt="" />
        </div>
        <div className="absolute bottom-1 left-9 max-md:-top-17 max-md:-right-10">
          <img className="size-20 opacity-65 -rotate-45" src={cross2} alt="" />
        </div>
      </div>
      <div className=".container pt-38 max-md:hidden">
          <ul className="flex items-center mx-auto justify-center max-w-[62rem]">
            <p className="mr-4 font-bold text-[16px]">Our Partners</p>
            {Partners.map((item, index) => (
              <li key={index} className="flex flex-1 me-5 items-center justify-center bg-gray-300/20 py-4 px-3">
                <img src={item} width={123} alt={item} />
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default Hero
