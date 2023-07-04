import React from "react";
import "./SearchStyle.css";
import Couple from "../../assests/couple.jpg";

const Search = () => {
  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <h2>LUXURY INCLUDED VACATIONS FOR COUPLE</h2>
          <p>
            Come experience the very pinnacle of luxury World's all-inclusive
            vacations for couples at Sandals Resorts. Our luxury beach resorts,
            set along the most gorgeous tropical settings and exquisite beaches
            in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados and
            Curaçao, feature unlimited gourmet dining, unique bars serving
            premium liquors and wines, and every land and water sport, including
            complimentary green fees at our golf resorts and PADI® certified
            scuba diving at most resorts. If you are planning a wedding, Sandals
            is the leader in World's destination weddings and honeymoon
            packages.
          </p>
        </div>
        <div className="right">
          <img src={Couple} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Search;
