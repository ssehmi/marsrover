import moveForward from './moveForward';

describe('moveForward()', () => {
    describe('moveNorth()', () => {
        it('moves up y-axis by 1', () => {
            const nextPosition = moveForward({
                orientation: 'N',
                position: { x: 1, y: 1 },
            });
            expect(nextPosition).toEqual({
                orientation: 'N',
                position: { x: 1, y: 2 },
            });
        });
    });
    describe('moveEast()', () => {
        it('moves up x-axis by 1', () => {
            const nextPosition = moveForward({
                orientation: 'E',
                position: { x: 1, y: 1 },
            });
            expect(nextPosition).toEqual({
                orientation: 'E',
                position: { x: 2, y: 1 },
            });
        });
    });
    describe('moveSouth()', () => {
        it('moves down y-axis by 1', () => {
            const nextPosition = moveForward({
                orientation: 'S',
                position: { x: 1, y: 1 },
            });
            expect(nextPosition).toEqual({
                orientation: 'S',
                position: { x: 1, y: 0 },
            });
        });
    });
    describe('moveWest()', () => {
        it('moves down x-axis by 1', () => {
            const nextPosition = moveForward({
                orientation: 'W',
                position: { x: 1, y: 1 },
            });
            expect(nextPosition).toEqual({
                orientation: 'W',
                position: { x: 0, y: 1 },
            });
        });
    });
});
