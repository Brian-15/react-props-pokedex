
import { Container, Row } from "react-bootstrap";
import Pokecard from "./Pokecard";
const defaultData = [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
];

function Pokedex({ data=defaultData }) {
    const matrixData = [[]];

    // converts data into 2D array where rows are 3 in length
    for (let i = 0; i < data.length; i++) {
        if (matrixData[matrixData.length - 1].length === 3) {
            matrixData.push([data[i]]);
        }
        else {
            matrixData[matrixData.length - 1].push(data[i]);
        }
    }

    return (
        <Container>
            <h1 className="text-center">Pokedex</h1>
            {matrixData.map(row => (
                <Row className="justify-content-md-center">
                    {row.map(card => (
                    <Pokecard id={card.id}
                        name={card.name}
                        type={card.type}
                        experience={card.base_experience} />))}
                </Row>
            ))}
        </Container>
    );
}

export default Pokedex;