import { ILocation } from '../robotMoves/moveTypes';
import { IOrientations } from './cardinalToDegree';

const getPointAndOrientation = (startPostition: string): ILocation => {
    const [x, y, , orientation] = startPostition.split('');
    return {
        orientation: orientation as IOrientations,
        position: { x: parseInt(x, 10), y: parseInt(y, 10) },
    };
};

export default getPointAndOrientation;
