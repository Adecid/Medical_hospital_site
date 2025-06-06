import { cross1, cross2 } from "../assets"
import Button from "../components/Button"

const Appointment = () => {
  return (
    <div className="container py-[8rem]">
      <div className="bg-container-gradient">
        <div className="w-full md:max-w-[39rem] mx-auto">
            <h2 className="text-gray-100 mb-4">Your Health Matters — Schedule Your Visit Today!</h2>
            <p className="text-gray-100/70 font-semibold mb-4">Take charge of your well-being with expert medical care. Book an appointment <br /> now and experience healthcare like never before.</p>
            <div className="relative w-full md:w-[350px] mx-auto h-[45px] overflow-hidden rounded-4xl bg-white">
                <input type="text" className="text-xs w-full h-full indent-4 font-semibold" placeholder="Enter Your First Name" />
                <div className="absolute top-1/2 -translate-y-1/2 right-2">
                    <Button borderblur className="max-sm:text-[.7rem]" title='Book an Appointment' />
                </div>
            </div>
        </div>
        <div className="absolute top-0 z-1 -right-17 md:-right-5 opacity-60">
            <img src={cross1} width={150} alt="Cross" />
        </div>
        <div className="absolute bottom-0 z-1 left-5 opacity-60">
            <img src={cross2} width={80} alt="Cross" />
        </div>
      </div>
    </div>
  )
}

export default Appointment
