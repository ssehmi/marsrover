import makeTurn from '../robotMoves/makeTurn';
import moveNotImplemented from '../robotMoves/moveNotImplemented';

const instructionMap = {
    L: makeTurn(-90),
    R: makeTurn(90),
};

type AvailableInstructionsType = keyof typeof instructionMap;

const getInstruction = (instruction: AvailableInstructionsType) =>
    instructionMap[instruction] ?? moveNotImplemented;

export default getInstruction;
