import Banner from "../components/Banner";
import TestimonialBadge from "../images/testimonial-badge.svg";
import Scribble from "../images/scribble.svg";
import Table from "../components/Table";

const Home = () => {
  return (
    <div>
      <Banner
        title="Testimonials I've left"
        higherIcon={TestimonialBadge}
        lowerIcon={Scribble}
      />
      <Table />
    </div>
  );
};

export default Home;
