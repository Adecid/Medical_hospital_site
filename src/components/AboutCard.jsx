import clsx from "clsx"
import { check } from "../assets"
import { aboutBottomSection, aboutTopSection } from "../constants"
import Button from "./Button"

const AboutCard = ({title, text, rightCon, leftCon, rightImg, leftImg, small}) => {
  return (
    <div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-7 p-7 items-center rounded-xl bg-white/70 w-full lg:max-w-[87%] mx-auto">
            <div className={clsx("border border-gray-100/20 max-w-[30rem] max-h-[30rem] max-md:mx-auto rounded-3xl overflow-hidden max-md:order-2", leftCon && 'order-2')}>
                <img className="size-full object-center object-cover" src={rightCon ? rightImg : leftImg} alt="Image" />
            </div>
            <div className="flex flex-col gap-5 items-start">
                    {small && (
                        <small className="text-xs text-primary border-1 border-primary py-0.5 px-1 rounded-md"><span>•</span>{small}</small>
                    )}
                    <h2 className="font-bold max-w-[27rem] max-md:text-3xl max-lg:text-[1.4rem]">{title}</h2>
                    <p className="text-sm font-semibold text-gray-200">{text}</p>
                    {leftCon ? (
                        <ul>
                        {aboutBottomSection.map((item) => (
                            <li key={item.id} className="flex flex-col mb-3">
                                <div className="flex items-center">
                                    <img className="" src={check} width={15} height={15} alt="Check" />
                                    <p className="ml-3 text-sm font-semibold text-gray-100">{item.title}</p>
                                </div>
                                {item.text && (
                                    <p className="ml-6.5 text-xs text-gray-100/90">{item.text}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                    ) : (
                        <ul>
                            {aboutTopSection.map((item) => (
                                <li key={item.id} className="flex items-center mb-3">
                                    <img className="" src={check} width={15} height={15} alt="Check" />
                                    <p className="ml-3 text-sm font-semibold text-gray-100">{item.title}</p>
                                </li>
                            ))}
                            <div className="mt-5">
                                <Button title="Get Started" className='rounded-md'/>
                                <Button stoke title="Learn More" className='rounded-md ml-3'/>
                            </div>
                        </ul>
                    ) }
                </div>
        </div>
    </div>
  )
}

export default AboutCard
