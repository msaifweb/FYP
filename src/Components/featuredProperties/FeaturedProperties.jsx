import "./featuredProperties.css";
import billboard from "../images/billboard1.jpg";
const FeaturedProperties = () => {
  return (
    <>
      <div className="featuredPro">
        <div className="header-2 mt-5 mb-5 text-center">
          <h1 className="">Smarter Billboard Advertising</h1>
          <p>
            Billboard online lets you find and buy any available outdoor
            advertising space like Hoardings, Unipole sign, and bus shelter ads
            across the country.
          </p>
        </div>

        <div className="fp mt-5">
          <div className="fpItem">
            <img src={billboard} alt="Billboard-1" className="fpImg" />
            <span className="fpName ">Billboard with LED Lights</span>
            <span className="fpCity ">DHA Phase VI</span>
            <span className="fpPrice">Starting from 750 </span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
          <div className="fpItem">
            <img src={billboard} alt="" className="fpImg" />
            <span className="fpName">Billboard with LED Lights</span>
            <span className="fpCity">DHA Phase VI</span>
            <span className="fpPrice">Starting from 1000</span>
            <div className="fpRating">
              <button>9.3</button>
              <span>Exceptional</span>
            </div>
          </div>
          <div className="fpItem">
            <img src={billboard} alt="" className="fpImg" />
            <span className="fpName">Billboard with LED Lights</span>
            <span className="fpCity">Bahria Town</span>
            <span className="fpPrice">Starting from 999</span>
            <div className="fpRating">
              <button>8.8</button>
              <span>Excellent</span>
            </div>
          </div>
          <div className="fpItem">
            <img src={billboard} alt="billBoard" className="fpImg" />
            <span className="fpName">Billboard with LED Lights</span>
            <span className="fpCity">Gulberg</span>
            <span className="fpPrice">Starting from 900</span>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProperties;
