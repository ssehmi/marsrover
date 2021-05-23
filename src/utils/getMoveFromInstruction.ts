import makeTurn from '../robotMoves/makeTurn';
import moveForward from '../robotMoves/moveForward';
import moveNotImplemented from '../robotMoves/moveNotImplemented';

const instructionMap = {
    L: makeTurn(-90),
    R: makeTurn(90),
    F: moveForward,
};

export type AvailableInstructionsType = keyof typeof instructionMap;

const getMoveFromInstruction = (instruction: AvailableInstructionsType) =>
    instructionMap[instruction] ?? moveNotImplemented;

export default getMoveFromInstruction;
