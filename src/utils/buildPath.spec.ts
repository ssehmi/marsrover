import buildPath from './buildPath';
import { AvailableInstructionsType } from './getMoveFromInstruction';

describe('buildPath', () => {
    const mapBounds = { minX: 0, minY: 0, maxX: 5, maxY: 3 };
    it('returns the start position if instructions length is 0', () => {
        const path = buildPath('11 E', [], mapBounds);
        expect(path).toEqual([{ orientation: 'E', position: { x: 1, y: 1 } }]);
    });

    describe('verify last position of robot from examples', () => {
        it('starting at 11 E, with instructions: RFRFRFRF, robots last position should be 11 E', () => {
            const instructions = 'RFRFRFRF'.split('');
            const path = buildPath(
                '11 E',
                instructions as AvailableInstructionsType[],
                mapBounds
            );
            expect(path.pop()).toEqual({
                orientation: 'E',
                position: { x: 1, y: 1 },
            });
        });
        it('starting at 03 W, with instructions: LLFFFLFLFL, robots last position should be 23 S', () => {
            const instructions_1 = 'RFRFRFRF'.split('');
            const instructions_2 = 'FRRFLLFFRRFLL'.split('');
            const instructions_3 = 'LLFFFLFLFL'.split('');
            const path1 = buildPath(
                '11 E',
                instructions_1 as AvailableInstructionsType[],
                mapBounds
            );
            const path2 = buildPath(
                '32 N',
                instructions_2 as AvailableInstructionsType[],
                mapBounds
            );
            const path3 = buildPath(
                '03 W',
                instructions_3 as AvailableInstructionsType[],
                mapBounds
            );
            expect(path1.pop()).toEqual({
                orientation: 'E',
                position: { x: 1, y: 1 },
            });
            expect(path2.pop()).toEqual({
                orientation: 'N',
                position: { x: 3, y: 3 },
                lost: true,
            });
            expect(path3.pop()).toEqual({
                orientation: 'S',
                position: { x: 2, y: 3 },
            });
        });
    });
});
