import { ILocation } from '../robotMoves/moveTypes';
import { IMapBounds } from './buildPath';

const isOutOfBounds = (
    location: ILocation,
    mapBounds: IMapBounds = { minX: 0, minY: 0, maxX: 50, maxY: 50 }
) => {
    const { minX, minY, maxX, maxY } = mapBounds;
    const xLocation = location.position.x;
    const yLocation = location.position.y;

    return (
        xLocation < minX ||
        xLocation > maxX ||
        yLocation < minY ||
        yLocation > maxY
    );
};

export default isOutOfBounds;
