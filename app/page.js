import {
  Hero, Section2, Section3, Services, Sections, Testimonial, Section4, OpeningHourse, Section5,
  NewItems
} from "@/components"

const Home = () => {
  return (
    <div>
      <Hero />
      <OpeningHourse />
      <Section2 />
      <Sections />
      <NewItems />
      <Section3 />
      <Testimonial />
      {/* <Section4 /> */}
      {/* <Services /> */}
      <Section5 />
    </div>
  )
}

export default Home;