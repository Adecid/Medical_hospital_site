import Header from "./components/Header"
import Hero from "./components/Hero"
import Service from "./components/Service"
import About from "./components/About"
import OurExperts from "./components/OurExperts"
import Appointment from "./components/Appointment"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Service />
      <About />
      <OurExperts />
      <Appointment />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

