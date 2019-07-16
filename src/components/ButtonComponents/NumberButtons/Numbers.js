import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton.js";

//Import your array data to from the provided data file
import { numbers } from "..../data.js";

export default Numbers = () => {
  // STEP 2 - add the imported data to state
  const [currentNums, setCurrentNums] = useState(numbers);
  return (
    <div>
      {currentNums.map(number => <NumberButton>{number}</NumberButton>)}
    </div>
  );
};
