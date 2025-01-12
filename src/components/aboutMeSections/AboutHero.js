import React from "react";
import profilePic from "../../images/IMG_9773.jpg";

const AboutHero = () => {
  return (
    <div className="row align-items-center mb-5">
      {/* Image Section */}
      <div className="col-md-5 text-center mb-4 mb-md-0">
        <img
          src={profilePic}
          alt="Jorge Eduardo Carrillo Silva"
          className="img-fluid shadow-sm"
          style={{ maxWidth: "300px" }}
        />
      </div>

      {/* Text Section */}
      <div className="col-md-7">
        <h1 className="text-body">More about me.</h1>
        <p className="lead">
          I'm a passionate cybersecurity and cloud professional, leading security operations and helping businesses build secure, reliable systems.
        </p>
        <p>
          Beyond my professional life, I’m deeply enthusiastic about consumer technology and coding. I love experimenting with new gadgets and open-source software. Outside of tech, you can often find me playing guitar, exploring museums, or reading about history and science.
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
