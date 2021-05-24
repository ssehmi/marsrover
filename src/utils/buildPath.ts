import getMoveFromInstruction from './getMoveFromInstruction';
import getPointAndOrientation from './getPointAndOrientation';
import { AvailableInstructionsType } from './getMoveFromInstruction';
import { ILocation, IPoint } from '../robotMoves/moveTypes';
import isOutOfBounds from './isOutOfBounds';
import isKnownLostLocation from './isKnownLostLocation';

const lostLocations: IPoint[] = [];

export interface IMapBounds {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}

const buildPath = (
    startPosition: string,
    instructions: AvailableInstructionsType[] = [],
    mapBounds: IMapBounds
) => {
    const initialValue: ILocation[] = [getPointAndOrientation(startPosition)];
    return instructions.reduce((acc, curr) => {
        const moveFunction = getMoveFromInstruction(curr);
        const previousLocation = acc[acc.length - 1];
        const nextDirection = moveFunction(previousLocation);
        const isOutOfMap = isOutOfBounds(nextDirection, mapBounds);
        const isKnownLost = isKnownLostLocation(nextDirection, lostLocations);
        // @ts-ignore
        if (previousLocation.lost) {
            return acc;
        }
        if (isKnownLost) {
            return acc;
        }
        if (isOutOfMap) {
            lostLocations.push({
                x: nextDirection.position.x,
                y: nextDirection.position.y,
            });
            acc = [
                ...acc.slice(0, acc.length),
                // @ts-ignore
                { ...previousLocation, lost: true },
            ];
            return acc;
        }
        acc.push(nextDirection);
        return acc;
    }, initialValue);
};

export default buildPath;
