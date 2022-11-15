import { GiClawSlashes } from "react-icons/gi";

import "./WrapperP.css";

const WrapperP = (props) => {
  return(
      
      <div className = "formwrapper">{props.children}</div>
  );
}

export default WrapperP;