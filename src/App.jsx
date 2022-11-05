import img from "./custo.jpg";
import { useState } from "react";

const App = () => {
  const [bl, setBl] = useState(true);

  function addBask() {
    setBl(!bl);
  }
  const [bl1, setBl1] = useState(true);

  function addDetails() {
    setBl1(!bl1);
  }

  return (
    <div>
      {" "}
      <div className="container">
        <img className="img" src={img} alt="" />
        <div className="info">
          <div className="block">
            <div className="text">
              <h2>Nike Sneaker</h2>
              <h2>$120</h2>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ad
            doloribus nesciunt cupiditate, deleniti{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default App;
