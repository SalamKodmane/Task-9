import { useState, useEffect } from "react";
import "./Counter.css"


function increase(setCount, count ) {
    if (count < 10) {
      setCount(count + 1);

    } else if (count >= 10 && count < 100) {
      setCount(count + 10);

    } else if (count >= 100 && count < 1000) {
      setCount(count + 100);
    }

  }
  
  
  function decrease(setCount, count ) {
    if (count <= 1000 && count > 100) {
      setCount(count - 100);

    } else if (count <= 100 && count > 10) {
      setCount(count - 10);

    } else if (count > 0 && count <= 10) {
      setCount(count - 1);
    }
    
  }
  
  
  export default function Increase() {

    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(false);
    const [showPopupsk, setShowPopupSK] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [changeBackground, setChangeBackground] = useState(false);
  
    useEffect(() => {
      if (count === 1000) {
        setCounter(true);
      }

    }, [count]);
    useEffect(() => {
      if(count === 10 || count === 100 || count === 1000){
        setShowPopup(true);
        setChangeBackground(true);
      }
      else{
        setChangeBackground(false);
      }  
    }, [count]);

    return (

      <div className={changeBackground ? "SK-Section":"container"}>

        <div className="SK-Buttons">
        <p>{count}</p>
        <div className="SK-Button">
        <button onClick={() => increase(setCount, count)}>Increase</button>
          {counter  && <button onClick={() => decrease(setCount, count)}>Decrease</button>}
        </div>
        </div>
        <div>


      {showPopup  && (

        <div className="SK-Popup">
          <p>Do You Want To Change This Number?</p>
          <p>(If You Are Sure press yes)</p>
          <button onClick={()=>setShowPopup (false)}>Yes</button>
        </div>

      )}

      {showPopupsk  && (

        <div className="SK-Popup">
          <p>Welcome To Our Page</p>
          <button onClick={()=>setShowPopupSK (false)}>Count</button>
        </div>
        
      )}
    </div>
      </div>
  
  
    );
  }