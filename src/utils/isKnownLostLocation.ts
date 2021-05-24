import { ILocation, IPoint } from '../robotMoves/moveTypes';

const isKnownLostLocation = (
    robotLocation: ILocation,
    lostLocations: IPoint[]
) => {
    const isLost = lostLocations.find(
        ({ x, y }) =>
            robotLocation.position.x === x && robotLocation.position.y === y
    );
    return isLost !== undefined;
};
export default isKnownLostLocation;
