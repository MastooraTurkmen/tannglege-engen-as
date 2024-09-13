import {
  Hero, Section2, Section3, Services, Sections, Testimonial, Section4, OpeningHourse, Section5,
  NewItems
} from "@/components"

const Home = () => {
  return (
    <div>
      <Hero />
      <OpeningHourse />
      <Sections />
      <NewItems />
      <Section3 />
      <Testimonial />
      <Section4 />
      <Section2 />
      {/* <Services /> */}
      <Section5 />
    </div>
  )
}

export default Home;