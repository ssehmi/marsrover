import getMoveFromInstruction from './getMoveFromInstruction';
import getPointAndOrientation from './getPointAndOrientation';
import { AvailableInstructionsType } from './getMoveFromInstruction';
import { ILocation } from '../robotMoves/moveTypes';

const buildPath = (
    startPosition: string,
    instructions: AvailableInstructionsType[] = []
) => {
    const initialValue: ILocation[] = [getPointAndOrientation(startPosition)];
    return instructions.reduce((acc, curr, index) => {
        const moveFunction = getMoveFromInstruction(curr);
        const previousLocation = acc[index];
        const nextDirection = moveFunction(previousLocation);
        acc.push(nextDirection);
        return acc;
    }, initialValue);
};

export default buildPath;
