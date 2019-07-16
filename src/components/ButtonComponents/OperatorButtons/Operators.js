import React, { useState } from "react";

//import any components needed
import OperatorButton from "./OperatorButton.js";

//Import your array data to from the provided data file
import { operators } from "../../../data.js";

function Operators() {
  // STEP 2 - add the imported data to state
  const [currentOperators, setCurrentOperators] = useState(operators);
  return (
    <div>
      {currentOperators.map(operator => <OperatorButton>{operator}</OperatorButton>)}
    </div>
  );
};

export default Operators;