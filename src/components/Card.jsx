import './Card.css';

function Card(props) {
    return (

        <div className={"tarif-card " + (props.isSelected ? "selected" : "")} >
            <div className="card-name">{props.name}</div>
            <div className="card-price" style={{ backgroundColor: props.color }}><span className="rub">руб </span>{props.price}<span className="mes"> /мес</span></div>
            <div className="card-mbit">{props.mbit}</div>
            <div className="card-text">{props.text}</div>

        </ div>
    )
}

export default Card;