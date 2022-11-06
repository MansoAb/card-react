import Card from "./Card";
import img from "./custo.jpg";
import { useState } from "react";



const App = () => {
  const arr = [
    {
      name: "Sneaker",
      price: "$120",
      img: img,
      text: "Информация3"

    },
    {
      name: "Air Presto",
      price: "$220",
      img: "https://outmaxshop.ru/components/com_jshopping/files/img_products/4813/nike-air-presto-4813-1.jpg",
      text: "Информация2"
      
    },
    {
      name: "Zoom Calm",
      price: "$190",
      img: "https://www.tvtshop.ru/upload/store/Products/Products66067/543a8e.jpg",
      text: "Информация1"
    },
    {
      name: "Puma Suede Classic",
      price: "$245",
      img: "https://redsneaker.ru/components/com_jshopping/files/img_products/4948/puma-suede-classic-4948-1.jpg",
      text: "Информация"
    } 

  ]
  const [prod, setProd] = useState(arr)

  const findArr = (e) => {
      setProd(arr.filter(item => {
        return item.name.toLowerCase().trim().indexOf(e.target.value.toLowerCase().trim()) != -1 ? item : null
      }))
  }

  return (
    <div>
      <div className="contain">
      <div className="form">
    <input className="inputText" type="text" onChange={findArr} />

  </div>
     <div className="divcards">
          {prod.map(item => {
            return <Card text={item.text} arr={arr}name={item.name} price={item.price} img={item.img}/>
          })}
          
      </div>

    </div>
    </div>
  );
};

export default App;
