import * as React from "react";
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
} from "react-native-svg";
//Usage:
//       <FunIcon width={24} height={24}></FunIcon>
const FunIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="m4.255 22.252 12.892-5.978-9.212-9.211-5.977 12.886c-.086.205-.411 1.034.474 1.823.96.851 1.617.565 1.823.48Z"
    />
    <Path
      fill="url(#b)"
      d="m6.644 9.846-.96 2.085c-.309.749 5.165 6.275 8.257 5.829l3.205-1.486c-3.8 1.755-10.97-5.411-10.502-6.428Z"
    />
    <Path
      fill="url(#c)"
      d="m4.7 14.051-.222.475-.754 1.622c-.006.64 3.291 3.932 5.354 3.863l2.617-1.211c-2.834.491-7.32-4.057-6.994-4.749Z"
    />
    <Path
      fill="url(#d)"
      d="M2.02 19.823c.275.549 1.618 1.886 2.732 2.2l2.766-1.28.017-.011c-1.703.783-4.583-2.12-4.634-2.794l-.88 1.885Z"
    />
    <Path
      fill="url(#e)"
      d="m4.255 22.252 12.892-5.978-9.212-9.211-5.977 12.886c-.086.205-.411 1.034.474 1.823.96.851 1.617.565 1.823.48Z"
      opacity={0.75}
    />
    <Path
      fill="url(#f)"
      d="m4.255 22.252 12.892-5.978-9.212-9.211-5.977 12.886c-.086.205-.411 1.034.474 1.823.96.851 1.617.565 1.823.48Z"
      opacity={0.75}
    />
    <Path
      fill="url(#g)"
      d="M12.34 7.109c-.153.314-.456.36-.68.29l.367-.725s.411.092.423-.177l.017.377-.126.235Z"
    />
    <Path
      fill="url(#h)"
      d="M13.364 3.109s.263-.12.428-.463c.166-.343-.651-.989-.651-.989l-.383.669s.646.423.446.566c-.206.142.16.217.16.217Z"
    />
    <Path
      fill="url(#i)"
      d="M20.05 8.606c.12-1.052-.59-1.4-.846-1.372 0 0-.046-.342.411-.45.303-.07 1.074.616.874 1.393l-.44.429Z"
    />
    <Path
      fill="url(#j)"
      d="M17.255 16.195c-.64.64-3.223-.915-5.777-3.463-2.549-2.549-4.103-5.137-3.463-5.777.64-.64 3.223.914 5.777 3.462 2.549 2.555 4.097 5.138 3.463 5.778Z"
    />
    <Path
      fill="url(#k)"
      d="M17.038 15.771c-.486.486-2.806-1.045-5.177-3.422C9.489 9.97 7.952 7.657 8.438 7.17c.486-.485 2.806 1.046 5.177 3.423 2.372 2.377 3.909 4.692 3.423 5.177Z"
    />
    <Path
      fill="url(#l)"
      d="M13.787 2.646s-.298.634-.338.703c-.148.251-.565.337-1.314.234-.748-.103-.966-.063-1-.057-.034.011-.474-.343-.474-.343l.04-.36s.103-.137.446-.091c.611.091 2.411.394 2.64-.086Z"
    />
    <Path
      fill="url(#m)"
      d="M15.272 13.257c.6-.686 1.16-.148 1.514-.64L16.181 12c-.355.486-.869.029-1.503.697l.594.56Z"
    />
    <Path
      fill="url(#n)"
      d="M8.764 4.937c.828.492.091 1.166.56 1.549l.645-.577c-.468-.383.206-1.046-.622-1.537l-.583.565Z"
    />
    <Path
      fill="url(#o)"
      d="M17.535 7.48c.023-.006.035-.143.372-.383.337-.24 1.097.131 1.194.189.103.057.017 1 .017 1s-.948-1.012-1.423-.778c-.474.229-.16-.028-.16-.028Z"
    />
    <Path
      fill="url(#p)"
      d="M17.66 9.829s-.034.371-.205.542c-.308.303-.8-.154-1.423.012 0 0 .286-.726.314-.783 0 0 .252-.154.51-.006.262.143.49.189.65.103.16-.085.155.132.155.132Z"
    />
    <Path
      fill="#FFBF00"
      d="M19.335 8.194s-.611.28-.692.32c-.08.04-.262-1.383.178-1.526.445-.142.748-.194.794-.2.046-.011-.766.075-.28 1.406ZM17.455 10.366c.252-.263.594-.652.577-.76-.08-.698-.645-2.235-.125-2.515 0 0-.486.343-.635.446-.148.103-.257.377-.245.829.028.788.657 1.765.428 2Z"
    />
    <Path
      fill="url(#q)"
      d="M15.718 4.726c-.417 2.931-3.326 5.731-3.326 5.731l.395.6s3.165-3.297 3.571-6.24l-.64-.091Z"
    />
    <Path
      fill="url(#r)"
      d="M10.352 3.503c-.068.126.132.337.612.92s1.725 2.126 1.371 2.686l.383-.789s.006-.629-.371-1.24c-.595-.96-1.732-1.994-1.646-2.251l-.349.674Z"
    />
    <Path
      fill="url(#s)"
      d="M12.9 12.423a.234.234 0 1 0 0-.469.234.234 0 0 0 0 .469Z"
    />
    <Path
      fill="url(#t)"
      d="M16.164 2.686a.234.234 0 1 0 0-.469.234.234 0 0 0 0 .469Z"
    />
    <Path
      fill="url(#u)"
      d="M13.963 6.086a.234.234 0 1 0 0-.469.234.234 0 0 0 0 .469Z"
    />
    <Path
      fill="url(#v)"
      d="M15.352 10.377a.234.234 0 1 0 0-.468.234.234 0 0 0 0 .468Z"
    />
    <Path
      fill="url(#w)"
      d="M21.375 9.806a.234.234 0 1 0 0-.469.234.234 0 0 0 0 .469Z"
    />
    <Path
      fill="url(#x)"
      d="M19.884 14.749a.234.234 0 1 0 0-.469.234.234 0 0 0 0 .469Z"
    />
    <Path
      fill="url(#y)"
      d="M18.907 11.731a.234.234 0 1 0 0-.468.234.234 0 0 0 0 .468Z"
    />
    <Path
      fill="url(#z)"
      d="M20.192 5.366a.234.234 0 1 0 0-.469.234.234 0 0 0 0 .469Z"
    />
    <Path
      fill="url(#A)"
      d="M17.564 6.132a.234.234 0 1 0 0-.469.234.234 0 0 0 0 .469Z"
    />
    <Path
      fill="url(#B)"
      d="M15.558 15.389c2.388-1.96 6.434-2.366 6.434-2.366l.132-.903s-4.789.572-7.326 2.772c.274.188.526.354.76.497Z"
    />
    <Path
      fill="url(#C)"
      d="M9.564 9.743c.16.217.337.434.525.663.509-1.12.4-2 .4-2l-.622-.389c.062.692-.149 1.354-.303 1.726Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={1.201}
        x2={11.4}
        y1={8.863}
        y2={20.949}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.254} stopColor="#FBE07A" />
        <Stop offset={1} stopColor="#FF40BF" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={6.744}
        x2={15.207}
        y1={9.748}
        y2={18.211}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.254} stopColor="#9F00E8" />
        <Stop offset={1} stopColor="#7000A3" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={4.398}
        x2={10.268}
        y1={14.355}
        y2={20.225}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.254} stopColor="#9F00E8" />
        <Stop offset={1} stopColor="#7000A3" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={2.624}
        x2={6.338}
        y1={18.207}
        y2={21.921}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.254} stopColor="#9F00E8" />
        <Stop offset={1} stopColor="#7000A3" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={12.384}
        x2={13.787}
        y1={6.895}
        y2={6.447}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#BD2719" />
        <Stop offset={1} stopColor="#FF4E0D" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={13.688}
        x2={13.06}
        y1={3.415}
        y2={1.855}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#BD2719" />
        <Stop offset={1} stopColor="#FF4E0D" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={20.673}
        x2={18.334}
        y1={8.18}
        y2={6.681}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFCB4B" />
        <Stop offset={1} stopColor="#E81CA2" />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={14.68}
        x2={9.453}
        y1={5.123}
        y2={21.601}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.254} stopColor="#FBE07A" />
        <Stop offset={1} stopColor="#E81CA2" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={16.396}
        x2={8.375}
        y1={8.906}
        y2={14.531}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FBE07A" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={9.939}
        x2={12.53}
        y1={3.188}
        y2={3.149}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#BD2719" />
        <Stop offset={1} stopColor="#FF4E0D" />
      </LinearGradient>
      <LinearGradient
        id="m"
        x1={16.038}
        x2={15.415}
        y1={12.121}
        y2={13.239}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF9214" />
        <Stop offset={1} stopColor="#FF4E0D" />
      </LinearGradient>
      <LinearGradient
        id="n"
        x1={8.76}
        x2={9.702}
        y1={3.529}
        y2={6.225}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#80DAFE" />
        <Stop offset={1} stopColor="#008EE6" />
      </LinearGradient>
      <LinearGradient
        id="o"
        x1={18.387}
        x2={18.171}
        y1={8.766}
        y2={6.048}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFCB4B" />
        <Stop offset={1} stopColor="#E81CA2" />
      </LinearGradient>
      <LinearGradient
        id="p"
        x1={16.103}
        x2={17.605}
        y1={9.913}
        y2={10.156}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFCB4B" />
        <Stop offset={1} stopColor="#E81CA2" />
      </LinearGradient>
      <LinearGradient
        id="q"
        x1={15.071}
        x2={12.842}
        y1={4.831}
        y2={14.002}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.254} stopColor="#E100FF" />
        <Stop offset={1} stopColor="#7000A3" />
      </LinearGradient>
      <LinearGradient
        id="r"
        x1={10.688}
        x2={12.336}
        y1={3.329}
        y2={6.076}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF9214" />
        <Stop offset={1} stopColor="#FF4E0D" />
      </LinearGradient>
      <LinearGradient
        id="s"
        x1={12.453}
        x2={13.342}
        y1={10.87}
        y2={13.486}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFCB4B" />
        <Stop offset={1} stopColor="#E81CA2" />
      </LinearGradient>
      <LinearGradient
        id="t"
        x1={15.449}
        x2={16.914}
        y1={1.28}
        y2={3.687}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FBE07A" />
        <Stop offset={1} stopColor="#E81CA2" />
      </LinearGradient>
      <LinearGradient
        id="u"
        x1={13.929}
        x2={14.295}
        y1={5.722}
        y2={7.109}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#80DAFE" />
        <Stop offset={1} stopColor="#008EE6" />
      </LinearGradient>
      <LinearGradient
        id="v"
        x1={15.194}
        x2={15.418}
        y1={9.698}
        y2={10.338}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#80DAFE" />
        <Stop offset={1} stopColor="#008EE6" />
      </LinearGradient>
      <LinearGradient
        id="w"
        x1={21.545}
        x2={21.126}
        y1={9.025}
        y2={10.359}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFCB4B" />
        <Stop offset={1} stopColor="#E81CA2" />
      </LinearGradient>
      <LinearGradient
        id="x"
        x1={19.815}
        x2={19.945}
        y1={13.018}
        y2={15.87}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFCB4B" />
        <Stop offset={1} stopColor="#E81CA2" />
      </LinearGradient>
      <LinearGradient
        id="y"
        x1={18.753}
        x2={18.977}
        y1={11.054}
        y2={11.694}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.254} stopColor="#9F00E8" />
        <Stop offset={1} stopColor="#7000A3" />
      </LinearGradient>
      <LinearGradient
        id="z"
        x1={20.647}
        x2={19.784}
        y1={4.351}
        y2={5.843}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#80DAFE" />
        <Stop offset={1} stopColor="#008EE6" />
      </LinearGradient>
      <LinearGradient
        id="A"
        x1={17.503}
        x2={17.791}
        y1={5.565}
        y2={7.161}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF9214" />
        <Stop offset={1} stopColor="#FF4E0D" />
      </LinearGradient>
      <LinearGradient
        id="B"
        x1={13.178}
        x2={21.521}
        y1={13.636}
        y2={13.807}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#80DAFE" />
        <Stop offset={1} stopColor="#008EE6" />
      </LinearGradient>
      <LinearGradient
        id="C"
        x1={8.57}
        x2={10.57}
        y1={12.708}
        y2={7.736}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FBE07A" />
        <Stop offset={1} stopColor="#E81CA2" />
      </LinearGradient>
      <RadialGradient
        id="e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(119.598 -.392 8.411) scale(5.8548 1.79244)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.5} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="f"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(151.7 3.132 10.444) scale(9.28098 2.89463)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#440063" stopOpacity={0.75} />
        <Stop offset={1} stopColor="#420061" stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default FunIcon;
