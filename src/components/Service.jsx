import { services } from "../constants"
import Heading from "./Heading"
import ServiceCard from "./ServiceCard"

const Service = () => {
  return (
    <div className="container py-[8rem]">
      <Heading text="Whether you need a routine checkup, specialized treatment, or emergency assistance, our expert team is here to ensure your well-being at every step.">
        Comprehensive <span>Healthcare Services</span> for Every Need
      </Heading>

      <div className="flex flex-wrap w-[90%] gap-8 mx-auto mt-10">
        {services.map((card) => (
          <ServiceCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}

export default Service
