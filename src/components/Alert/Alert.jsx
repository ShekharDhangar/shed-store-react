import { BsFillCheckCircleFill,BsInfoCircleFill,MdError } from "../../icons/icons";

import "./Alert.css";
function Alert({type,msg1="Success", msg2="It was Successfull"}) {
    let AlertIcon;
    if(type==="success"){
        AlertIcon = <BsFillCheckCircleFill className="icon" />;
    }else if(type==="info"){
        AlertIcon = <BsInfoCircleFill className="icon" />
    }else{
        AlertIcon = <MdError className="icon" />
    }
  return (
    <div role="alert" className={`alert variant al-${type}`}>
      <div className="alert-icon">
        {AlertIcon}
      </div>
      <div className="alert-content">
        <span className="alert-message">{msg1}</span>
        <p className="alert-details">{msg2}</p>
      </div>
    </div>
  );
}


export { Alert };
