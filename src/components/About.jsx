import { medcare_1, medcare_2 } from "../assets"
import AboutCard from "./AboutCard"

const About = () => {
  return (
    <div className="container py-15 bg-gradient/30">
        <div className="flex flex-col gap-10">
            <AboutCard rightCon rightImg={medcare_1} small="Why Choose Us" title="Why Trust MediCare+ for Your Health?" text="We provide expert care with cutting-edge technology and a patient-first approach to ensure your well-being."/>

            <AboutCard leftCon leftImg={medcare_2} title="Healthcare Beyond Treatment" text="At MediCare+, we combine expertise, innovation, and compassion to deliver exceptional healthcare experiences. Discover what makes us the preferred choice for your health and well-being."/>
        </div>
    </div>
  )
}

export default About
