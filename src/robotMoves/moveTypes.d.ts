import { IOrientations } from '../utils/cardinalToDegree';

interface IPoint {
    x: number;
    y: number;
}

export interface ILocation {
    orientation: IOrientations;
    position: IPoint;
}
