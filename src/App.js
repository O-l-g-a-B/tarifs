import './App.css';
import React from "react";
import './components/Card.css';
import Card from './components/Card';

const cards = [{
  "name": "Безлимитный 300",
  "price": "300",
  "mbit": "до 10 Мбит/сек",
  "text": "Объем включенного трафика не ограничен",
  "color": "rgb(99, 209, 245)"
}, {
  "name": "Безлимитный 450",
  "price": "450",
  "mbit": "до 50 Мбит/сек",
  "text": "Объем включенного трафика не ограничен",
  "color": "rgb(53, 172, 152)"
}, {
  "name": "Безлимитный 550",
  "price": "550",
  "mbit": "до 100 Мбит/сек",
  "text": "Объем включенного трафика не ограничен",
  "color": "rgb(219, 102, 78)",
  isSelected: true
}, {
  "name": "Безлимитный 1000",
  "price": "1000",
  "mbit": "до 200 Мбит/сек",
  "text": "Объем включенного трафика не ограничен",
  "color": "rgb(68, 63, 63)"
}];

class App extends React.Component {
  render() {
    return ( 
      <div className = "App">
        {
          cards.map((card) =>
            <Card name={card.name} price={card.price} mbit={card.mbit} text={card.text} color={card.color} isSelected={card.isSelected}></Card>
          )
        }
      </div>
    );
  }
}

export default App;