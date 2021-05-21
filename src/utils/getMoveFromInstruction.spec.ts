import getMoveFromInstruction from './getMoveFrominstruction';

describe('getMoveFromInstruction()', () => {
    it('returns function for move given an instruction', () => {
        const move = getMoveFromInstruction('L');
        console.log(move);
        expect(typeof move).toEqual('function');
    });
    it('returns function if instruction is not recognised', () => {
        const move = getMoveFromInstruction('x');
        console.log(move);
        expect(typeof move).toEqual('function');
    });
});
