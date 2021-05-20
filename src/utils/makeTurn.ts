import cardinalToDegreeMap, { IOrientations } from './cardinalToDegree';
import degreeToCardinal from './degreeToCardinal';

const makeTurn = (
    currentOrientatation: IOrientations,
    newDirection: number
) => {
    const startDegree = cardinalToDegreeMap[currentOrientatation];
    const startDegreeNormalised = startDegree === 0 ? 360 : startDegree;
    console.log(newDirection, startDegree);
    const newDegree = startDegreeNormalised + newDirection;
    return degreeToCardinal(newDegree);
};

export default makeTurn;
