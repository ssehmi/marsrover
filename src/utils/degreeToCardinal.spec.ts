import degreeToCardinal from './degreeToCardinal';

describe('degreeToCardinal()', () => {
    it('for 0 degree it returns N', () => {
        const direction = degreeToCardinal(0);
        expect(direction).toEqual('N');
    });
    it('for 360 degree it returns N', () => {
        const direction = degreeToCardinal(360);
        expect(direction).toEqual('N');
    });
    it('for 90 degrees it returns E', () => {
        const direction = degreeToCardinal(90);
        expect(direction).toEqual('E');
    });
    it('for 180 degrees it retuns S', () => {
        const direction = degreeToCardinal(180);
        expect(direction).toEqual('S');
    });

    it('for 270 degrees it retuns W', () => {
        const direction = degreeToCardinal(270);
        expect(direction).toEqual('W');
    });

    it('for 540 it returns S', () => {
        const direction = degreeToCardinal(540);
        expect(direction).toEqual('S');
    });
});
