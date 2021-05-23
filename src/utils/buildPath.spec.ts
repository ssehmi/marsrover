import buildPath from './buildPath';

describe('buildPath', () => {
    it('returns the start position if instructions length is 0', () => {
        const path = buildPath('11 E', []);
        expect(path).toEqual([{ orientation: 'E', position: { x: 1, y: 1 } }]);
    });
    it('builds a path given from instructions to move in a square clockwise', () => {
        const path = buildPath('11 E', [
            'F',
            'F',
            'R',
            'F',
            'F',
            'R',
            'F',
            'F',
            'R',
            'F',
            'F',
        ]);
        expect(path).toEqual([
            { orientation: 'E', position: { x: 1, y: 1 } },
            { orientation: 'E', position: { x: 2, y: 1 } },
            { orientation: 'E', position: { x: 3, y: 1 } },
            { orientation: 'S', position: { x: 3, y: 1 } },
            { orientation: 'S', position: { x: 3, y: 0 } },
            { orientation: 'S', position: { x: 3, y: -1 } },
            { orientation: 'W', position: { x: 3, y: -1 } },
            { orientation: 'W', position: { x: 2, y: -1 } },
            { orientation: 'W', position: { x: 1, y: -1 } },
            { orientation: 'N', position: { x: 1, y: -1 } },
            { orientation: 'N', position: { x: 1, y: 0 } },
            { orientation: 'N', position: { x: 1, y: 1 } },
        ]);
    });
    it('builds a path given from instructions to move in a square anti-clockwise', () => {
        const path = buildPath('11 W', [
            'F',
            'F',
            'L',
            'F',
            'F',
            'L',
            'F',
            'F',
            'L',
            'F',
            'F',
        ]);
        expect(path).toEqual([
            { orientation: 'W', position: { x: 1, y: 1 } },
            { orientation: 'W', position: { x: 0, y: 1 } },
            { orientation: 'W', position: { x: -1, y: 1 } },
            { orientation: 'S', position: { x: -1, y: 1 } },
            { orientation: 'S', position: { x: -1, y: 0 } },
            { orientation: 'S', position: { x: -1, y: -1 } },
            { orientation: 'E', position: { x: -1, y: -1 } },
            { orientation: 'E', position: { x: 0, y: -1 } },
            { orientation: 'E', position: { x: 1, y: -1 } },
            { orientation: 'N', position: { x: 1, y: -1 } },
            { orientation: 'N', position: { x: 1, y: 0 } },
            { orientation: 'N', position: { x: 1, y: 1 } },
        ]);
    });
    it('if a direction is not recognised it just adds the last position into the path', () => {
        const path = buildPath('11 E', [
            'F',
            'F',
            'L',
            // @ts-ignore
            'XX',
            'F',
        ]);
        expect(path).toEqual([
            { orientation: 'E', position: { x: 1, y: 1 } },
            { orientation: 'E', position: { x: 2, y: 1 } },
            { orientation: 'E', position: { x: 3, y: 1 } },
            { orientation: 'N', position: { x: 3, y: 1 } },
            { orientation: 'N', position: { x: 3, y: 1 } },
            { orientation: 'N', position: { x: 3, y: 2 } },
        ]);
    });
});
