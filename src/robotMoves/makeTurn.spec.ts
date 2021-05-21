import makeTurn from './makeTurn';
import { ILocation } from './moveTypes';

describe('makeTurn()', () => {
    it('Given a starting orientation of N, turning by 90, position  E', () => {
        const newOrientation = makeTurn(90)({
            orientation: 'N',
            position: { x: 1, y: 1 },
        });
        expect(newOrientation).toEqual({
            orientation: 'E',
            position: { x: 1, y: 1 },
        });
    });
    it('Given a starting orientation of W, turning by 90, returns N', () => {
        const newOrientation = makeTurn(90)({
            orientation: 'W',
            position: { x: 1, y: 1 },
        });
        expect(newOrientation).toEqual({
            orientation: 'N',
            position: { x: 1, y: 1 },
        });
    });
    it('Given a starting orientation of N, turning by -90, returns W', () => {
        const newOrientation = makeTurn(-90)({
            orientation: 'N',
            position: { x: 1, y: 1 },
        });
        expect(newOrientation).toEqual({
            orientation: 'W',
            position: { x: 1, y: 1 },
        });
    });
    it('Given a starting orientation of E, turning by -90, returns N', () => {
        const newOrientation = makeTurn(-90)({
            orientation: 'E',
            position: { x: 1, y: 1 },
        });
        expect(newOrientation).toEqual({
            orientation: 'N',
            position: { x: 1, y: 1 },
        });
    });
    it('returns an updated copy of the original location', () => {
        const currentLocation: ILocation = {
            orientation: 'N',
            position: { x: 1, y: 1 },
        };
        const newOrientation = makeTurn(90)(currentLocation);
        expect(currentLocation.position === newOrientation.position).toEqual(
            false
        );
    });
});
