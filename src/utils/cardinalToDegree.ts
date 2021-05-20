const cardinalToDegreeMap = {
    N: 0,
    E: 90,
    S: 180,
    W: 270,
};

export type IOrientations = keyof typeof cardinalToDegreeMap;

export default cardinalToDegreeMap;
