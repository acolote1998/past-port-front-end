import * as React from "react";
import Svg, { Path } from "react-native-svg";
const ArrowDownIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <Path fill="#000" d="M10 8h4v2l-6 6-6-6V8h4V0h4v8Z" />
  </Svg>
);
export default ArrowDownIcon;
