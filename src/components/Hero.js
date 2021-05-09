import React, { useState } from "react";
import heroImage from "../images/pexels-artem-beliaikin-2106776.jpg";

const Hero = () => {
  const [heroImg, setHeroImg] = useState({
    img: heroImage,
  });

  return (
    <div>
      <img src={heroImg.img} alt="" />
    </div>
  );
};

export default Hero;
