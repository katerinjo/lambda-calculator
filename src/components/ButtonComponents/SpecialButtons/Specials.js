import React, { useState } from "react";

//import any components needed
import SpecialButton from "./SpecialButton.js";

//Import your array data to from the provided data file
import { specials } from "../../../data.js";

export default Specials = () => {
  // STEP 2 - add the imported data to state
  const [currentSpecials, setCurrentSpecials] = useState(specials);
  return (
    <div>
      {currentSpecials.map(special => <SpecialButton>{special}</SpecialButton>)}
    </div>
  );
};
