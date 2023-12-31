import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://img.freepik.com/free-vector/realistic-billboard-template_52683-8253.jpg?size=626&ext=jpg"
        alt="billboard-1"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">DHA Phase VI</h1>
        {/* <span className="siDistance">500m from center</span> */}
        {/* <span className="siTaxiOp">Free airport taxi</span> */}
        <span className="siSubtitle">
          {/* Studio Apartment with Air conditioning */}
          Billboard with Lights
        </span>
        <span className="siFeatures">
         <b> Dimensions</b> • 1 Square • 20Feet Height • 25Feet Width
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
