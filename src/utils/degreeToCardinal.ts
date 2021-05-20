const degreeToCardinal = (degree: number) => {
    const cardinals = ['N', 'E', 'S', 'W', 'N'];
    const interCardinalRange = 360 / (cardinals.length - 1);
    const normalisedDegree = degree % 360;
    const cardinalPosition = Math.floor(
        normalisedDegree / interCardinalRange + 0.5
    );
    return cardinals[cardinalPosition];
};

export default degreeToCardinal;
