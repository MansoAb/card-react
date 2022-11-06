import { useState } from "react";


function Card(props) {
    const [bl, setBl] = useState(false);

  function addBask() {
    setBl(!bl);
  }
  const [bl1, setBl1] = useState(true);

  function addDetails() {
    setBl1(!bl1);
  }


    return <div>
  <div className="container">
    <img className="img" src={props.img} alt="" />
    <div className="info">
      <div className="block">
        <div className="text">
          <h2>{props.name}</h2>
          <h2>{props.price}</h2>
        </div>
        <div className="button1">
          <button
            className="button11"
            onClick={() => {
              return bl1 ? addDetails() : null;
            }}
          >
            Детали
          </button>
        </div>
      </div>
      <div className="block1">
        <div className="text1">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Expedita dolorem corrupti reiciendis quo itaque omnis quae, fug
          </p>
          <div className="button2">
            <button
              className={`button22 ${bl ? "added" : null}`}
              onClick={!bl ? addBask : null}
            >
              Добавить в корзину.
            </button>
            <button className={`${bl ? "add" : "noadd"}`} onClick={addBask}>
              Удалить из корзины.
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className={`textBlock ${bl1 ? "no" : null}`}>
      <button
        className="iks"
        onClick={() => {
          addDetails();
        }}
      >
        ❌
      </button>
      <h1 className="text-info">
        {props.text}
      </h1>
    </div>
  </div>
  </div>
}

export default Card