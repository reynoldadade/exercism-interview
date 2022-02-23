import Banner from "../components/Banner";
import TestimonialBadge from "../images/testimonial-badge.svg";
import Scribble from "../images/scribble.svg";
import Table from "../components/Table";
import service from "../services";
import { useEffect, useState } from "react";

const Home = () => {
  const [tracks, setTracks] = useState({});
  useEffect(() => {
    service.getTracks().then((response) => {
      setTracks(response);
    });
  }, []);

  return (
    <div>
      <Banner
        title="Testimonials I've left"
        higherIcon={TestimonialBadge}
        lowerIcon={Scribble}
      />
      <Table tracks={tracks} />
    </div>
  );
};

export default Home;
