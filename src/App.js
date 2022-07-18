import React, {useState} from "react";
import './App.css';
import Card from './components/Card';


const cards = [{
  "id": "1",
  "name": "Безлимитный 300",
  "price": "300",
  "mbit": "до 10 Мбит/сек",
  "text": "Объем включенного трафика не ограничен",
  "color": "rgb(99, 209, 245)",
  isChecked: false,
}, {
  "id": "2",
  "name": "Безлимитный 450",
  "price": "450",
  "mbit": "до 50 Мбит/сек",
  "text": "Объем включенного трафика не ограничен",
  "color": "rgb(53, 172, 152)",
  isChecked: false,
}, {
  "id": "3",
  "name": "Безлимитный 550",
  "price": "550",
  "mbit": "до 100 Мбит/сек",
  "text": "Объем включенного трафика не ограничен",
  "color": "rgb(219, 102, 78)",
  isChecked: false,
}, {
  "id": "4",
  "name": "Безлимитный 1000",
  "price": "1000",
  "mbit": "до 200 Мбит/сек",
  "text": "Объем включенного трафика не ограничен",
  "color": "rgb(68, 63, 63)",
  isChecked: false,
}];

export default function App() {
  const [currentData, setCurrentData] = useState(cards);

const handleClick = (id) => {
  setCurrentData(prevState => prevState.map(card => card.id === id ? ({ ...card, isChecked: true }) : ({ ...card, isChecked: false })))
};


     return ( 
      <div className = "App">
        <div className="cardsFlex">
            {
            currentData.map(card =>
                <Card {...card} key = {card.id} onClick={handleClick}></Card>
            )
          }
        </div>
      </div>
    );
  }
