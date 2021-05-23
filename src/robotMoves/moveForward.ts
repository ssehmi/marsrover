import { IOrientations } from '../utils/cardinalToDegree';
import { ILocation, IPoint } from './moveTypes';

const moveNorth = ({ x, y }: IPoint) => ({ x, y: y + 1 });
const moveEast = ({ x, y }: IPoint) => ({ x: x + 1, y });
const moveWest = ({ x, y }: IPoint) => ({ x: x - 1, y });
const moveSouth = ({ x, y }: IPoint) => ({ x, y: y - 1 });
const notImplented = (position: IPoint) => ({ ...position });

const moveForwardOperators = {
    N: moveNorth,
    E: moveEast,
    W: moveWest,
    S: moveSouth,
};

const getMoveForwardOperator = (orientation: IOrientations) =>
    moveForwardOperators[orientation] ?? notImplented;

const moveForward = ({ orientation, position }: ILocation): ILocation => {
    const move = getMoveForwardOperator(orientation);
    const nextPosition = move(position);
    return { orientation, position: nextPosition };
};

export default moveForward;
