import makeTurn from './makeTurn';

describe('makeTurn()', () => {
    it('Given a starting orientation of N, turning by 90, returns E', () => {
        const newOrientation = makeTurn('N', 90);
        expect(newOrientation).toEqual('E');
    });
    it('Given a starting orientation of W, turning by 90, returns N', () => {
        const newOrientation = makeTurn('W', 90);
        expect(newOrientation).toEqual('N');
    });
    it('Given a starting orientation of N, turning by -90, returns W', () => {
        const newOrientation = makeTurn('N', -90);
        expect(newOrientation).toEqual('W');
    });
    it('Given a starting orientation of E, turning by -90, returns N', () => {
        const newOrientation = makeTurn('E', -90);
        expect(newOrientation).toEqual('N');
    });
});
