import moveNotImplemented from './moveNotImplemented';
import { ILocation } from './moveTypes';

describe('moveNotImplemented()', () => {
    it('returns the location back as a copy', () => {
        const currentLocation: ILocation = {
            orientation: 'N',
            position: { x: 1, y: 1 },
        };
        const nextLocation = moveNotImplemented(currentLocation);
        // ensure position is also a copy to aviod accidental mutation of original location
        expect(nextLocation.position === currentLocation.position).toEqual(
            false
        );
        expect(currentLocation).toEqual(nextLocation);
    });
});
