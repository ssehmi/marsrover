import { IOrientations } from '../utils/cardinalToDegree';

export interface IPoint {
    x: number;
    y: number;
}

export interface ILocation {
    orientation: IOrientations;
    position: IPoint;
}
