// SLICK STYLES
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// DATA
import { slides } from "../assets/data/data";

const Slider = () => {
  return (
    <>
      <div className="slider">
        <div className="container grid">
          {slides.map((slide, i) => {
            return (
              <div className="box" key={i}>
                <div className="img">
                  <img src={slide.image} alt={i} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
