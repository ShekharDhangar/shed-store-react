import { createContext,useContext,useState } from "react";
import "../components/Toast/toast.css"
const ToastContext = createContext()
function ToastProvider({children}){
    const [ShowToast,setShowToast]= useState(false);
    function Toast({type,msg1="Success", msg2="It was Successfull"}) {
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
    
    return (
        <ToastContext.Provider value={{setShowToast,ShowToast,Toast}} >
            {children}
        </ToastContext.Provider>
    )
}

const useToastContext = ()=>useContext(ToastContext);

export {ToastProvider,useToastContext}