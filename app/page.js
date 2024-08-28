import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Section2 from "@/components/Section2"
import Sections from "@/components/Sections"
import Services from "@/components/Services"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Sections />
      <Section2 />
    </div>
  )
}

export default Home