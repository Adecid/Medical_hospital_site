import { cross1 } from "../assets"
import { medicalSpecialist } from "../constants"
import Heading from "./Heading"

const OurExperts = () => {
  return (
    <div className="relative container pt-[8rem] pb-[4rem]">
      <Heading>
        Meet Our <span>Expert</span> Doctors & <br /> Medical <span>Specialists</span>
      </Heading>
      <div className="flex flex-wrap items-center justify-center mt-16 gap-5 lg:gap-10">
        {medicalSpecialist.map((item) => (
            <div key={item.id} className="relative max-w-60 h-80 sm:even:translate-y-10 rounded-3xl overflow-hidden">
                <img className="size-full object-center object-cover" src={item.imageUrl} alt={item.title} />
                <div className="absolute z-1 bottom-5 left-1/2 -translate-x-1/2 w-[10rem] text-center bg-white/40 backdrop-blur-md py-3 px-1 rounded-3xl">
                    <p className="text-xs font-semibold text-gray-200">{item.title}</p>
                </div>
            </div>
        ))}
      </div>
      <div className="absolute top-1 -right-20 max-md:-top-17">
        <img className="size-45 opacity-40 rotate-45" src={cross1} alt="" />
      </div>
    </div>
  )
}

export default OurExperts
