import { Card } from "react-bootstrap";

function Pokecard(props) {
    return (
        <Card id={props.id} style={{ width: "18rem" }}>
            <Card.Title>{props.name}</Card.Title>
            <Card.Img variant="top" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
            <Card.Text>Type: {props.type}</Card.Text>
            <Card.Text>EXP: {props.experience}</Card.Text>
        </Card>
    );
}

export default Pokecard;