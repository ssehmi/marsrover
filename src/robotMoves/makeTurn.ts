import cardinalToDegreeMap, { IOrientations } from '../utils/cardinalToDegree';
import degreeToCardinal from '../utils/degreeToCardinal';
import { ILocation } from './moveTypes';

const makeTurn = (newDirection: number) => ({
    orientation,
    position,
}: ILocation): ILocation => {
    const startDegree = cardinalToDegreeMap[orientation];
    const startDegreeNormalised = startDegree === 0 ? 360 : startDegree;
    const newDegree = startDegreeNormalised + newDirection;
    const nextOrientation = degreeToCardinal(newDegree) as IOrientations;
    return { orientation: nextOrientation, position: { ...position } };
};

export default makeTurn;
