import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <Path fill="#000" d="M8 6V2h2l6 6-6 6H8v-4H0V6h8Z" />
  </Svg>
);
export default SvgComponent;
