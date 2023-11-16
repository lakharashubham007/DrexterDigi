import React from "react";

const Slider = ({ props }) => {
  return (
    <section id="slider">
      <div className="slider-container">
        {props.data.map((template, index) => (
          <div key={index} className="slide">
            <img src={template.imageUrl} alt={template.name} />
            <h2>{template.name}</h2>
            <p>{template.description}</p>
            <a
              href={template.link}
              className="btn btn-custom btn-lg page-scroll"
            >
              View Template
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
