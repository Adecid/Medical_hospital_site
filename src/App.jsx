import Header from "./components/Header"
import Hero from "./components/Hero"
import Service from "./components/Service"
import About from "./components/About"

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Service />
      <About />
    </div>
  )
}

export default App

