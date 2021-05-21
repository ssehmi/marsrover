import { ILocation } from './moveTypes';

const moveNotImplemented = ({
    orientation,
    position,
}: ILocation): ILocation => ({ orientation, position: { ...position } });

export default moveNotImplemented;
