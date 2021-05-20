import getPointAndOrientation from './getPointAndOrientation';

describe('getPointAndOrientation', () => {
    it('takes start position of 11 E and returns it split into an array [1,1,"E"]', () => {
        const startPosition = '11 E';
        const splitPosition = getPointAndOrientation(startPosition);
        expect(splitPosition).toEqual(['1', '1', 'E']);
    });
});
