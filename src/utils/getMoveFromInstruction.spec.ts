import getMoveFromInstruction from './getMoveFromInstruction';

describe('getMoveFromInstruction()', () => {
    it('returns function for move given an instruction', () => {
        const move = getMoveFromInstruction('L');
        expect(typeof move).toEqual('function');
    });
    it('returns function if instruction is not recognised', () => {
        // @ts-ignore
        // intentional incorrect value to test function
        // ignore typescript warning
        const move = getMoveFromInstruction('x');
        expect(typeof move).toEqual('function');
    });
});
