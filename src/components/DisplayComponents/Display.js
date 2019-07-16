import React from "react";

const Display = (props) => <div id="display">{Object.keys(props).map(key => <p>{props[key]}</p>)}</div>;

export default Display;